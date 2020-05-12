import MainLayout from '../../layouts/common/MainLayout';
import LoginForm from '../../containers/auth/LoginForm';

const Login = (): React.ReactElement => {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
};

export default Login;
