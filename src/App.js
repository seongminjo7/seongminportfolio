import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';  // GlobalStyle import
import styled from 'styled-components';
import ToggleBtn from './components/ToggleBtn';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false); // 기본은 라이트 모드

  // 다크 모드 상태에 따라 CSS 변수 업데이트
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty('--background-color', '#292929');
      document.documentElement.style.setProperty('--text-color', '#FAF6E8');
    } else {
      document.documentElement.style.setProperty('--background-color', '#FAF6E8');
      document.documentElement.style.setProperty('--text-color', '#292929');
    }
  }, [isDarkMode]);

  return (
    <>
      <GlobalStyle />
      <AllWrapper>
        <ToggleBtn></ToggleBtn>
      </AllWrapper>
    </>
  );
}

const AllWrapper = styled.div`
  background: var(--main-color);
  padding: 40px;
  min-height: 100vh;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4A90E2;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 20px;

  &:hover {
    background-color: #357ABD;
  }
`;

export default App;