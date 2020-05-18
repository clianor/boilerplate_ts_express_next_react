import { all, fork } from 'redux-saga/effects';
import { doLoginAction } from './login';
import { doRegisterAction } from './register';

export default function* () {
  yield all([fork(doLoginAction), fork(doRegisterAction)]);
}
