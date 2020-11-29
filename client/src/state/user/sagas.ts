import { registerUserFail, registerUserSuccess } from '@state/user/actions'
import { REGISTER_USER } from '@state/user/actionTypes'
import apiCaller from '@utils/ApiCaller'
import { checkResponseForErrors } from '@utils/ResponseHandler'
import { CALCULATIONS } from '@utils/routes'
import { showErrorSnack } from '@utils/SnackBarService'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import history from '@utils/history'

/**
 * @desc Business logic of effect.
 */
function* handleRegister(action: RegisterUserAction): Generator {
    try {
        const data = {
            login: action.login,
            password: action.password,
        }

        const response: RegisterRawResponse | any = yield call(
            apiCaller,
            'POST',
            '/login/register',
            data,
        )

        let possibleErrorResponse = checkResponseForErrors(response)

        if (possibleErrorResponse) {
            showErrorSnack(possibleErrorResponse.description, action.snack)
            yield put(registerUserFail(possibleErrorResponse.description))
        } else {
            history.push(CALCULATIONS)
            yield put(registerUserSuccess(response))
        }
    } catch (error) {
        yield put(registerUserFail(error))
    }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchRegisterUser(): Generator {
    yield takeEvery(REGISTER_USER, handleRegister)
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* userTokensSaga() {
    yield all([fork(watchRegisterUser)])
}
