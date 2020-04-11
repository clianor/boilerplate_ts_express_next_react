## 1. 프로젝트 시작
```properties
npm init -y
```
<br>

## 2. 프로젝트 의존성 라이브러리 설치
```properties
npm install --save react react-dom next express cross-env
```

```properties
npm install --save-dev typescript ts-node @types/react @types/node @types/express
```
<br>

## 3. eslint & prettier 설치 및 셋팅
### eslint 및 의존 라이브러리 설치
```properties
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
- eslint: Lint를 위한 라이브러리
- @typescript-eslint/parser: ESLint가 Typescript 코드를 파싱할 수 있도록하는 파서
- @typescript-eslint/eslint-plugin: Typescript와 관련된 SLint 규칙을 포함하는 플러그인

<br>

### .eslintrc.js 파일 생성
```js
module.exports = {
  parser: '@typescript-eslint/parser', // ESLint parser를 지정
  extends: [
    'plugin:@typescript-eslint/recommended' // @typescript-eslint/eslint-plugin의 권장 규칙 사용
  ],
  rules: {
    // ESLint 규칙을 덮어쓸때 사용
  }
};
```
<br>

### react를 위한 eslint 라이브러리 설치
```properties
npm install --save-dev eslint-plugin-react
```  
<br>

### .eslintrc.js 파일 수정
```js
module.exports = {
  parser: '@typescript-eslint/parser', // ESLint parser를 지정
  extends: [
    'plugin:react/recommended', // @eslint-plugin-react의 권장규칙사용
    'plugin:@typescript-eslint/recommended' // @typescript-eslint/eslint-plugin의 권장 규칙 사용
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true // JSX 파싱을 가능하도록 설정
    }
  },
  rules: {
    // ESLint 규칙을 덮어쓸때 사용
  },
  settings: {
    react: {
      version: 'detect' // eslint-plugin-react가 사용할 React 버전을 자동으로 감지하도록 지시
    }
  }
};
```
<br>

### prettier 및 의존 라이브러리 설치
```properties
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```
- prettier: 코드 형식을 변환해주는 라이브러리
- eslint-config-prettier: prettier와 충돌할 수 있는 eslint 설정을 비활성화
- eslint-plugin-prettier: ESLint의 룰에 따라 prettier를 실행

<br>

### .prettierrc.js 파일 생성
```js
module.exports = {
  semi: true, // 코드는 ; 로 끝나야합니다.
  trailingComma: 'all', // 객체나 배열을 작성 할 때, 원소 혹은 key-value 의 맨 뒤에있는 것에도 쉼표를 붙입니다.
  singleQuote: true, // 문자열을 사용 할 때에는 ' 를 사용합니다.
  printWidth: 120, // 한 줄이 120칸이 넘지 않도록 합니다
  useTabs: false, // 탭 대신에 스페이스를 사용합니다.
  tabWidth: 2, // 들여쓰기 크기는 2칸입니다.
};
```
<br>

### .eslintrc.js 파일 수정
```js
module.exports = {
  parser: '@typescript-eslint/parser', // ESLint parser를 지정
  extends: [
    'plugin:react/recommended', // @eslint-plugin-react의 권장규칙사용
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin의 권장규칙사용
    'prettier/@typescript-eslint', // eslint-config-perttier를 이용해 prettier와 충돌할 수 있는 @typescript-eslint/eslint-plugin의 ESLint 규칙 사용 안함
    'plugin:prettier/recommended' // eslint-plugin-prettier 및 eslint-config-prettier를 활성화. 항상 마지막에 위치하여야 함
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true // JSX 파싱을 가능하도록 설정
    },
    ecmaVersion: 2018, // 최신 ECMAScript 기능을 구문 분석
    sourceType: 'module' // imports 사용 가능케 함
  },
  settings: {
    react: {
      version: 'detect' // eslint-plugin-react가 사용할 React 버전을 자동으로 감지하도록 지시
    }
  },
};
```