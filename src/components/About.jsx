import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutSection = styled.section`
  padding: 5rem 1rem; /* py-20 px-4 */
  background-color: ${({ theme }) => theme.cardBg};
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700; /* font-bold */
  text-align: center;
  margin-bottom: 3rem; /* mb-12 */
  background: ${({ theme }) => theme.accentGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Bio = styled(motion.p)`
  max-width: 48rem; /* max-w-3xl */
  margin: 0 auto 3rem auto; /* mx-auto mb-12 */
  font-size: 1.125rem; /* text-lg */
  color: ${({ theme }) => theme.text};
  color: #d1d5db; /* text-gray-300 */
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem; /* gap-4 */
`;

const SkillTag = styled(motion.div)`
  background: ${({ theme }) => theme.accentGradient};
  color: #ffffff; /* text-white */
  font-weight: 600; /* font-semibold */
  padding: 0.5rem 1.25rem; /* py-2 px-5 */
  border-radius: 9999px; /* rounded-full */
`;

const About = () => {
  const { t } = useTranslation();
  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'SQL', 'MongoDB','PostgreSQL','Tailwind CSS','React Native','Firebase'];

  return (
    <AboutSection id="about">
      <div className="container mx-auto">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('about_title')}
        </SectionTitle>
        <Bio
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('about_bio')}
        </Bio>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillTag
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {skill}
            </SkillTag>
          ))}
        </SkillsContainer>
      </div>
    </AboutSection>
  );
};

export default About;
