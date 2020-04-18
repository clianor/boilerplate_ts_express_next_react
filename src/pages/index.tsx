import { NextPageContext } from 'next';

type HomeProps = {
  /** 유저 에이전트 정보 */
  userAgent?: string | undefined;
};

const Home = ({ userAgent }: HomeProps): React.ReactElement => (
  <h1>Hello world! - user agent: {userAgent}</h1>
);

Home.getInitialProps = async ({ req }: NextPageContext): Promise<HomeProps> => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Home;
