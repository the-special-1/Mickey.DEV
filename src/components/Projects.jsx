import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaGithub, FaLayerGroup } from 'react-icons/fa';
import yabellobingoImg from '../assets/yabello-bingo.jpg';
import ahadubingoImg from '../assets/ahadu-bingo.jpg';
import lotterybingoImg from '../assets/lotterybingo.png';
import skillupImg from '../assets/skillup-mockup.jpg';
import shifebooksImg from '../assets/shifebooks.png';
import hilupharmaImg from '../assets/hilupharma-mockup.jpg';

const ProjectsSection = styled.section`
  padding: 6rem 1.5rem;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 760px;
  margin: 0 auto 3rem;
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

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
`;

const FilterTab = styled.button`
  background: ${({ $active, theme }) => ($active ? theme.accent : theme.cardBg)};
  color: ${({ $active, theme }) => ($active ? '#ffffff' : theme.textMuted)};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.accent : theme.cardBorder)};
  padding: 0.6rem 1.4rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  backdrop-filter: blur(10px);

  &:hover {
    color: ${({ $active, theme }) => ($active ? '#ffffff' : theme.text)};
    border-color: ${({ theme }) => theme.cardBorderHover};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 1.25rem;
  overflow: hidden;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.cardBorderHover};
    box-shadow: ${({ theme }) => theme.hoverShadow};
    background: ${({ theme }) => theme.cardBgHover};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  overflow: hidden;
  background-color: #0b111e;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.06);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.6) 100%);
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: #38bdf8;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

const CardBody = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.02em;
`;

const ProjectDescription = styled.p`
  font-size: 0.92rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 1.25rem;
  flex-grow: 1;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.badgeBg};
  border: 1px solid ${({ theme }) => theme.badgeBorder};
  color: ${({ theme }) => theme.accent};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 0.4rem;
`;

const CardLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.cardBorder};
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.45rem 0.95rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &.live {
    background: ${({ theme }) => theme.accentGradient};
    color: #ffffff !important;
    box-shadow: 0 4px 12px ${({ theme }) => theme.accentGlow};

    &:hover {
      transform: translateY(-1px);
    }
  }

  &.source {
    background: ${({ theme }) => theme.glass};
    border: 1px solid ${({ theme }) => theme.cardBorder};
    color: ${({ theme }) => theme.text} !important;

    &:hover {
      border-color: ${({ theme }) => theme.cardBorderHover};
      color: ${({ theme }) => theme.accent} !important;
    }
  }
`;

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'yabellobingo',
      titleKey: 'project_yabellobingo_title',
      descKey: 'project_yabellobingo_desc',
      category: 'web',
      badge: 'Virtual Bingo Gaming',
      image: yabellobingoImg,
      liveUrl: 'https://yabellobingo.com',
      sourceUrl: '#',
      tags: ['Real-Time Game', 'WebSockets', 'React', 'Interactive UI'],
    },
    {
      id: 'ahadubingo',
      titleKey: 'project_ahadubingo_title',
      descKey: 'project_ahadubingo_desc',
      category: 'web',
      badge: 'Virtual Bingo Gaming',
      image: ahadubingoImg,
      liveUrl: 'https://ahadubingo.tech',
      sourceUrl: '#',
      tags: ['Multiplayer Gaming', 'WebSockets', 'Node.js', 'Dynamic Board'],
    },
    {
      id: 'lotterybingo',
      titleKey: 'project_lotterybingo_title',
      descKey: 'project_lotterybingo_desc',
      category: 'web',
      badge: 'Real-Time Gaming App',
      image: lotterybingoImg,
      liveUrl: 'https://lotterybingoet.com',
      sourceUrl: '#',
      tags: ['JavaScript', 'WebSockets', 'Interactive UI'],
    },
    {
      id: 'skillup',
      titleKey: 'project_skillup_title',
      descKey: 'project_skillup_desc',
      category: 'web',
      badge: 'E-Learning Platform',
      image: skillupImg,
      liveUrl: 'https://skillup-iqxf.onrender.com/',
      sourceUrl: '#',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      id: 'shifebooks',
      titleKey: 'project_shifebooks_title',
      descKey: 'project_shifebooks_desc',
      category: 'web',
      badge: 'E-Commerce Platform',
      image: shifebooksImg,
      liveUrl: 'https://shife-books-uifp.vercel.app',
      sourceUrl: '#',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    },
    {
      id: 'hilupharma',
      titleKey: 'project_hilupharma_title',
      descKey: 'project_hilupharma_desc',
      category: 'mobile',
      badge: 'Healthcare Mobile App',
      image: hilupharmaImg,
      liveUrl: '#',
      sourceUrl: 'https://github.com/the-special-1/Hilu-pharma-1',
      tags: ['React Native', 'Mobile UI', 'Supply Chain', 'Cross-Platform'],
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return p.category === 'web';
    if (activeFilter === 'mobile') return p.category === 'mobile' || p.category === 'enterprise';
    return true;
  });

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('projects_badge')}
          </SectionBadge>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t('projects_title')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('projects_subtitle')}
          </SectionSubtitle>
        </SectionHeader>

        <FilterTabs>
          <FilterTab
            $active={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
          >
            {t('filter_all')}
          </FilterTab>
          <FilterTab
            $active={activeFilter === 'web'}
            onClick={() => setActiveFilter('web')}
          >
            {t('filter_web')}
          </FilterTab>
          <FilterTab
            $active={activeFilter === 'mobile'}
            onClick={() => setActiveFilter('mobile')}
          >
            {t('filter_mobile')}
          </FilterTab>
        </FilterTabs>

        <ProjectsGrid layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <ImageContainer>
                  <ProjectImage
                    src={project.image}
                    alt={t(project.titleKey)}
                    style={project.imageStyle || {}}
                    loading="lazy"
                  />
                  <ImageOverlay />
                  <CategoryBadge>
                    <FaLayerGroup size={10} />
                    <span>{project.badge}</span>
                  </CategoryBadge>
                </ImageContainer>

                <CardBody>
                  <ProjectTitle>{t(project.titleKey)}</ProjectTitle>
                  <ProjectDescription>{t(project.descKey)}</ProjectDescription>

                  <TechList>
                    {project.tags.map((tag) => (
                      <TechTag key={tag}>{tag}</TechTag>
                    ))}
                  </TechList>

                  <CardLinks>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <ActionLink
                        className="live"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt size={12} />
                        <span>{t('project_link_live')}</span>
                      </ActionLink>
                    )}
                    {project.sourceUrl && project.sourceUrl !== '#' && (
                      <ActionLink
                        className="source"
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={14} />
                        <span>{t('project_link_source')}</span>
                      </ActionLink>
                    )}
                  </CardLinks>
                </CardBody>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
