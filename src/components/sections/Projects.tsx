import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import portfolioData from '../../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  if (projects.length === 0) return null;

  return (
    <section className="section" id="projects">
      <div className="container fade-in">
        <SectionTitle>Projects</SectionTitle>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
