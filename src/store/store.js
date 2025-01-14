import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga'; // import the root saga

// root-reducer
import { rootReducer } from './root-reducer'; // import the root reducer

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'], // only cart will be persisted
};

const sagaMiddleware = createSagaMiddleware(); // create saga middleware

const persistedReducer = persistReducer(persistConfig, rootReducer); // persist the root reducer

/**
 * An array of middleware functions to be applied to the Redux store.
 * 
 * The array includes:
 * - `logger` middleware if the environment is not production.
 * - `sagaMiddleware` for handling side effects in Redux.
 * 
 * Note: The `thunk` middleware is commented out and not included in the array.
 * 
 * The `filter(Boolean)` method is used to remove any falsy values from the array.
 */
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware /* thunk */].filter(
    Boolean
); 

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose; 

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares)); // apply middlewares

export const store = createStore(persistedReducer, undefined, composedEnhancers); // second parameter is optional additional initial states so it is undefined

sagaMiddleware.run(rootSaga); // run the root saga

export const persistor = persistStore(store);