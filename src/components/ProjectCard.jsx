export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img className="project-image" src={project.image} alt={`${project.title} project illustration`} />
      <div className="project-card-body">
        <p className="eyebrow">{project.role}</p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p><strong>Technologies:</strong> {project.technologies}</p>
        <p className="outcome"><strong>Outcome:</strong> {project.outcome}</p>
      </div>
    </article>
  );
}
