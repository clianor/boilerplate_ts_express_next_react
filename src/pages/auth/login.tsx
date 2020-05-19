import MainLayout from '../../layouts/common/MainLayout';
import AuthLayout from '../../layouts/auth/AuthLayout';
import LoginForm from '../../containers/auth/LoginForm';

const Login = (): React.ReactElement => {
  return (
    <MainLayout>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </MainLayout>
  );
};

export default Login;
