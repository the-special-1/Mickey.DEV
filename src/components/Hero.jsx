import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #0f172a; /* bg-slate-900 */
  padding: 1rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem; /* text-5xl */
  font-weight: 800; /* font-extrabold */
  margin-bottom: 1rem; /* mb-4 */
  @media (min-width: 768px) {
    font-size: 4.5rem; /* md:text-7xl */
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.125rem; /* text-lg */
  color: #d1d5db; /* text-gray-300 */
  margin-bottom: 2rem; /* mb-8 */
  max-width: 48rem; /* max-w-3xl */
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    font-size: 1.5rem; /* md:text-2xl */
  }
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  background-color: #2563eb; /* bg-blue-600 */
  color: #ffffff; /* text-white */
  font-weight: 700; /* font-bold */
  padding: 0.75rem 2rem; /* py-3 px-8 */
  border-radius: 9999px; /* rounded-full */
  font-size: 1.125rem; /* text-lg */
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #1d4ed8; /* hover:bg-blue-700 */
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <div className="container mx-auto px-4">
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Your Name
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A Passionate Software Engineer.
        </HeroSubtitle>
        <HeroButton
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          View My Work
        </HeroButton>
      </div>
    </HeroSection>
  );
};

export default Hero;
