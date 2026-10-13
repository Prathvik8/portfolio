import React from 'react';
import { siteConfig } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="editorial-footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div>
            © 2026 {siteConfig.name}. Made with curiosity &amp; code.
          </div>

          <div className="footer-socials">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href={siteConfig.socials.email}
              className="footer-social-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
