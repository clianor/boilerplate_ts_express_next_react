/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Header from '../../components/base/Header';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTokenAction } from '../../reducer/auth';

const style = css`
  padding-top: 60px;
  background-color: lightblue;
`;

interface MainProps {
  children?: React.PropsWithChildren<any>;
}

const MainLayout = ({ children }: MainProps): React.ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = sessionStorage.getItem('authorization');

    if (authToken)
      dispatch(loadTokenAction(JSON.parse(authToken ? authToken : '')));
  }, []);

  return (
    <Fragment>
      <Header />
      <div css={style}>{children}</div>
    </Fragment>
  );
};

export default MainLayout;
