import { ChangeEvent, FormEvent, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { changeFieldAction } from '../../reducer/auth';
import {
  registerAction,
  registerInitAction,
} from '../../reducer/auth/register';
import { State } from '../../store';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { register, authorization, error } = useSelector(
    (state: State) => state.auth,
  );

  useEffect(() => {
    if (authorization) {
      router.push('/');
    }

    return () => {
      dispatch(registerInitAction());
    };
  }, [authorization]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeFieldAction({
        formType: 'register',
        key: e.target.name,
        value: e.target.value,
      }),
    );
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(registerAction(register));
    },
    [register],
  );

  return (
    <AuthForm
      type="register"
      form={register}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterForm;
