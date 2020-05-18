export interface RegisterState {
  email: string;
  company: string;
  password: string;
  passwordConfirm: string;
}

export const REGISTER_INITIALIZE = 'auth/REGISTER_INITIALIZE';
export const REGISTER_REQUEST = 'auth/REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';

export const registerInitAction = () => {
  return {
    type: REGISTER_INITIALIZE,
  };
};

export const registerAction = (data: any) => {
  return {
    type: REGISTER_REQUEST,
    data,
  };
};

export const registerSuccessAction = (data: any) => {
  return {
    type: REGISTER_SUCCESS,
    data,
  };
};
