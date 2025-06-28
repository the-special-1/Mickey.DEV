import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 1rem; /* py-20 px-4 */
  background-color: #1e293b; /* bg-slate-800 */
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 1.5rem; /* mb-6 */
`;

const Bio = styled(motion.p)`
  max-width: 48rem; /* max-w-3xl */
  margin: 0 auto 3rem auto; /* mx-auto mb-12 */
  font-size: 1.125rem; /* text-lg */
  color: #d1d5db; /* text-gray-300 */
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem; /* gap-4 */
`;

const SkillTag = styled(motion.div)`
  background-color: #334155; /* bg-slate-700 */
  color: #ffffff; /* text-white */
  font-weight: 600; /* font-semibold */
  padding: 0.5rem 1.25rem; /* py-2 px-5 */
  border-radius: 9999px; /* rounded-full */
`;

const About = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Cloud Services'];

  return (
    <AboutSection id="about">
      <div className="container mx-auto">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </SectionTitle>
        <Bio
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm a dedicated software engineer with a passion for building elegant and efficient solutions. I thrive on turning complex problems into beautiful, intuitive, and highly performant web applications.
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
