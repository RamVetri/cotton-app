import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const persistConfig = {
    key: 'root',
    storage,
}

const sagaMiddleware = createSagaMiddleware()
const middleWares = applyMiddleware(sagaMiddleware)
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, middleWares)
export const persistor = persistStore(store)

// persistor.purge()
store.runSaga = sagaMiddleware.run(rootSaga)