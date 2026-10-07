import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import Squares from './Squares';

const AppContainer = styled.div`
  background: transparent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('mickey_theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('mickey_theme', theme);
  }, [theme]);

  const themeToggler = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Squares
        speed={0.4}
        squareSize={64}
        direction="diagonal"
        borderColor={theme === 'light' ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255, 255, 255, 0.035)'}
        hoverFillColor={theme === 'light' ? 'rgba(2, 132, 199, 0.08)' : 'rgba(56, 189, 248, 0.08)'}
        maskColor={theme === 'light' ? 'rgba(248, 250, 252, 0.75)' : 'rgba(8, 12, 20, 0.65)'}
      />
      <GlobalStyles />
      <AppContainer>
        <Header themeToggler={themeToggler} theme={theme} />
        <MainContent>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Contact />
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
