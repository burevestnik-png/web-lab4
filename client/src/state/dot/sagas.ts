import { cleanForm } from '@state/calculationForm/actions'
import {
    cleanDotsHistory,
    dotsFail,
    dotsSuccess,
    getDotsSuccess,
} from '@state/dot/actions'
import { ADD_DOT, GET_DOTS } from '@state/dot/actionTypes'
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

function* handleGetDots(action: GetDotsAction): Generator {
    const response: GetRawResponse | any = yield call(
        apiCaller,
        'GET',
        '/result',
        null,
        true,
    )
    console.log(response)

    let possibleErrorResponse = checkResponseForErrors(response)
    if (!possibleErrorResponse) {
        yield put(getDotsSuccess(response))
    } else {
        const data = {
            refreshToken: localStorage.getItem('refreshToken'),
        }

        const authResponse: any = yield call(
            apiCaller,
            'POST',
            '/login/refresh',
            data,
            false,
        )

        const possibleAuthErrorResponse = checkResponseForErrors(authResponse)
        if (possibleAuthErrorResponse) {
            yield put(logOut())
            yield put(cleanForm())
            yield put(cleanDotsHistory())
            history.push(ROOT)
        } else {
            yield put(authSuccess(authResponse))
            const response: DotRawResponse | any = yield call(
                apiCaller,
                'GET',
                '/result',
                null,
                true,
            )

            let possibleErrorResponse = checkResponseForErrors(response)
            if (possibleErrorResponse) {
                yield put(dotsFail(possibleErrorResponse.description))
            } else {
                yield put(getDotsSuccess(response))
            }
        }
    }
}

function* watchAddDot(): Generator {
    yield takeEvery(ADD_DOT, handleAddDot)
}

function* watchGetDots(): Generator {
    yield takeEvery(GET_DOTS, handleGetDots)
}

export default function* dotsSaga(): Generator {
    yield all([fork(watchAddDot), fork(watchGetDots)])
}
