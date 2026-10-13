import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';

export const Resume: React.FC = () => {
  return (
    <section id="resume" aria-label="Resume Section">
      <div className="container">
        <div className="section-grid">
          {/* Left Column: 05 / Resume */}
          <div className="section-left-col">
            <div className="section-num">05</div>
            <h2 className="section-title-serif">Resume</h2>
          </div>

          {/* Right Column: Text description, Download & View buttons, note */}
          <div className="section-right-col">
            <p className="resume-text">
              {siteConfig.resumeText}
            </p>

            <div className="resume-btn-row">
              <a
                href={siteConfig.resumeUrl}
                download="Prathvik_Resume.pdf"
                className="btn-editorial-primary"
                aria-label="Download Resume"
              >
                <Download size={15} />
                <span>Download Resume</span>
              </a>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary"
                aria-label="View Resume in new tab"
              >
                <span>View Resume</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="resume-file-note">
              {siteConfig.resumeNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
