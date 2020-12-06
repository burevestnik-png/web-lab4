import { dotsFail, dotsSuccess } from '@state/dot/actions'
import { ADD_DOT } from '@state/dot/actionTypes'
import apiCaller from '@utils/services/apiCaller'
import { checkResponseForErrors } from '@utils/services/responseHandler'
import { showErrorSnack } from '@utils/services/snackBarService'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import Dot from '../../pages/CalculationPage/components/graph/svgElements/Dot'

function* handleAddDot(action: AddDotAction): Generator {
    try {
        const data = {
            x: action.dot.getNormalizedX(action.dot.initialR),
            y: action.dot.getNormalizedY(action.dot.initialR),
            r: action.dot.initialR,
        }

        const response: DotRawResponse | any = yield call(
            apiCaller,
            'POST',
            '/result',
            data,
            true,
        )

        let possibleErrorResponse = checkResponseForErrors(response)

        if (possibleErrorResponse) {
            setTimeout(
                () =>
                    showErrorSnack(
                        possibleErrorResponse.description,
                        action.snack,
                    ),
                3000,
            )
            yield put(dotsFail(possibleErrorResponse.description))
        } else {
            yield put(dotsSuccess(Dot.of(response, action.dot)))
        }
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
