module.exports = {
  parser: '@typescript-eslint/parser', // ESLint parser를 지정
  extends: [
    'plugin:react/recommended', // @eslint-plugin-react의 권장규칙사용
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin의 권장규칙사용
    'prettier/@typescript-eslint', // eslint-config-perttier를 이용해 prettier와 충돌할 수 있는 @typescript-eslint/eslint-plugin의 ESLint 규칙 사용 안함
    'plugin:prettier/recommended', // eslint-plugin-prettier 및 eslint-config-prettier를 활성화. 항상 마지막에 위치하여야 함
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX 파싱을 가능하도록 설정
    },
    ecmaVersion: 2018, // 최신 ECMAScript 기능을 구문 분석
    sourceType: 'module', // imports 사용 가능케 함
  },
  settings: {
    react: {
      version: 'detect', // eslint-plugin-react가 사용할 React 버전을 자동으로 감지하도록 지시
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
