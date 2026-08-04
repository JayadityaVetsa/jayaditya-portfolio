import { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import {
  education,
  experience,
  highlights,
  moreProjects,
  profile,
  research,
  selectedProjects,
  type LinkItem,
  type Project,
} from './data/portfolio';

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function useActiveSection() {
  const [active, setActive] = useState('work');

  useEffect(() => {
    const observers = navItems.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return undefined;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { rootMargin: '-24% 0px -65% 0px', threshold: 0.02 },
      );
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return active;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ExternalLink({ link, className = '' }: { link: LinkItem; className?: string }) {
  const isMail = link.href.startsWith('mailto:');
  return (
    <a className={className} href={link.href} {...(!isMail ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {link.label}
      {!isMail && <ArrowUpRight size={15} aria-hidden="true" />}
    </a>
  );
}

function Nav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const select = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <header className="site-nav">
      <a className="wordmark" href="#top" aria-label="Jayaditya Vetsa home">JV</a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button key={item.id} className={active === item.id ? 'active' : ''} type="button" onClick={() => select(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="nav-end">
        <ExternalLink link={{ label: 'Resume', href: profile.resumeUrl }} className="resume-link" />
        <button className="menu-button" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => <button key={item.id} type="button" onClick={() => select(item.id)}>{item.label}</button>)}
          <ExternalLink link={{ label: 'Resume', href: profile.resumeUrl }} />
        </nav>
      )}
    </header>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section id={id} className="section" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
      <motion.div className="section-heading" variants={reveal}>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </motion.div>
      {children}
    </motion.section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article className="project-row" variants={reveal}>
      <div className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
      <div className="project-main">
        <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <p className="project-impact">{project.impact}</p>
        <div className="tag-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </div>
      <div className="project-links">
        {project.links.map((link) => <ExternalLink link={link} key={link.href} className="project-link" />)}
      </div>
    </motion.article>
  );
}

function App() {
  return (
    <div id="top" className="app-shell">
      <Nav />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <motion.p className="hero-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            {profile.location} · Available for research and engineering opportunities
          </motion.p>
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}>
            Building rigorous systems for <em>real</em> questions.
          </motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}>
            I’m Jayaditya Vetsa, a machine-learning researcher and software builder working across robotics, applied AI, and quantitative systems.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }}>
            <button type="button" className="primary-action" onClick={() => scrollTo('work')}>Explore selected work <ArrowDownRight size={17} /></button>
            <ExternalLink link={{ label: 'Email me', href: `mailto:${profile.email}` }} className="text-action" />
          </motion.div>
          <motion.div className="highlights" variants={stagger} initial="hidden" animate="visible">
            {highlights.map((item) => <motion.div key={item.label} variants={reveal}><strong>{item.value}</strong><span>{item.label}</span></motion.div>)}
          </motion.div>
        </section>

        <Section id="work" eyebrow="Selected work" title="Research-minded engineering, made useful.">
          <motion.p className="section-intro" variants={reveal}>A small selection of work that shows how I investigate systems, document evidence, and turn technical ideas into working tools.</motion.p>
          <div className="project-list">{selectedProjects.map((project, index) => <ProjectRow key={project.title} project={project} index={index} />)}</div>
          <motion.div className="more-work" variants={reveal}>
            <div className="more-work-heading"><p className="eyebrow">More projects</p><ExternalLink link={{ label: 'View all repositories', href: profile.github }} className="text-action" /></div>
            <div className="more-projects">
              {moreProjects.map((project) => (
                <article key={project.title}>
                  <span>{project.category} · {project.year}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ExternalLink link={project.links[0]} className="compact-link" />
                </article>
              ))}
            </div>
          </motion.div>
        </Section>

        <Section id="research" eyebrow="Research" title="Careful methods across different domains.">
          <div className="research-list">
            {research.map((item) => <motion.article key={item.title} variants={reveal}><p>{item.label}</p><div><h3>{item.title}</h3><span>{item.text}</span>{item.link && <ExternalLink link={item.link} className="compact-link" />}</div></motion.article>)}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Technical work with room for leadership.">
          <div className="experience-list">
            {experience.map((item) => (
              <motion.article key={`${item.title}-${item.organization}`} variants={reveal}>
                <div><p>{item.period}</p><h3>{item.title}</h3><span>{item.organization}</span></div>
                <div><p>{item.summary}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="about" eyebrow="About" title="Grounded in the work, not the buzzwords.">
          <motion.div className="about-grid" variants={reveal}>
            <div><p>I like work that makes an ambitious claim inspectable: a measured benchmark, a reproducible pipeline, a practical tool, or a model whose limitations are stated plainly.</p><p>That perspective carries through my research in robotics and computational biology, my finance systems, and the community teams I help lead.</p></div>
            <aside><p className="eyebrow">Education</p><h3>{education.school}</h3><span>{education.detail}</span><ul>{education.academics.map((item) => <li key={item}>{item}</li>)}</ul><p className="eyebrow course-label">Coursework</p><div className="tag-row">{education.coursework.map((course) => <span key={course}>{course}</span>)}</div></aside>
          </motion.div>
        </Section>

        <section id="contact" className="contact-section">
          <p className="eyebrow">Get in touch</p>
          <h2>Interested in working together?</h2>
          <p>I’m always glad to connect about research, engineering, and thoughtful technical work.</p>
          <div className="contact-actions">
            <ExternalLink link={{ label: 'Email me', href: `mailto:${profile.email}` }} className="primary-action" />
            <ExternalLink link={{ label: 'LinkedIn', href: profile.linkedin }} className="text-action" />
            <ExternalLink link={{ label: 'GitHub', href: profile.github }} className="text-action" />
          </div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} {profile.name}</span><a href={`mailto:${profile.email}`}>vetsajayaditya@gmail.com</a><div><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a></div></footer>
    </div>
  );
}

export default App;
