import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import skillupImg from '../assets/skillup.png';
import shifebooksImg from '../assets/shifebooks.png';
import lotterybingoImg from '../assets/lotterybingo.png';
import amitpsmImg from '../assets/psm.png';
import hilupharmaImg from '../assets/hilu-pharma.jpg';

const ProjectsSection = styled.section`
  padding: 5rem 1rem; /* py-20 px-4 */
  background: ${({ theme }) => theme.body};
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

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem; /* gap-8 */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 0.75rem; /* rounded-xl */
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.hoverShadow};
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 14rem; /* h-56 */
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem; /* p-6 */
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 0.5rem; /* mb-2 */
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text}99; /* 60% opacity */
  margin-bottom: 1rem; /* mb-4 */
`;

const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto; /* Pushes links to the bottom */
  padding-top: 1rem; /* Adds space above links */
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.accent};
  font-weight: 600; /* font-semibold */
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const { t } = useTranslation();
      const projects = [
    {
      titleKey: 'project_skillup_title',
      descKey: 'project_skillup_desc',
      image: skillupImg,
      liveUrl: 'https://skillup-iqxf.onrender.com/',
      sourceUrl: '#',
    },
    {
      titleKey: 'project_shifebooks_title',
      descKey: 'project_shifebooks_desc',
      image: shifebooksImg,
      liveUrl: 'https://shife-books-uifp.vercel.app',
      sourceUrl: '#',
    },
    {
      titleKey: 'project_lotterybingo_title',
      descKey: 'project_lotterybingo_desc',
      image: lotterybingoImg,
      liveUrl: 'https://lotterybingoet.com',
      sourceUrl: '#',
    },
    {
      titleKey: 'project_amitpsm_title',
      descKey: 'project_amitpsm_desc',
      image: amitpsmImg,
      liveUrl: '#',
      sourceUrl: 'https://github.com/the-special-1/PSM',
    },
    {
      titleKey: 'project_hilupharma_title',
      descKey: 'project_hilupharma_desc',
      image: hilupharmaImg,
      liveUrl: '#',
      sourceUrl: 'https://github.com/the-special-1/Hilu-pharma-1',
      imageStyle: { objectFit: 'contain', background: '#fff' },
    },
  ];

  return (
    <ProjectsSection id="projects">
      <div className="container mx-auto">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('projects_title')}
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.titleKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectImage src={project.image} alt={t(project.titleKey)} style={project.imageStyle || {}} />
              <CardContent>
                <ProjectTitle>{t(project.titleKey)}</ProjectTitle>
                <ProjectDescription>{t(project.descKey)}</ProjectDescription>
                                <CardLinks>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">{t('project_link_live')}</ProjectLink>
                  )}
                  {project.sourceUrl && project.sourceUrl !== '#' && (
                    <ProjectLink href={project.sourceUrl} target="_blank" rel="noopener noreferrer">{t('project_link_source')}</ProjectLink>
                  )}
                </CardLinks>
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
