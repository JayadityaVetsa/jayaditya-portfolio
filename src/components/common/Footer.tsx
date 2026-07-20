import React from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useSmoothScroll } from '../../hooks/useScrollAnimation';

export const Footer: React.FC = () => {
  const { scrollToElement } = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-cosmic-primary border-t border-cosmic-secondary/20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-poppins gradient-text">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-cosmic-muted leading-relaxed">
              {personalInfo.title}
            </p>
            <p className="text-sm text-cosmic-muted">{personalInfo.location}</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-cosmic-text uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToElement(link.id, 80)}
                  className="text-sm text-cosmic-muted hover:text-cosmic-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-cosmic-text uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cosmic-dark/40 rounded-lg text-cosmic-muted hover:text-cosmic-accent hover:bg-cosmic-secondary/20 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cosmic-dark/40 rounded-lg text-cosmic-muted hover:text-cosmic-accent hover:bg-cosmic-secondary/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-cosmic-dark/40 rounded-lg text-cosmic-muted hover:text-cosmic-accent hover:bg-cosmic-secondary/20 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              {personalInfo.socialLinks.website && (
                <a
                  href={personalInfo.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-cosmic-dark/40 rounded-lg text-cosmic-muted hover:text-cosmic-accent hover:bg-cosmic-secondary/20 transition-all"
                  aria-label="Website"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cosmic-accent hover:text-cosmic-text transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-cosmic-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cosmic-muted">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-cosmic-muted">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
