# 🐯 Jest와 함께하는 TypeScript 테스팅

## 👩‍💻 구현내용

- 구현내용 1
- 구현내용 2

## 👨‍🏫 요구사항

### ⚙️ 기능적 요구사항

- 사칙연산이 가능한 계산기를 만들어보자.
- 작성한 테스트를 `*.spec.ts`를 활용해 테스트를 작성해보자.

### ⚙️ 비기능적 요구사항

- indent depth를 1까지만 허용한다.
  - 예를 들어 `while`문 안에 `if`문이 있으면 depth는 2다.
  - 힌트: 함수/메소드를 분리하라.
  - 최대한 1을 유지하기 위해 노력하고, 정말 힘든 경우 2까지 허용한다.
- 함수/메소드의 길이가 10라인을 넘어가지 않도록 구현한다.
  - 함수/메소드가 한 가지 일만 잘 하도록 구현한다.
  - 주석은 가능하면 함수 밖 또는 코드 우측에 추가하는 방식으로 구현한다.
  - 공백 라인도 한 라인에 해당한다.
- 함수/메소드의 인자 수를 3개까지만 허용한다. 4개 이상은 허용하지 않는다.
- `else` 예약어를 쓰지 않는다.
  - hint: _early return_

## 📚 참고자료

### 🔨 프로젝트 명령어

- `npm install`: 프로젝트 의존성 설치
- `npm start`: 개발 서버 실행
- `npm test`: `*.spec.ts`에 해당하는 파일 모두 테스트
- `npm test <파일 or 경로>`: 특정 폴더 혹은 파일 테스트

### 📄 학습자료

- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Clean Code TypeScript](https://github.com/labs42io/clean-code-typescript)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
