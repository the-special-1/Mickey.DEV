import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.headerBg};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
  transition: all 0.3s ease;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0.9rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  cursor: pointer;
  text-decoration: none;
`;

const LogoBadge = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${({ theme }) => theme.accentGradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 800;
  font-size: 1.15rem;
  box-shadow: 0 4px 15px ${({ theme }) => theme.accentGlow};
`;

const BrandText = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text};

  span {
    background: ${({ theme }) => theme.accentGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 868px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.75rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.textMuted};
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.text};
  }

  &.active {
    color: ${({ theme }) => theme.accent};
    font-weight: 600;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.accentGradient};
      border-radius: 9999px;
    }
  }
`;

const ControlsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
`;

const LangPill = styled.div`
  display: flex;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 9999px;
  padding: 2px;
`;

const LangBtn = styled.button`
  background: ${({ $isActive, theme }) => ($isActive ? theme.accent : 'transparent')};
  color: ${({ $isActive, theme }) => ($isActive ? '#ffffff' : theme.textMuted)};
  border: none;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ $isActive, theme }) => ($isActive ? '#ffffff' : theme.text)};
  }
`;

const IconButton = styled.button`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text};
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.cardBorderHover};
    transform: scale(1.05);
  }
`;

const HeaderCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.accentGradient};
  color: #ffffff !important;
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.55rem 1.15rem;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 4px 14px ${({ theme }) => theme.accentGlow};
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.accentGlow};
  }

  @media (max-width: 868px) {
    display: none;
  }
`;

const HamburgerBtn = styled(IconButton)`
  display: none;
  @media (max-width: 868px) {
    display: flex;
  }
`;

const MobileDrawer = styled.div`
  display: none;
  @media (max-width: 868px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 1.25rem;
    padding: 1.5rem;
    background: ${({ theme }) => theme.headerBg};
    border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
    backdrop-filter: blur(20px);
  }
`;

const MobileNavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 0;

  &.active {
    color: ${({ theme }) => theme.accent};
  }
`;

const MobileControlsGroup = styled.div`
  display: none;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 868px) {
    display: flex;
  }
`;

const Header = ({ themeToggler, theme }) => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { key: 'nav_about', to: 'about' },
    { key: 'nav_services', to: 'services' },
    { key: 'nav_projects', to: 'projects' },
    { key: 'nav_contact', to: 'contact' },
  ];

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <StyledHeader>
      <Container>
        <BrandLink to="hero" smooth={true} duration={500} offset={-80}>
          <LogoBadge>M</LogoBadge>
          <BrandText>
            Mickey<span>.DEV</span>
          </BrandText>
        </BrandLink>

        <DesktopNav>
          <NavList>
            {navLinks.map((link) => (
              <li key={link.key}>
                <NavLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="active"
                >
                  {t(link.key)}
                </NavLink>
              </li>
            ))}
          </NavList>

          <ControlsGroup>
            <LangPill>
              <LangBtn
                onClick={() => i18n.changeLanguage('en')}
                $isActive={i18n.language === 'en'}
                aria-label="Switch to English"
              >
                EN
              </LangBtn>
              <LangBtn
                onClick={() => i18n.changeLanguage('am')}
                $isActive={i18n.language === 'am'}
                aria-label="Switch to Amharic"
              >
                AM
              </LangBtn>
            </LangPill>

            <IconButton onClick={themeToggler} aria-label="Toggle Dark/Light Mode">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </IconButton>

            <HeaderCta to="contact" smooth={true} duration={500} offset={-80}>
              {t('nav_hire_cta')} <FaArrowRight size={12} />
            </HeaderCta>
          </ControlsGroup>
        </DesktopNav>

        {/* Mobile controls */}
        <MobileControlsGroup>
          <LangPill>
            <LangBtn
              onClick={() => i18n.changeLanguage('en')}
              $isActive={i18n.language === 'en'}
            >
              EN
            </LangBtn>
            <LangBtn
              onClick={() => i18n.changeLanguage('am')}
              $isActive={i18n.language === 'am'}
            >
              AM
            </LangBtn>
          </LangPill>
          <IconButton onClick={themeToggler} aria-label="Toggle Theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </IconButton>

          <HamburgerBtn onClick={toggleMobile} aria-label="Toggle navigation menu">
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </HamburgerBtn>
        </MobileControlsGroup>
      </Container>

      <MobileDrawer $isOpen={mobileOpen}>
        {navLinks.map((link) => (
          <MobileNavLink
            key={link.key}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={closeMobile}
          >
            {t(link.key)}
          </MobileNavLink>
        ))}
        <HeaderCta
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          onClick={closeMobile}
          style={{ display: 'inline-flex', justifyContent: 'center' }}
        >
          {t('nav_hire_cta')} <FaArrowRight size={12} />
        </HeaderCta>
      </MobileDrawer>
    </StyledHeader>
  );
};

export default Header;
