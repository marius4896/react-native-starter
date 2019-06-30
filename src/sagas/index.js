import { takeLatest, all } from 'redux-saga/effects';
import API from 'src/services/api';
/* ------------- Types ------------- */
import { StartupTypes } from 'src/redux/startupRedux'
/* ------------- Sagas ------------- */
import { startup } from './startupSagas';
/* ------------- API ------------- */
const api = API.create();
/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
    yield all([
        takeLatest(StartupTypes.STARTUP, startup),
    ])
}
