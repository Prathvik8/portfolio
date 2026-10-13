import React from 'react';
import { siteConfig, type ExperienceEntry } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" aria-label="Experience & Leadership">
      <div className="container">
        <div className="section-grid">
          {/* Left Column: 03 / Experience & Leadership */}
          <div className="section-left-col">
            <div className="section-num">03</div>
            <h2 className="section-title-serif">Experience &amp;<br />Leadership</h2>
          </div>

          {/* Right Column: Timeline matching screenshot 4 */}
          <div className="section-right-col">
            <div className="editorial-timeline">
              {siteConfig.experiences.map((exp: ExperienceEntry) => (
                <div key={exp.id} className="editorial-timeline-item">
                  <span className="editorial-timeline-node" aria-hidden="true"></span>

                  <div className="timeline-date-range">
                    {exp.dateRange}
                  </div>

                  <h3 className="timeline-position-title">{exp.role}</h3>

                  <div className="timeline-org-name">
                    <span>{exp.organization}</span>
                    {exp.collegeName && (
                      <span className="bracket-highlight">, {exp.collegeName}</span>
                    )}
                  </div>

                  <p className="timeline-narrative">
                    {exp.description}
                  </p>

                  <ul className="timeline-list">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="timeline-bullet">
                        <span className="timeline-bullet-dash">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
