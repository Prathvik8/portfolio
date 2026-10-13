import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" aria-label="Contact Section">
      <div className="container">
        <div className="section-grid">
          {/* Left Column: 06 / Contact */}
          <div className="section-left-col">
            <div className="section-num">06</div>
            <h2 className="section-title-serif">Contact</h2>
          </div>

          {/* Right Column: Two-part Contact section */}
          <div className="section-right-col">
            <div className="contact-grid">
              <div className="contact-direct-wrap">
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
                  Let's build something. Have an idea, project, or want to collaborate with our tech community?
                </p>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    DIRECT EMAIL
                  </div>
                  <a href={siteConfig.socials.email} className="contact-email-link">
                    {siteConfig.rawEmail}
                  </a>
                </div>

                <div className="contact-social-pills">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-row"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-row"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-row"
                  >
                    <InstagramIcon size={16} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              {/* Form */}
              <form className="contact-form-box" onSubmit={handleSubmit} noValidate>
                {submitted && (
                  <div className="form-success-banner" role="alert">
                    Thank you! Your message draft was validated.
                  </div>
                )}

                <div className="form-field">
                  <label htmlFor="name" className="form-label-mono">
                    NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input-editorial"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="form-err-msg">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="form-label-mono">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input-editorial"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="form-err-msg">{errors.email}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="form-label-mono">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    className="form-textarea-editorial"
                    placeholder="What would you like to build or discuss?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                  {errors.message && <span className="form-err-msg">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn-editorial-primary"
                  disabled={isSubmitting}
                  style={{ alignSelf: 'flex-start' }}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
