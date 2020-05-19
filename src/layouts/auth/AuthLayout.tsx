/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const style = css`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;

  .AuthForm {
    display: flex;
    flex-direction: column;
    border: 3px solid #f1f1f1;
    max-width: 30rem;
    margin-top: 10rem;
  }

  .AuthForm_Header {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    padding: 1rem 1.25rem;
    background-color: #f1f1f1;
    min-height: 2rem;
  }

  .AuthForm > form, .footer {
    padding 1rem 0.5rem;
  }

  form > input {
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0rem;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  form > button {
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0rem;
    cursor: pointer;
    border: none;
    background-color: #f1f1f1;
  }

  form > button:hover {
    background-color: #969696;
  }

  @media screen and (max-width: 500px) {
    .AuthForm {
      margin-top: 5rem;
    }
  }
`;

interface Props {
  children?: React.PropsWithChildren<any>;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="AuthLayout" css={style}>
      {children}
    </div>
  );
};

export default AuthLayout;
