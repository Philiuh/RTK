import { createAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { takeEvery, put, call, select } from 'redux-saga/effects'
import * as AuthorizationManager from './AuthorizationManager'

export const fetchUserToken = createAction('FETCHED_USER_TOKEN')
const requestLoginResponse = createAction('REQUEST_USER_LOGIN_SUCCEED')
const requestLoginReject = createAction('REQUEST_USER_LOGIN_FAILED')

const formValues = handleActions(
  {
    [fetchUserToken]: (_, { payload }) => ({
      payload,
    }),
  },
  { username: undefined, password: undefined },
)

const token = handleActions(
  {
    [requestLoginResponse]: (_, { payload }) => ({ payload }),
  },
  {},
)

const error = handleActions(
  {
    [requestLoginReject]: (_, { payload }) => ({ payload }),
  },
  '',
)

export const authorization = combineReducers({ formValues, token, error })

export function* watchFetchUserToken() {
  yield takeEvery(fetchUserToken, fetchUserTokenAsync)
}

function* fetchUserTokenAsync() {
  try {
    const formValues = yield select(getFormValue)
    const response = yield call(AuthorizationManager.loginRequest, formValues)
    yield response !== 401
      ? put(requestLoginResponse(response.accessToken))
      : put(requestLoginReject('Неверно введен логин или пароль'))
  } catch {
    yield put(requestLoginReject('Проверьте свое подключение к сети'))
  }
}

const getFormValue = state => {
  return state.authorization.formValues.payload
}

export const getResult = state => {
  return state.authorization.token.payload
}

export const getError = state => {
  return state.authorization.error.payload
}
