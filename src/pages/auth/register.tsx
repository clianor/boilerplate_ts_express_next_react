import MainLayout from '../../layouts/common/MainLayout';
import AuthLayout from '../../layouts/auth/AuthLayout';
import RegisterForm from '../../containers/auth/RegisterForm';

const Register = (): React.ReactElement => {
  return (
    <MainLayout>
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </MainLayout>
  );
};

export default Register;
