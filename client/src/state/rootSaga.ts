import dotsSaga from '@state/dot/sagas'
import userTokensSaga from '@state/user/sagas'
import { all, fork } from 'redux-saga/effects'

export function* rootSaga() {
    yield all([fork(userTokensSaga), fork(dotsSaga)])
}
