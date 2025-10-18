import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';  // GlobalStyle import
import styled from 'styled-components';
import ToggleBtn from './components/ToggleBtn';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Design from './components/Design';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <>
      <GlobalStyle />
      <AllWrapper>
        <Header />
        <ToggleBtn />

        <Intro />
        <AboutMe />
        <Portfolio />
        <Design />
        <Footer />
      </AllWrapper>
    </>
  );
}

const AllWrapper = styled.div`
  background: var(--main-color);
  padding: 40px 40px 0 40px;
  min-height: 100vh;
  position: relative;
`;

export default App;