import MainLayout from '../../layouts/common/MainLayout';
import RegisterForm from '../../containers/auth/RegisterForm';

const Register = (): React.ReactElement => {
  return (
    <MainLayout>
      <RegisterForm />
    </MainLayout>
  );
};

export default Register;
