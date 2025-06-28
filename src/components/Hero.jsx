import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ theme }) => theme.body};
  padding: 1rem;
  overflow: hidden;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem; /* text-5xl */
  font-weight: 800; /* font-extrabold */
  margin-bottom: 1rem; /* mb-4 */
  background: ${({ theme }) => theme.accentGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (min-width: 768px) {
    font-size: 4.5rem; /* md:text-7xl */
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.125rem; /* text-lg */
  color: ${({ theme }) => theme.text}99; /* 60% opacity */
  margin-bottom: 2.5rem; /* mb-10 */
  max-width: 48rem; /* max-w-3xl */
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.5px;
  @media (min-width: 768px) {
    font-size: 1.5rem; /* md:text-2xl */
  }
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  background: ${({ theme }) => theme.accentGradient};
  color: #ffffff; /* text-white */
  font-weight: 700; /* font-bold */
  padding: 1rem 2.5rem;
  border-radius: 9999px; /* rounded-full */
  font-size: 1.125rem; /* text-lg */
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
  box-shadow: ${({ theme }) => theme.shadow};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.hoverShadow};
  }
`;

const Hero = () => {
  const { t } = useTranslation();
  return (
    <HeroSection id="hero">
      <div className="container mx-auto px-4">
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('hero_greeting')}
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero_subtitle')}
        </HeroSubtitle>
        <HeroButton
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero_button')}
        </HeroButton>
      </div>
    </HeroSection>
  );
};

export default Hero;
