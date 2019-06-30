import { createStore, applyMiddleware, compose } from 'redux'
import Rehydration from 'src/services/rehydration';
import ReduxPersist from 'src/config/reduxPersist';
import createSagaMiddleware from 'redux-saga'
//import ScreenTracking from './ScreenTrackingMiddleware'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

export default (rootReducer, rootSaga) => {
    /* ------------- Redux Configuration ------------- */
    const middleware = [];
    const enhancers = [];

    /* ------------- Navigation Middleware ------------ */
    const navigationMiddleware = createReactNavigationReduxMiddleware(
        //'root',
        state => state.nav
    );
    middleware.push(navigationMiddleware);

    /* ------------- Analytics Middleware ------------- */
    //middleware.push(ScreenTracking)

    /* ------------- Saga Middleware ------------- */

    const sagaMonitor = null;
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware));
    let composeEnhancers = compose;
    if(__DEV__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }
    const store = createStore(rootReducer, composeEnhancers(...enhancers));

    // configure persistStore and check reducer version number
    if (ReduxPersist.active) {
        Rehydration.updateReducers(store)
    }

    // kick off root saga
    let sagasManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagasManager,
        sagaMiddleware
    }
}
