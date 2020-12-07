import { authFail, authSuccess, cleanErrors } from '@state/user/actions'
import { LOGIN_USER, REGISTER_USER } from '@state/user/actionTypes'
import apiCaller from '@utils/services/apiCaller'
import history from '@utils/history'
import { checkResponseForErrors } from '@utils/services/responseHandler'
import { CALCULATIONS } from '@utils/routes'
import { showErrorSnack } from '@utils/services/snackBarService'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

/**
 * @desc Business logic of effect.
 */
function* handleAuth(action: RegisterUserAction | LoginUserAction): Generator {
    try {
        const data = {
            login: action.login,
            password: action.password,
        }

        const response: AuthRawResponse | any = yield call(
            apiCaller,
            'POST',
            action.type === REGISTER_USER ? '/login/register' : '/login',
            data,
        )

        if (response?.message === 'Failed to fetch') {
            showErrorSnack('Сервер недоступен', action.snack)
            setTimeout(() => window.location.reload(), 3000)
            return
        }

        let possibleErrorResponse = checkResponseForErrors(response)
        console.log(response)

        if (possibleErrorResponse) {
            showErrorSnack(possibleErrorResponse.description, action.snack)
            yield put(authFail(possibleErrorResponse.description))
        } else {
            history.push(CALCULATIONS)
            yield put(cleanErrors())
            yield put(authSuccess(response))
        }
    } catch (error) {
        yield put(authFail(error))
    }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchRegisterUser(): Generator {
    yield takeEvery(REGISTER_USER, handleAuth)
}

function* watchLoginUser(): Generator {
    yield takeEvery(LOGIN_USER, handleAuth)
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* userTokensSaga() {
    yield all([fork(watchRegisterUser), fork(watchLoginUser)])
}
