import { dotsFail, dotsSuccess } from '@state/dot/actions'
import { ADD_DOT } from '@state/dot/actionTypes'
import apiCaller from '@utils/services/apiCaller'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

function* handleAddDot(action: AddDotAction): Generator {
    try {
        const data = {
            x: action.dot.getNormalizedX(action.dot.initialR),
            y: action.dot.getNormalizedY(action.dot.initialR),
            r: action.dot.initialR,
        }

        console.log(data)
        const response: any = yield call(
            apiCaller,
            'POST',
            '/result',
            data,
            true,
        )

        console.log(response)
        put(dotsSuccess())
    } catch (e) {
        put(dotsFail(e.message))
    }
}

function* watchAddDot(): Generator {
    yield takeEvery(ADD_DOT, handleAddDot)
}

export default function* dotsSaga(): Generator {
    yield all([fork(watchAddDot)])
}
