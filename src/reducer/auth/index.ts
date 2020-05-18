import {
  LoginState,
  LOGIN_INITIALIZE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from './login';
import {
  RegisterState,
  REGISTER_INITIALIZE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from './register';

export interface State {
  [key: string]: any;
  register: RegisterState;
  login: LoginState;
  authorization: string;
  error: string;
}

export const initialState: State = {
  register: {
    email: '',
    company: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    email: '',
    password: '',
  },
  authorization: '',
  error: '',
};

export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const LOAD_TOKEN = 'auth/LOAD_TOKEN';
export const SET_ERROR = 'auth/ERROR';

export const changeFieldAction = (data: any) => {
  return {
    type: CHANGE_FIELD,
    data,
  };
};

export const loadTokenAction = (data: any) => {
  return {
    type: LOAD_TOKEN,
    data,
  };
};

export const errorAction = (data: any) => {
  return {
    type: SET_ERROR,
    data,
  };
};

const reducer = (state = initialState, payload: any) => {
  switch (payload.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [payload.data.formType]: {
          ...state[payload.data.formType],
          [payload.data.key]: payload.data.value,
        },
      };
    case LOAD_TOKEN:
      return {
        ...state,
        authorization: payload.data.authorization,
      };
    case LOGIN_INITIALIZE:
      return {
        ...state,
        ['login']: {
          ...initialState.login,
        },
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        ['login']: {
          email: payload.data.email,
          password: payload.data.password,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authorization: payload.data.authorization,
        error: '',
      };
    case REGISTER_INITIALIZE:
      return {
        ...state,
        ['register']: {
          ...initialState.register,
        },
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        ['register']: {
          email: payload.data.email,
          company: payload.data.company,
          password: payload.data.password,
          passwordConfirm: payload.data.passwordConfirm,
        },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        authorization: payload.data.authorization,
        error: '',
      };
    case SET_ERROR:
      return {
        ...state,
        authorization: '',
        error: payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
