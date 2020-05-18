import Link from 'next/link';

interface StrMap {
  [key: string]: string;
}

interface AuthFormProps {
  type: string;
  form: any;
  error: string;
  onChange(e: any): void;
  onSubmit(e: any): void;
}

const textMap: StrMap = {
  login: '로그인',
  register: '회원가입',
};

/**
 *  회원가입 혹은 로그인 폼을 보여줍니다.
 */
const AuthForm = ({ type, form, error, onChange, onSubmit }: AuthFormProps) => {
  return (
    <div className="AuthForm">
      <h3>{textMap[type]}</h3>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          placeholder="이메일"
          type="email"
          value={form.email}
          onChange={onChange}
        />

        {type === 'register' && (
          <input
            name="company"
            placeholder="회사코드"
            type="company"
            value={form.company}
            onChange={onChange}
          />
        )}

        <input
          name="password"
          placeholder="비밀번호"
          type="password"
          value={form.password}
          onChange={onChange}
        />

        {type === 'register' && (
          <input
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            value={form.passwordConfirm}
            onChange={onChange}
          />
        )}

        {error && <div className="error">{error}</div>}
        <button type="submit">{textMap[type]}</button>
      </form>

      <div className="footer">
        {type === 'login' ? (
          <Link href="/auth/register">
            <a>회원가입</a>
          </Link>
        ) : (
          <Link href="/auth/login">
            <a>로그인</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
