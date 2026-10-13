import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig, type ProjectEntry } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" aria-label="Projects Showcase">
      <div className="container">
        <div className="section-grid">
          {/* Left Column: 02 / Projects */}
          <div className="section-left-col">
            <div className="section-num">02</div>
            <h2 className="section-title-serif">Projects</h2>
          </div>

          {/* Right Column: Helper note + Projects list */}
          <div className="section-right-col">
            <div className="section-helper-comment">
              {siteConfig.projectsHelperText}
            </div>

            <div className="projects-feed">
              {siteConfig.projects.map((project: ProjectEntry) => (
                <article key={project.id} className="project-item-layout">
                  {/* Thumbnail / screenshot box */}
                  <div className="project-thumb-box">
                    <span>{project.numberPrefix} / screenshot</span>
                  </div>

                  {/* Project details */}
                  <div className="project-info-block">
                    <h3 className="project-name-title">{project.name}</h3>

                    <div className="project-details-line">
                      <span className="bracket-label">[PROJECT DETAILS]</span> — one or two sentences on what it is.
                    </div>

                    <div className="project-problem-line">
                      <span className="project-problem-label">Problem</span>
                      <span>{project.problem}</span>
                    </div>

                    <div className="project-tech-line">
                      {project.tech.map((t, idx) => (
                        <React.Fragment key={idx}>
                          <span>{t}</span>
                          {idx < project.tech.length - 1 && <span> • </span>}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="project-links-line">
                      <a
                        href={project.githubUrl || project.liveUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-action primary-link"
                      >
                        <span>View Project</span>
                        <ArrowRight size={13} />
                      </a>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-action"
                        >
                          GitHub
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-action"
                        >
                          Live demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
