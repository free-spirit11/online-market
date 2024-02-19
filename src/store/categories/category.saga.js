import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsyn() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments); // here yield is instead of usual await and call() turns a function into effect. It receives a callable function and its parameter
        yield put(fetchCategoriesSuccess(categoriesArray)); // put is generator version of dispatch. does the same (dispatches the action)
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsyn); //returns only the latest function if the same one was called many times. It is like reducer: takes type of action and action that happens
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]); // effect that says run everything inside and only complete when all is done. Nothing below it happens until all generators inside array accepted by all() are finished executing
};