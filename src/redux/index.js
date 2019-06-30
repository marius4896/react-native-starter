import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import configureStore from './createStore';
import rootSaga from 'src/sagas'
import ReduxPersist from 'src/config/reduxPersist';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
    nav: require('./navigationRedux').reducer,
});

export default () => {
    let finalReducers = reducers;
    if (ReduxPersist.active) {
        const persistConfig = ReduxPersist.storeConfig
        finalReducers = persistReducer(persistConfig, reducers)
    }

    let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./').reducers;
            store.replaceReducer(nextRootReducer);

            const newYieldedSagas = require('../sagas').default;
            sagasManager.cancel();
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas)
            })
        })
    }

    return store
}
