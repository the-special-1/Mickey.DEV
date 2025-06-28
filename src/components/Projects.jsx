import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 5rem 1rem; /* py-20 px-4 */
  background-color: #0f172a; /* bg-slate-900 */
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700; /* font-bold */
  text-align: center;
  margin-bottom: 3rem; /* mb-12 */
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
  background-color: #1e293b; /* bg-slate-800 */
  border-radius: 0.5rem; /* rounded-lg */
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(96, 165, 250, 0.5); /* hover:shadow-blue-500/50 */
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

const CardTitle = styled.h3`
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 0.5rem; /* mb-2 */
`;

const CardDescription = styled.p`
  color: #9ca3af; /* text-gray-400 */
  margin-bottom: 1rem; /* mb-4 */
`;

const CardLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardLink = styled.a`
  color: #60a5fa; /* text-blue-400 */
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #93c5fd; /* hover:text-blue-300 */
  }

  &.source-code {
    color: #9ca3af; /* text-gray-400 */
    &:hover {
      color: #ffffff; /* hover:text-white */
    }
  }
`;

const Projects = () => {
  const projectData = [
    {
      title: 'Project One',
      description: 'A brief description of the first project, highlighting the technologies used and its purpose.',
      image: 'https://via.placeholder.com/400x250/1e293b/ffffff?text=Project+One',
      liveLink: '#',
      sourceLink: '#',
    },
    {
      title: 'Project Two',
      description: 'A brief description of the second project, highlighting the technologies used and its purpose.',
      image: 'https://via.placeholder.com/400x250/1e293b/ffffff?text=Project+Two',
      liveLink: '#',
      sourceLink: '#',
    },
    {
      title: 'Project Three',
      description: 'A brief description of the third project, highlighting the technologies used and its purpose.',
      image: 'https://via.placeholder.com/400x250/1e293b/ffffff?text=Project+Three',
      liveLink: '#',
      sourceLink: '#',
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
          My Projects
        </SectionTitle>
        <ProjectsGrid>
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardLinks>
                  <CardLink href={project.liveLink}>View Live</CardLink>
                  <CardLink href={project.sourceLink} className="source-code">Source Code</CardLink>
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
