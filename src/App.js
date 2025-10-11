import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

function App() {
  return (
    <ThemeProvider>
      <Wrapper>
        <h1>💡 다크모드 토글 + Top 버튼</h1>
        <p>오른쪽 하단에서 토글할 수 있어요.</p>
        <ThemeToggle />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
