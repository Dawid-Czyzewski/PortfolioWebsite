import { Code2, ExternalLink } from 'lucide-react';
import type { TranslateFn } from '../../types';

type ProjectActionsProps = {
  websiteUrl?: string | null;
  githubUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  t: TranslateFn;
};

const ProjectActions = ({
  websiteUrl,
  githubUrl,
  githubFrontendUrl,
  githubBackendUrl,
  t,
}: ProjectActionsProps) => (
  <div className="case-actions reveal" style={{ '--d': 2 }}>
    {websiteUrl ? (
      <a className="primary-button" href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <span className="inline-flex items-center gap-2">
          <ExternalLink size={18} /> {String(t('seeWebsite'))}
        </span>
      </a>
    ) : (
      <span className="case-offline">{String(t('projectNotHosted'))}</span>
    )}
    {githubFrontendUrl && (
      <a className="secondary-button" href={githubFrontendUrl} target="_blank" rel="noopener noreferrer">
        <span className="inline-flex items-center gap-2">
          <Code2 size={18} /> {String(t('seeGithubFrontend'))}
        </span>
      </a>
    )}
    {githubBackendUrl && (
      <a className="secondary-button" href={githubBackendUrl} target="_blank" rel="noopener noreferrer">
        <span className="inline-flex items-center gap-2">
          <Code2 size={18} /> {String(t('seeGithubBackend'))}
        </span>
      </a>
    )}
    {githubUrl && !githubFrontendUrl && !githubBackendUrl && (
      <a className="secondary-button" href={githubUrl} target="_blank" rel="noopener noreferrer">
        <span className="inline-flex items-center gap-2">
          <Code2 size={18} /> {String(t('seeGithub'))}
        </span>
      </a>
    )}
  </div>
);

export default ProjectActions;
