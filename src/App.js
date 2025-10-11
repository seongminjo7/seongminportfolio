import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';  // GlobalStyle import
import styled from 'styled-components';
import ToggleBtn from './components/ToggleBtn';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';

function App() {

  return (
    <>
      <GlobalStyle />
      <AllWrapper>
        <ToggleBtn />

        <Intro />
        <AboutMe />
      </AllWrapper>
    </>
  );
}

const AllWrapper = styled.div`
  background: var(--main-color);
  padding: 40px 40px 0 40px;
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