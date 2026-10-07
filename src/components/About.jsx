import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaReact, 
  FaNodeJs, 
  FaJsSquare, 
  FaDatabase, 
  FaGitAlt, 
  FaMobile, 
  FaCheckCircle, 
  FaShieldAlt, 
  FaBolt, 
  FaComments 
} from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiFirebase, SiTypescript } from 'react-icons/si';

const AboutSection = styled.section`
  padding: 6rem 1.5rem;
  position: relative;
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

const BentoGrid = styled.div`
  display: grid;
  gap: 1.75rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 992px) {
    grid-template-columns: 1.15fr 0.85fr;
  }
`;

const BentoCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 1.25rem;
  padding: 2.25rem;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.cardBorderHover};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const BioText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 1.75rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ValueItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  svg {
    color: ${({ theme }) => theme.accent};
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const TechCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CategoryTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.textSubtle};
`;

const SkillPillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const SkillPill = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text};
  padding: 0.45rem 0.9rem;
  border-radius: 0.65rem;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.25s ease;

  svg {
    color: ${({ theme }) => theme.accent};
    font-size: 1rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
    background: ${({ theme }) => theme.badgeBg};
  }
`;

const About = () => {
  const { t } = useTranslation();

  const techCategories = [
    {
      name: 'Frontend & UI',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <FaJsSquare /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      name: 'Mobile Development',
      skills: [
        { name: 'React Native', icon: <FaMobile /> },
        { name: 'Cross-Platform iOS/Android', icon: <FaCheckCircle /> },
      ],
    },
    {
      name: 'Backend & Cloud',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'REST & GraphQL APIs', icon: <FaBolt /> },
      ],
    },
    {
      name: 'Databases & Tools',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'Git & GitHub', icon: <FaGitAlt /> },
      ],
    },
  ];

  const values = [
    { icon: <FaBolt />, text: 'Blazing Fast Performance' },
    { icon: <FaShieldAlt />, text: 'Production-Grade Security' },
    { icon: <FaComments />, text: 'Transparent Communication' },
    { icon: <FaCheckCircle />, text: 'Clean Maintainable Code' },
  ];

  return (
    <AboutSection id="about">
      <div className="container">
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('about_badge')}
          </SectionBadge>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t('about_title')}
          </SectionTitle>
        </SectionHeader>

        <BentoGrid>
          <BentoCard
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BioText>{t('about_bio')}</BioText>
            <ValuesGrid>
              {values.map((v, i) => (
                <ValueItem key={i}>
                  {v.icon}
                  <span>{v.text}</span>
                </ValueItem>
              ))}
            </ValuesGrid>
          </BentoCard>

          <BentoCard
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              {t('about_tech_title')}
            </h3>
            <CategoryContainer>
              {techCategories.map((cat, idx) => (
                <TechCategory key={idx}>
                  <CategoryTitle>{cat.name}</CategoryTitle>
                  <SkillPillContainer>
                    {cat.skills.map((s, sIdx) => (
                      <SkillPill key={sIdx}>
                        {s.icon}
                        <span>{s.name}</span>
                      </SkillPill>
                    ))}
                  </SkillPillContainer>
                </TechCategory>
              ))}
            </CategoryContainer>
          </BentoCard>
        </BentoGrid>
      </div>
    </AboutSection>
  );
};

export default About;
