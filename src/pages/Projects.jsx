import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work"
        description="A selection of projects spanning full-stack development, AI and machine learning."
      />
      <section className="project-grid page-shell">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );
}
