/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../reducer/auth';

const style = css`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;

  a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }

  a.logo {
    font-size: 25px;
    font-weight: bold;
  }

  a.logo:hover {
    background-color: #ddd;
    color: black;
  }

  div.header-right {
    float: right;
  }

  div.header-right a:hover {
    background-color: #ddd;
    color: black;
  }

  @media screen and (max-width: 500px) {
    a {
      float: none;
      display: block;
      text-align: left;
    }

    div.header-right {
      float: none;
    }
  }
`;
const Header = (): React.ReactElement => {
  const { authorization } = useSelector((state: State) => state.auth);

  return (
    <div className="header" css={style}>
      <a href="#default" className="logo">
        WMS
      </a>
      <div className="header-right">
        <Link href="/">
          <a>홈</a>
        </Link>

        {authorization ? (
          <Link href="/auth/logout">
            <a>로그아웃</a>
          </Link>
        ) : (
          <Fragment>
            <Link href="/auth/login">
              <a>로그인</a>
            </Link>
            <Link href="/auth/register">
              <a>회원가입</a>
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
