import { NextPageContext } from 'next';
import MainLayout from '../layouts/common/MainLayout';

// interface HomeProps {
//   userAgent?: string;
// }

// const Home = ({ userAgent }: HomeProps): React.ReactElement => (
//   <h1>Hello world! - user agent: {userAgent}</h1>
// );

// Home.getInitialProps = async ({ req }: NextPageContext): Promise<HomeProps> => {
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
//   return { userAgent };
// };

const Home = (): React.ReactElement => {
  return (
    <MainLayout>
      <div>test</div>
    </MainLayout>
  );
};

export default Home;
