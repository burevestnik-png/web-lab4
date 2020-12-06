import { cleanForm } from '@state/calculationForm/actions'
import { cleanDotsHistory, dotsFail, dotsSuccess } from '@state/dot/actions'
import { ADD_DOT } from '@state/dot/actionTypes'
import { authSuccess, logOut } from '@state/user/actions'
import history from '@utils/history'
import { ROOT } from '@utils/routes'
import apiCaller from '@utils/services/apiCaller'
import { checkResponseForErrors } from '@utils/services/responseHandler'
import { showErrorSnack, showInfoSnack } from '@utils/services/snackBarService'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

function* handleAddDot(action: AddDotAction): Generator {
    try {
        const dotData = {
            x: action.dot.getNormalizedX(action.dot.initialR),
            y: action.dot.getNormalizedY(action.dot.initialR),
            r: action.dot.initialR,
        }

        const response: DotRawResponse | any = yield call(
            apiCaller,
            'POST',
            '/result',
            dotData,
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

            const authResponse: AuthRawResponse | any = yield call(
                apiCaller,
                'POST',
                '/login/refresh',
                data,
                false,
            )
            console.log(authResponse)

            const possibleAuthErrorResponse = checkResponseForErrors(
                authResponse,
            )

            if (possibleAuthErrorResponse) {
                showErrorSnack(
                    possibleAuthErrorResponse.description,
                    action.snack,
                )

                yield put(logOut())
                yield put(cleanForm())
                yield put(cleanDotsHistory())
                history.push(ROOT)
            } else {
                showInfoSnack('Пользователь успешно авторизован', action.snack)
                yield put(authSuccess(authResponse))
                const response: DotRawResponse | any = yield call(
                    apiCaller,
                    'POST',
                    '/result',
                    dotData,
                    true,
                )
                console.log(response)

                let possibleErrorResponse = checkResponseForErrors(response)
                if (possibleErrorResponse) {
                    yield put(dotsFail(possibleErrorResponse.description))
                } else {
                    yield put(dotsSuccess(action.dot, response))
                }
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
