import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa';
import TelegramQR from '../assets/telegram-qr.png';
import { useTranslation } from 'react-i18next';

const ContactSection = styled.section`
  padding: 5rem 1rem;
  background-color: transparent;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: ${({ theme }) => theme.accentGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SocialsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  font-size: 3rem;
  color: ${({ theme }) => theme.text}99; /* 60% opacity */
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: scale(1.2);
  }
`;

const QRContainer = styled.div`
  margin-top: 2rem;
  p {
    color: ${({ theme }) => theme.text}99; /* 60% opacity */
    margin-bottom: 1rem;
  }
  img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 1rem;
    border: 2px solid ${({ theme }) => theme.accent}50; /* 30% opacity */
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const socials = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/the-special-1' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/mikiyas-tesfaye-354882352' },
    { name: 'Telegram', icon: <FaTelegram />, url: 'https://t.me/MTESFAYE12' },
  ];

  return (
    <ContactSection id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t('contact_title')}
      </SectionTitle>
      <SocialsContainer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {socials.map((social) => (
          <SocialLink key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            {social.icon}
          </SocialLink>
        ))}
      </SocialsContainer>
      <QRContainer>
        <p>{t('contact_qr_prompt')}</p>
        <img src={TelegramQR} alt="Telegram QR Code" />
      </QRContainer>
    </ContactSection>
  );
};

export default Contact;
