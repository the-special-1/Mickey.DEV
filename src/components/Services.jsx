import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FaLaptopCode, FaMobileAlt, FaServer, FaTachometerAlt, FaArrowRight, FaCheck } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 6rem 1.5rem;
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 760px;
  margin: 0 auto 4rem;
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

const ServicesGrid = styled.div`
  display: grid;
  gap: 1.75rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 1.25rem;
  padding: 2.25rem 2rem;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.35s ease;

  &:hover {
    border-color: ${({ theme }) => theme.cardBorderHover};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.hoverShadow};
    background: ${({ theme }) => theme.cardBgHover};
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: ${({ theme }) => theme.badgeBg};
  border: 1px solid ${({ theme }) => theme.badgeBorder};
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    background: ${({ theme }) => theme.accentGradient};
    color: #ffffff;
    box-shadow: 0 8px 20px ${({ theme }) => theme.accentGlow};
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.45rem;
  font-weight: 700;
  margin-bottom: 0.85rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.02em;
`;

const ServiceDescription = styled.p`
  font-size: 0.98rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.accentTertiary || '#10b981'};
    font-size: 0.85rem;
    flex-shrink: 0;
  }
`;

const ServiceAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  margin-top: auto;
  transition: gap 0.2s ease, color 0.2s ease;

  &:hover {
    gap: 0.85rem;
    color: ${({ theme }) => theme.accentSecondary || theme.accent};
  }
`;

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaLaptopCode />,
      title: t('service_web_title'),
      desc: t('service_web_desc'),
      features: ['React & Next.js Ecosystem', 'Responsive & Mobile-First UX', 'SEO & Performance Audited'],
    },
    {
      icon: <FaMobileAlt />,
      title: t('service_mobile_title'),
      desc: t('service_mobile_desc'),
      features: ['React Native iOS & Android', 'Smooth 60fps Micro-interactions', 'Offline Data Synchronization'],
    },
    {
      icon: <FaServer />,
      title: t('service_api_title'),
      desc: t('service_api_desc'),
      features: ['Node.js & Express REST/GraphQL', 'PostgreSQL & MongoDB Schemas', 'JWT Auth & Role Security'],
    },
    {
      icon: <FaTachometerAlt />,
      title: t('service_audit_title'),
      desc: t('service_audit_desc'),
      features: ['Lighthouse 95+ Speed Tuning', 'Modular Refactoring & Scalability', 'Reliable CI/CD Cloud Delivery'],
    },
  ];

  return (
    <ServicesSection id="services">
      <div className="container">
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('services_badge')}
          </SectionBadge>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t('services_title')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('services_subtitle')}
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid>
          {services.map((item, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <IconWrapper>{item.icon}</IconWrapper>
              <ServiceTitle>{item.title}</ServiceTitle>
              <ServiceDescription>{item.desc}</ServiceDescription>
              <FeaturesList>
                {item.features.map((feat, fIdx) => (
                  <FeatureItem key={fIdx}>
                    <FaCheck />
                    <span>{feat}</span>
                  </FeatureItem>
                ))}
              </FeaturesList>
              <ServiceAction to="contact" smooth={true} duration={500} offset={-80}>
                {t('hero_cta_contact')} <FaArrowRight size={12} />
              </ServiceAction>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesSection>
  );
};

export default Services;
