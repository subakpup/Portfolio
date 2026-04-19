import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiNotion } from 'react-icons/si';
import type { ProjectItem } from '../../types';

export default function ProjectCard({
  title,
  period,
  description,
  role,
  techStack,
  highlights,
  githubUrl,
  liveUrl,
  notionUrl,
  image,
}: ProjectItem) {
  return (
    <article className="project-card">
      {image && (
        <div className="project-card__image">
          <img src={image} alt={`${title} 대표 이미지`} loading="lazy" />
        </div>
      )}
      <div className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
        <div className="project-card__links">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`${title} GitHub`}
            >
              <FiGithub />
            </a>
          )}
          {notionUrl && (
            <a
              href={notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`${title} Notion`}
            >
              <SiNotion />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`${title} Live`}
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <div className="project-card__period">{period}</div>
      {role && <div className="project-card__role">{role}</div>}
      <p className="project-card__desc">{description}</p>

      {highlights && highlights.length > 0 && (
        <ul className="project-card__highlights">
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {techStack && techStack.length > 0 && (
        <div className="project-card__tech">
          {techStack.map((tech) => (
            <span key={tech} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
