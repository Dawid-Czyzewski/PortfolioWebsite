import { Expand } from 'lucide-react';
import { imageSrc } from '../../lib/image';
import type { ImageSource, ProjectSection } from '../../types';

type ProjectSectionItemProps = {
  section: ProjectSection;
  index: number;
  onImageClick: (image: ImageSource, alt: string) => void;
};

const ProjectSectionItem = ({ section, index, onImageClick }: ProjectSectionItemProps) => {
  const hasImage = section.image !== null && section.image !== undefined;
  const number = String(index + 1).padStart(2, '0');

  if (!hasImage) {
    return (
      <article className="case-block case-block-text reveal" style={{ '--d': Math.min(index, 8) }}>
        <div className="case-copy">
          <span className="case-index">{number}</span>
          <h3>{section.title}</h3>
          <p>{section.description}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={`case-block reveal${index % 2 ? ' is-flip' : ''}`} style={{ '--d': Math.min(index, 8) }}>
      <button
        type="button"
        className="case-shot"
        onClick={() => onImageClick(section.image!, section.alt)}
      >
        <img src={imageSrc(section.image!)} alt={section.alt} />
        <span className="case-zoom" aria-hidden="true">
          <Expand size={18} />
        </span>
      </button>
      <div className="case-copy">
        <span className="case-index">{number}</span>
        <h3>{section.title}</h3>
        <p>{section.description}</p>
      </div>
    </article>
  );
};

export default ProjectSectionItem;
