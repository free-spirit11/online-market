import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares)); // ... allows us to spread all middlewares as separate argumnets (instead of one array variable)

export const store = createStore(rootReducer, undefined, composedEnhancers);

