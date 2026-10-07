import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaTelegramPlane, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaPhoneAlt,
  FaCopy, 
  FaCheck, 
  FaExternalLinkAlt, 
  FaComments,
  FaShieldAlt,
  FaClock
} from 'react-icons/fa';
import TelegramQR from '../assets/telegram-qr.png';
import { useTranslation } from 'react-i18next';

const ContactSection = styled.section`
  padding: 6rem 1.5rem;
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 760px;
  margin: 0 auto 3.5rem;
`;

const SectionBadge = styled(motion.div)`
  display: inline-block;
  background: ${({ theme }) => theme.badgeBg};
  border: 1px solid ${({ theme }) => theme.badgeBorder};
  color: ${({ theme }) => theme.badgeText};
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.35rem 1rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textMuted};
`;

const ContactGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 868px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 1.25rem;
  padding: 2.5rem 2rem;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const DirectActionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  padding: 1.15rem 1.25rem;
  border-radius: 1rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.cardBgHover};
  }
`;

const ActionLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActionIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: ${({ theme }) => theme.badgeBg};
  border: 1px solid ${({ theme }) => theme.badgeBorder};
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

const ActionDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.textSubtle};
`;

const ActionValue = styled.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const ActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.accent};
  padding: 0.5rem 0.9rem;
  border-radius: 0.5rem;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #ffffff;
    border-color: ${({ theme }) => theme.accent};
  }
`;

const SocialsRow = styled.div`
  display: flex;
  gap: 0.85rem;
`;

const SocialButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text};
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  svg {
    font-size: 1.15rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
    background: ${({ theme }) => theme.cardBgHover};
  }
`;

const TrustList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.cardBorder};
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textMuted};

  svg {
    color: ${({ theme }) => theme.accentTertiary || '#10b981'};
    font-size: 0.95rem;
    flex-shrink: 0;
  }
`;

const QrCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 1.25rem;
  padding: 2.5rem 2rem;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const QrWrapper = styled.div`
  padding: 1rem;
  background: #ffffff;
  border-radius: 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  ${QrCard}:hover & {
    transform: scale(1.03);
  }

  img {
    width: 200px;
    height: 200px;
    display: block;
    border-radius: 0.75rem;
  }
`;

const QrPrompt = styled.p`
  font-size: 0.98rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textMuted};
  max-width: 280px;
  margin-bottom: 1.75rem;
`;

const QrCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: ${({ theme }) => theme.accentGradient};
  color: #ffffff !important;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.85rem 1.85rem;
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 0 6px 20px ${({ theme }) => theme.accentGlow};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px ${({ theme }) => theme.accentGlow};
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const emailAddress = 'tesfayemikiyas14@gmail.com';
  const rawPhone = '0964983544';
  const formattedPhone = '+251 964 983 544';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(rawPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <ContactSection id="contact">
      <div className="container">
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('contact_badge')}
          </SectionBadge>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t('contact_title')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('contact_subtitle')}
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <InfoCard
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Phone Item */}
            <DirectActionItem>
              <ActionLeft>
                <ActionIcon style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <FaPhoneAlt />
                </ActionIcon>
                <ActionDetails>
                  <ActionTitle>{t('contact_phone_title')}</ActionTitle>
                  <ActionValue>{formattedPhone}</ActionValue>
                </ActionDetails>
              </ActionLeft>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <ActionBtn as="a" href={`tel:${rawPhone}`} aria-label="Direct Phone Call">
                  {t('contact_phone_call')} <FaExternalLinkAlt size={10} />
                </ActionBtn>
                <ActionBtn onClick={copyPhone} aria-label="Copy phone number">
                  {copiedPhone ? <><FaCheck /> {t('contact_copied')}</> : <FaCopy />}
                </ActionBtn>
              </div>
            </DirectActionItem>

            {/* Email Item */}
            <DirectActionItem>
              <ActionLeft>
                <ActionIcon>
                  <FaEnvelope />
                </ActionIcon>
                <ActionDetails>
                  <ActionTitle>{t('contact_email_title')}</ActionTitle>
                  <ActionValue style={{ wordBreak: 'break-all', fontSize: '0.95rem' }}>{emailAddress}</ActionValue>
                </ActionDetails>
              </ActionLeft>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <ActionBtn as="a" href={`mailto:${emailAddress}`} aria-label="Send email">
                  Mail <FaExternalLinkAlt size={10} />
                </ActionBtn>
                <ActionBtn onClick={copyEmail} aria-label="Copy email address">
                  {copiedEmail ? <><FaCheck /> {t('contact_copied')}</> : <FaCopy />}
                </ActionBtn>
              </div>
            </DirectActionItem>

            {/* Telegram Item */}
            <DirectActionItem>
              <ActionLeft>
                <ActionIcon style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
                  <FaTelegramPlane />
                </ActionIcon>
                <ActionDetails>
                  <ActionTitle>Telegram Direct</ActionTitle>
                  <ActionValue>@MTESFAYE12</ActionValue>
                </ActionDetails>
              </ActionLeft>
              <ActionBtn
                as="a"
                href="https://t.me/MTESFAYE12"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat <FaExternalLinkAlt size={10} />
              </ActionBtn>
            </DirectActionItem>

            <SocialsRow>
              <SocialButton
                href="https://github.com/the-special-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub /> GitHub
              </SocialButton>
              <SocialButton
                href="https://www.linkedin.com/in/mikiyas-tesfaye-354882352"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn /> LinkedIn
              </SocialButton>
            </SocialsRow>

            <TrustList>
              <TrustItem>
                <FaClock />
                <span>Quick response time under 24 hours</span>
              </TrustItem>
              <TrustItem>
                <FaShieldAlt />
                <span>Clear contract milestones & confidentiality (NDA friendly)</span>
              </TrustItem>
              <TrustItem>
                <FaComments />
                <span>Available for discovery calls and sprint planning</span>
              </TrustItem>
            </TrustList>
          </InfoCard>

          <QrCard
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <QrWrapper>
              <img src={TelegramQR} alt="Telegram QR Code" />
            </QrWrapper>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Instant Mobile Chat
            </h3>
            <QrPrompt>{t('contact_qr_prompt')}</QrPrompt>
            <QrCtaButton
              href="https://t.me/MTESFAYE12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane /> {t('contact_direct_telegram')}
            </QrCtaButton>
          </QrCard>
        </ContactGrid>
      </div>
    </ContactSection>
  );
};

export default Contact;
