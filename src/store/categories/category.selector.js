import { createSelector } from "reselect";

//initial selector that returns the slice of reducer that we need
const selectCategoryReducer = (state) => state.categories;

//memoized selector. in the first argument we give the array of reducers that we want to use (selectCategoryReducer) and the second argument is the function that takes the input of the first argument and gets what is needed from it
//so here selectCategoryReducer is the same as categoriesSlice. from which we get categories
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

//another memoized selector, where we use the previous selector's output as an input and use reduce function to get mapped categories. reduce will be executed only the first time if nothing changes.
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
);