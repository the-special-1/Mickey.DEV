import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FaArrowRight, FaCode, FaRocket, FaClock, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4.5rem 1.5rem 3rem;
  text-align: center;
  overflow: hidden;
`;

const AmbientGlow = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 350px;
  background: radial-gradient(circle, ${({ theme }) => theme.accent}25 0%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatusPill = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: ${({ theme }) => theme.badgeBg};
  border: 1px solid ${({ theme }) => theme.badgeBorder};
  color: ${({ theme }) => theme.badgeText};
  padding: 0.4rem 1.1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 2rem;
  backdrop-filter: blur(8px);
`;

const PulseDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #10b981;
    opacity: 0.75;
    animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes ping {
    75%, 100% {
      transform: scale(2.2);
      opacity: 0;
    }
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.text};

  @media (min-width: 640px) {
    font-size: 3.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.75rem;
  }
`;

const NameHighlight = styled.span`
  background: ${({ theme }) => theme.accentGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const RoleTag = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.textMuted};
  max-width: 720px;
  margin: 0 auto 2.5rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ActionButtonGroup = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
`;

const PrimaryCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: ${({ theme }) => theme.accentGradient};
  color: #ffffff !important;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 0.95rem 2.25rem;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 8px 25px ${({ theme }) => theme.accentGlow};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 30px ${({ theme }) => theme.accentGlow};
  }
`;

const SecondaryCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text} !important;
  font-weight: 600;
  font-size: 1.05rem;
  padding: 0.95rem 2rem;
  border-radius: 9999px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.cardBorderHover};
    color: ${({ theme }) => theme.accent} !important;
    transform: translateY(-2px);
    background: ${({ theme }) => theme.cardBgHover};
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 820px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 1rem;
  padding: 1.25rem 1rem;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    border-color: ${({ theme }) => theme.cardBorderHover};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const StatIcon = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 0.4rem;
`;

const StatValue = styled.span`
  font-size: 1.85rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.03em;
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.2rem;
`;

const Hero = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: <FaCode />, value: t('stat_exp_val'), label: t('stat_exp_lbl') },
    { icon: <FaRocket />, value: t('stat_proj_val'), label: t('stat_proj_lbl') },
    { icon: <FaCheckCircle />, value: t('stat_commit_val'), label: t('stat_commit_lbl') },
    { icon: <FaClock />, value: t('stat_speed_val'), label: t('stat_speed_lbl') },
  ];

  return (
    <HeroSection id="hero">
      <AmbientGlow />
      <ContentWrapper>
        <StatusPill
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PulseDot />
          <span>{t('hero_badge')}</span>
        </StatusPill>

        <HeroHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t('hero_greeting_prefix')}{' '}
          <NameHighlight>{t('hero_name')}</NameHighlight>
        </HeroHeading>

        <RoleTag
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <FaLaptopCode />
          <span>{t('hero_role')}</span>
        </RoleTag>

        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {t('hero_subtitle')}
        </HeroSubtitle>

        <ActionButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <PrimaryCta to="contact" smooth={true} duration={500} offset={-80}>
            {t('hero_cta_contact')} <FaArrowRight size={14} />
          </PrimaryCta>

          <SecondaryCta to="projects" smooth={true} duration={500} offset={-80}>
            {t('hero_cta_projects')}
          </SecondaryCta>
        </ActionButtonGroup>

        <StatsGrid
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {stats.map((item, idx) => (
            <StatCard key={idx}>
              <StatIcon>{item.icon}</StatIcon>
              <StatValue>{item.value}</StatValue>
              <StatLabel>{item.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;
