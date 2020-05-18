export interface LoginState {
  email: string;
  password: string;
}

export const LOGIN_INITIALIZE = 'auth/LOGIN_INITIALIZE';
export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';

export const loginInitAction = () => {
  return {
    type: LOGIN_INITIALIZE,
  };
};

export const loginAction = (data: any) => {
  return {
    type: LOGIN_REQUEST,
    data,
  };
};

export const loginSuccessAction = (data: any) => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};
