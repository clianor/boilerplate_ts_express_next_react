import { NextPageContext } from 'next';

interface HomeProps {
  userAgent?: string;
}

const Home = ({ userAgent }: HomeProps): React.ReactElement => (
  <h1>Hello world! - user agent: {userAgent}</h1>
);

Home.getInitialProps = async ({ req }: NextPageContext): Promise<HomeProps> => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Home;
