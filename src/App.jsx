import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import Squares from './Squares';

const AppContainer = styled.div`
  background: transparent;
`;

function App() {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Squares 
    speed={0.5} 
    squareSize={70}
    direction='diagonal' // up, down, left, right, diagonal
    borderColor='#696969'
    hoverFillColor='#696969'
    />
      <GlobalStyles />
      <AppContainer>
    
        <Header themeToggler={themeToggler} theme={theme} />
        <main>
     
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
