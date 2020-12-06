import { dotsFail, dotsSuccess } from '@state/dot/actions'
import { ADD_DOT } from '@state/dot/actionTypes'
import { authFail, authSuccess, cleanErrors } from '@state/user/actions'
import history from '@utils/history'
import { CALCULATIONS, ROOT } from '@utils/routes'
import apiCaller from '@utils/services/apiCaller'
import { checkResponseForErrors } from '@utils/services/responseHandler'
import { showErrorSnack, showInfoSnack } from '@utils/services/snackBarService'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

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
        console.log(response)

        let possibleErrorResponse = checkResponseForErrors(response)

        if (!possibleErrorResponse) {
            yield put(dotsSuccess(action.dot, response))
        } else {
            showErrorSnack(possibleErrorResponse.description, action.snack)
            showInfoSnack('Попытка автоматического входа...', action.snack)

            const data = {
                refreshToken: localStorage.getItem('refreshToken'),
            }

            const response: AuthRawResponse | any = yield call(
                apiCaller,
                'POST',
                '/login/refresh',
                data,
                false,
            )

            const possibleAuthErrorResponse = checkResponseForErrors(response)

            if (possibleAuthErrorResponse) {
                showErrorSnack(
                    possibleAuthErrorResponse.description,
                    action.snack,
                )
                history.push(ROOT)
                yield put(authFail(possibleAuthErrorResponse.description))
            } else {
                yield put(dotsFail(possibleAuthErrorResponse.description))
            }
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
