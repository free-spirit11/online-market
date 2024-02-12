import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

const persistConfig = {
    key: 'root', //tells what exactly fo we want to persist. In this case - everything (from the root level)
    storage,
    whitelist: ['cart'] //can blackilist or whitelist reducers that we don't want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    thunk
].filter(Boolean); //this way we return the result only if it is true. False gets filtered out, so we do not pass false to middleware in this case

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares)); // ... allows us to spread all middlewares as separate argumnets (instead of one array variable)

export const store = createStore(persistedReducer, undefined, composedEnhancers); //replaced rootReducer with persisted reducer here

export const persistor = persistStore(store);