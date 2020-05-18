import { takeLatest, call, put } from 'redux-saga/effects';
import { errorAction } from '../../reducer/auth';
import {
  RegisterState,
  registerSuccessAction,
  REGISTER_REQUEST,
} from '../../reducer/auth/register';
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
    yield put(errorAction('회원가입에 실패했습니다.'));
  }
}

export function* doRegisterAction() {
  yield takeLatest(REGISTER_REQUEST, registerSagaAction);
}
