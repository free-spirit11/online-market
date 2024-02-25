import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares)
});

// import { compose, createStore, applyMiddleware } from 'redux';

// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares)); // ... allows us to spread all middlewares as separate argumnets (instead of one array variable)

// export const store = createStore(rootReducer, undefined, composedEnhancers);

