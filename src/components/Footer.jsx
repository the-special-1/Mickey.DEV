import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FaGithub, FaTelegramPlane, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.headerBg};
  border-top: 1px solid ${({ theme }) => theme.cardBorder};
  padding: 3.5rem 1.5rem 2rem;
  position: relative;
  backdrop-filter: blur(12px);
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const BrandTitle = styled.span`
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text};

  span {
    background: ${({ theme }) => theme.accentGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const BrandSub = styled.span`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.textSubtle};
  margin-top: 0.25rem;
`;

const NavLinksRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const SocialsAndScroll = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.textMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }
`;

const BackToTopBtn = styled(Link)`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ theme }) => theme.badgeBg};
  border: 1px solid ${({ theme }) => theme.badgeBorder};
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentGradient};
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const BottomRow = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.cardBorder};
  text-align: center;
  color: ${({ theme }) => theme.textSubtle};
  font-size: 0.85rem;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <FooterContainer>
        <TopRow>
          <BrandSection>
            <BrandTitle>
              Mickey<span>.DEV</span>
            </BrandTitle>
            <BrandSub>Full-Stack Web & Mobile Software Engineering</BrandSub>
          </BrandSection>

          <NavLinksRow>
            <FooterLink to="hero" smooth={true} duration={500} offset={-80}>
              Home
            </FooterLink>
            <FooterLink to="about" smooth={true} duration={500} offset={-80}>
              {t('nav_about')}
            </FooterLink>
            <FooterLink to="services" smooth={true} duration={500} offset={-80}>
              {t('nav_services')}
            </FooterLink>
            <FooterLink to="projects" smooth={true} duration={500} offset={-80}>
              {t('nav_projects')}
            </FooterLink>
            <FooterLink to="contact" smooth={true} duration={500} offset={-80}>
              {t('nav_contact')}
            </FooterLink>
          </NavLinksRow>

          <SocialsAndScroll>
            <SocialIcon
              href="https://github.com/the-special-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/mikiyas-tesfaye-354882352"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon
              href="https://t.me/MTESFAYE12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </SocialIcon>
            <BackToTopBtn
              to="hero"
              smooth={true}
              duration={600}
              offset={-80}
              aria-label="Back to top"
            >
              <FaArrowUp size={12} />
            </BackToTopBtn>
          </SocialsAndScroll>
        </TopRow>

        <BottomRow>
          <p>{t('footer_text', { year: new Date().getFullYear() })}</p>
        </BottomRow>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
