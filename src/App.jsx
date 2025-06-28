import { useState } from 'react'
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const StyledApp = styled.div`
  min-height: 100vh;
  background-color: #0f172a; /* formerly bg-slate-900 */
  color: #f8fafc; /* formerly text-white */
  font-family: sans-serif; /* formerly font-sans */
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </StyledApp>
  );
}

export default App;
