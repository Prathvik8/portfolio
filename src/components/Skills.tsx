import React from 'react';
import { siteConfig, type SkillRow } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" aria-label="Skills & Technologies">
      <div className="container">
        <div className="section-grid">
          {/* Left Column: 04 / Skills */}
          <div className="section-left-col">
            <div className="section-num">04</div>
            <h2 className="section-title-serif">Skills</h2>
          </div>

          {/* Right Column: Clean table rows matching screenshot 5 */}
          <div className="section-right-col">
            <div className="skills-table">
              {siteConfig.skills.map((row: SkillRow) => (
                <div key={row.category} className="skills-row">
                  <div className="skills-row-category">{row.category}</div>
                  <div className="skills-row-items">{row.skills}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
