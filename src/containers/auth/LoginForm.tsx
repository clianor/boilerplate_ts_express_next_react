import { ChangeEvent, FormEvent, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { changeFieldAction } from '../../reducer/auth';
import { loginAction, loginInitAction } from '../../reducer/auth/login';
import { State } from '../../store';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { login, authorization, error } = useSelector(
    (state: State) => state.auth,
  );

  useEffect(() => {
    if (authorization) {
      router.push('/');
      return;
    }

    return () => {
      dispatch(loginInitAction());
    };
  }, [authorization]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeFieldAction({
        formType: 'login',
        key: e.target.name,
        value: e.target.value,
      }),
    );
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(loginAction(login));
    },
    [login],
  );

  return (
    <AuthForm
      type="login"
      form={login}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginForm;
