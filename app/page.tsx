'use client'
import { useEffect, useState } from 'react';
import About from '@/components/about';
import Contact from '@/components/contact';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import Refs from '@/components/refs';
import Pskills from '@/components/persskills';
import Certs from '@/components/certs';
import Pos from '@/components/os';
import UserAgentDisplay from '@/components/UserAgentDisplay'

const Home = () => {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile view initially
  const [contentLoaded, setContentLoaded] = useState(false);

  const loadContent = () => {
    setContentLoaded(true);
  };

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobileKeywords = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    if (!mobileKeywords.test(userAgent)) {
      setIsMobile(false);
    }
  }, []);

  return (
    <main className="flex flex-col items-center px-4">
      {isMobile ? (
        contentLoaded ? (
          <>
            <link rel="icon" href="https://serv.husky.nz/logo/default.png" sizes="any" />
            <Intro />
            <SectionDivider />
            <About />
            <UserAgentDisplay />
            <Certs />
            <Projects />
            <Skills />
            <Pos />
            <Pskills />
            <Contact />
          </>
        ) : (
          <button onClick={loadContent}>This site is depracated and has been moved to the main site at https://www.husky.nz please note that things on this site are NOT up to date but it can usefull to look at</button>
        )
      ) : (
        <>
          <link rel="icon" href="https://serv.husky.nz/logo/default.png" sizes="any" />
          <Intro />
          <SectionDivider />
          <About />
          <Certs />
          <Projects />
          <Skills />
          <Pos />
          <Pskills />
          <Contact />
          </> : (
          <button onClick={loadContent}>This site is depracated and has been moved to the main site at https://www.husky.nz please note that things on this site are NOT up to date but it can usefull to look at</button>
        )
      )}
    </main>
  );
};

export default Home;
