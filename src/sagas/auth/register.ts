import { takeLatest, call, put } from 'redux-saga/effects';
import {
  RegisterState,
  errorAction,
  registerSuccessAction,
  REGISTER_REQUEST,
} from '../../reducer/auth';
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

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

export function* doRegisterAction() {
  yield takeLatest(REGISTER_REQUEST, registerSagaAction);
}
