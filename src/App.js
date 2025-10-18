import React, { useState, useEffect, useRef } from 'react';
import GlobalStyle from './styles/GlobalStyle';  // GlobalStyle import
import styled from 'styled-components';
import ToggleBtn from './components/ToggleBtn';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Design from './components/Design';
import Footer from './components/Footer';
import Header from './components/Header';

import Lenis from '@studio-freight/lenis';

function App() {

  const scrollContainerRef = useRef(null); // 스크롤을 적용할 컨테이너

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // 애니메이션 프레임을 업데이트하여 부드러운 스크롤을 지속시킵니다.
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 컴포넌트 언마운트 시 Lenis 인스턴스를 제거합니다.
  }, []);

  return (
    <>
      <GlobalStyle />
      <AllWrapper ref={scrollContainerRef}>
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