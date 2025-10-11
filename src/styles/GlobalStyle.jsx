import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #A98B5F; /* 메인 색상 정의 */
    --background-color: #FAF6E8; /* 배경색 정의 */
    --text-color: #292929; /* 텍스트 색상 정의 */
  }

  /* 전체적으로 적용될 기본 스타일 */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: all 0.3s ease; /* 스타일 변경 시 부드러운 전환 효과 */
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-color);
  }

  a {
    color: var(--main-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
