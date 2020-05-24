/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { Fragment, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../reducer/auth';

const style = css`
  overflow: hidden;
  background-color: #333;

  a {
    display: block;
    float: left;
    color: #f2f2f2;
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    padding: 0.75rem 1rem;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }

  .Header-toggle {
    display: none;
  }

  .Header-right {
    float: right;
  }

  @media screen and (max-width: 600px) {
    .Header-right a {
      display: none;
    }

    .Header-toggle {
      display: block;
      float: right;
      cursor: pointer;
      padding: 0.375rem;
    }

    .Header-toggle-bar1,
    .Header-toggle-bar2,
    .Header-toggle-bar3 {
      width: 2rem;
      height: 0.25rem;
      background-color: #fff;
      margin: 0.25rem 0;
      transition: 0.4s;
    }

    .Header-toggle.responsive {
      position: absolute;
      top: 0;
      right: 0;
    }

    .Header-right.responsive {
      display: block;
      float: none;
    }

    a.responsive {
      display: block;
      float: none;
      text-align: left;
    }

    .Header-right.responsive a {
      display: block;
      float: none;
      text-align: left;
    }
  }
`;

const Header = (): React.ReactElement => {
  const [responsive, setResponsive] = useState(false);
  const { authorization } = useSelector((state: State) => state.auth);

  const handleClick = useCallback(() => {
    console.log('click', responsive);
    setResponsive(!responsive);
  }, [responsive]);

  return (
    <header className="Header" css={style}>
      <Link href="/">
        <a
          className={['Header-logo', responsive ? 'responsive' : ''].join(' ')}
        >
          WMS
        </a>
      </Link>

      <div
        className={['Header-toggle', responsive ? 'responsive' : ''].join(' ')}
        onClick={handleClick}
      >
        <div className="Header-toggle-bar1"></div>
        <div className="Header-toggle-bar2"></div>
        <div className="Header-toggle-bar3"></div>
      </div>

      <div
        className={['Header-right', responsive ? 'responsive' : ''].join(' ')}
      >
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
    </header>
  );
};

export default Header;
