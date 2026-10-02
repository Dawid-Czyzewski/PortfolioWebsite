type ProjectInfoProps = {
  title: string;
  description: string;
  technologies: string[];
};

const ProjectInfo = ({ title, description, technologies }: ProjectInfoProps) => (
  <div className="case-intro reveal" style={{ '--d': 1 }}>
    <h2 className="case-lead">{title}</h2>
    <p>{description}</p>
    <div className="project-tech">
      {technologies.map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>
  </div>
);

export default ProjectInfo;
