import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="hero-layout">
          {/* Left Column: Greeting, Big Serif Name, Role, Intro, Actions */}
          <div>
            <div className="hero-greeting">{siteConfig.greeting}</div>

            <h1 className="hero-name">{siteConfig.name}</h1>

            <div className="hero-role-line">{siteConfig.currentRole}</div>

            <div className="hero-subtitles-line">{siteConfig.subtitles}</div>

            <p className="hero-intro-text">
              {siteConfig.intro}
            </p>

            <div className="hero-actions-row">
              <a href="#projects" className="btn-editorial-primary">
                <span>View Projects</span>
                <ArrowRight size={14} />
              </a>

              <a href="#contact" className="btn-editorial-secondary">
                Contact Me
              </a>

              {/* Minimal social icons row */}
              <div className="hero-social-icons">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon-btn"
                  aria-label="GitHub profile"
                  title="GitHub"
                >
                  <GithubIcon size={16} />
                </a>

                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon-btn"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>

                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon-btn"
                  aria-label="Instagram profile"
                  title="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>

                <a
                  href={siteConfig.socials.email}
                  className="hero-social-icon-btn"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3:4 Editorial Portrait Card */}
          <div>
            <div className="photo-frame-wrapper">
              <div className="photo-editorial-card">
                <img
                  src="/photo.png"
                  alt="Prathvik"
                  className="photo-editorial-img"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.photo-placeholder-text')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'photo-placeholder-text';
                      fallback.style.cssText = 'height: 100%; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center;';
                      fallback.innerText = 'place photo at\npublic/photo.png';
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <span className="photo-corner-badge">Prathvik • CS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
