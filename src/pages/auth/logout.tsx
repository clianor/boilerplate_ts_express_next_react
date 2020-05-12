import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTokenAction } from '../../reducer/auth';
import MainLayout from '../../layouts/common/MainLayout';

const Logout = (): React.ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    sessionStorage.removeItem('authorization');
    dispatch(loadTokenAction({ authorization: '' }));

    router.push('/');
  }, []);

  return (
    <MainLayout>
      <div>Logout</div>
    </MainLayout>
  );
};

export default Logout;
