import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

// root-reducer
import { rootReducer } from './root-reducer';

const middleWares = [logger];

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers); // second parameter is optional additional initial states so it is undefined

export const persistor = persistStore(store);