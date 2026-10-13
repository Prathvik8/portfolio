import React from 'react';
import { siteConfig } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" aria-label="About Me">
      <div className="container">
        <div className="section-grid">
          {/* Left Column: 01 / About */}
          <div className="section-left-col">
            <div className="section-num">01</div>
            <h2 className="section-title-serif">About</h2>
          </div>

          {/* Right Column: Narrative + Currently List */}
          <div className="section-right-col">
            <div className="about-content-layout">
              <div className="about-paragraphs">
                <p>{siteConfig.about.p1}</p>
                <p>{siteConfig.about.p2}</p>
                <p>{siteConfig.about.p3}</p>
                <p>{siteConfig.about.p4}</p>
              </div>

              {/* Currently subsection */}
              <div className="currently-column">
                <div className="currently-title">Currently</div>
                <ul className="currently-list">
                  {siteConfig.currently.map((item, idx) => (
                    <li key={idx} className="currently-item">
                      <span className="currently-item-arrow">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
