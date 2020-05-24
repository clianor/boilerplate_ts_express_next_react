/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Header from '../../components/base/Header';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTokenAction } from '../../reducer/auth';

const style = css`
  width: 100%;
  height: 100%;
  z-index: 1;
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
