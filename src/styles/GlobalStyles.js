import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  html {
    background-color: ${({ theme }) => theme.body};
    background-image: ${({ theme }) => theme.bgGradient};
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    scroll-behavior: smooth;
  }

  body {
    background: transparent;
    color: ${({ theme }) => theme.text};
    font-family: var(--font-sans);
    line-height: 1.6;
    letter-spacing: -0.01em;
    overflow-x: hidden;
    transition: background 0.3s ease, color 0.3s ease;
  }

  ::selection {
    background: ${({ theme }) => theme.accent};
    color: #ffffff;
  }

  /* Custom Modern Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.body};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.textSubtle}40;
    border-radius: 9999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.accent};
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    transition: all 0.2s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text};
    font-family: var(--font-sans);
    letter-spacing: -0.025em;
  }

  code, pre {
    font-family: var(--font-mono);
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

