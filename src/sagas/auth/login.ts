import { takeLatest, call, put } from 'redux-saga/effects';
import {
  LoginState,
  errorAction,
  loginSuccessAction,
  LOGIN_REQUEST,
} from '../../reducer/auth';
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

function loginApi(data: LoginState) {
  const { email, password } = data;
  const options: AxiosRequestConfig = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ email: email, password: password }),
    url: '/api/auth/login',
  };

  return axios(options);
}

function* loginSagaAction(action: any) {
  try {
    const result = yield call(loginApi, action.data);
    sessionStorage.setItem('authorization', JSON.stringify(result.data));
    yield put(loginSuccessAction(result.data));
  } catch (e) {
    yield put(errorAction(e.message));
  }
}

export function* doLoginAction() {
  yield takeLatest(LOGIN_REQUEST, loginSagaAction);
}
