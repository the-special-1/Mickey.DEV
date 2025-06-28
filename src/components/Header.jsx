import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.cardBg}50; /* 50% opacity */
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 50;
  transition: background-color 0.5s linear;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5rem; /* space-x-6 */
  align-items: center;
`;

const LanguageSwitcher = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 1rem;
`;

const LangButton = styled.button`
  background: none;
  border: 1px solid ${({ theme, isActive }) => (isActive ? theme.accent : 'transparent')};
  color: ${({ theme, isActive }) => (isActive ? theme.accent : theme.text)};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text}dd; /* 90% opacity */
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text};
  }

  &.active {
    color: ${({ theme }) => theme.accent};
    font-weight: 600;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: scale(1.1);
  }
`;

const Header = ({ themeToggler, theme }) => {
  const { t, i18n } = useTranslation();
  const navLinks = [
    { key: 'nav_about', to: 'about' },
    { key: 'nav_projects', to: 'projects' },
    { key: 'nav_contact', to: 'contact' },
  ];

  return (
    <StyledHeader>
      <Container>
        <NavLink to="hero" smooth={true} duration={500} style={{fontSize: '1.5rem', fontWeight: 'bold'}}>

        </NavLink>
        <nav>
          <NavList>
            {navLinks.map((link) => (
              <li key={link.key}>
                <NavLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                >
                  {t(link.key)}
                </NavLink>
              </li>
            ))}
            <li>
              <ThemeToggle onClick={themeToggler}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </ThemeToggle>
            </li>
            <li>
              <LanguageSwitcher>
                <LangButton onClick={() => i18n.changeLanguage('en')} isActive={i18n.language === 'en'}>EN</LangButton>
                <LangButton onClick={() => i18n.changeLanguage('am')} isActive={i18n.language === 'am'}>AM</LangButton>
              </LanguageSwitcher>
            </li>
          </NavList>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;

