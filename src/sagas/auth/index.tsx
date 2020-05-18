import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import {
  LoginState,
  RegisterState,
  errorAction,
  loginSuccessAction,
  registerSuccessAction,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
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

function* doLoginAction() {
  yield takeLatest(LOGIN_REQUEST, loginSagaAction);
}

function registerApi(data: RegisterState) {
  const { email, company, password, passwordConfirm } = data;
  const options: AxiosRequestConfig = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({
      email: email,
      company: company,
      password: password,
      passwordConfirm,
    }),
    url: '/api/auth/register',
  };

  return axios(options);
}

function* registerSagaAction(action: any) {
  try {
    const result = yield call(registerApi, action.data);
    sessionStorage.setItem('authorization', JSON.stringify(result.data));
    yield put(registerSuccessAction(result.data));
  } catch (e) {
    yield put(errorAction(e.message));
  }
}

function* doRegisterAction() {
  yield takeLatest(REGISTER_REQUEST, registerSagaAction);
}

export default function* () {
  yield all([fork(doLoginAction), fork(doRegisterAction)]);
}
