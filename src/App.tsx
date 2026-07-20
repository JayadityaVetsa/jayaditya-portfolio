import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  type LucideIcon,
} from 'lucide-react';
import {
  additionalProjects,
  contactLinks,
  education,
  experience,
  featuredProjects,
  heroMetrics,
  profile,
  quickSignals,
  researchHighlights,
  techStack,
  type CaseStudy,
  type CompactProject,
  type Metric,
  type TimelineItem,
} from './data/portfolio';

const HeroCanvas = lazy(() =>
  import('./components/HeroCanvas').then((module) => ({ default: module.HeroCanvas })),
);

const navItems = [
  { id: 'work', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    const observers = ids.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: '-34% 0px -58% 0px', threshold: 0.01 },
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, [ids]);

  return activeId;
}

function scrollTo(id: string) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Nav() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(['home', ...navItems.map((item) => item.id)]);

  const handleSelect = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <header className="site-nav">
      <a className="brand-mark" href="#home" aria-label="Jayaditya Vetsa home">
        JV
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={activeId === item.id ? 'active' : ''}
            onClick={() => handleSelect(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="nav-actions">
        <ExternalLinkButton href={profile.resumeUrl} label="Resume" tone="secondary" />
        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="mobile-panel">
          {navItems.map((item) => (
            <button key={item.id} type="button" onClick={() => handleSelect(item.id)}>
              {item.label}
            </button>
          ))}
          <ExternalLinkButton href={profile.resumeUrl} label="Resume" tone="secondary" />
        </div>
      )}
    </header>
  );
}

function ExternalLinkButton({
  href,
  label,
  tone = 'primary',
  icon = true,
}: {
  href: string;
  label: string;
  tone?: 'primary' | 'secondary' | 'ghost';
  icon?: boolean;
}) {
  return (
    <a className={`external-button ${tone}`} href={href} target="_blank" rel="noreferrer">
      <span>{label}</span>
      {icon && <ArrowUpRight size={16} aria-hidden="true" />}
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  summary,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="section"
      variants={stagger}
      initial="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <motion.div className="section-heading" variants={reveal}>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{summary}</p>
      </motion.div>
      {children}
    </motion.section>
  );
}

function MetricStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <motion.div className="metric-strip" variants={stagger}>
      {metrics.map((metric) => (
        <motion.div className="metric-card" key={`${metric.value}-${metric.label}`} variants={reveal}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          <p>{metric.detail}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ProjectVisual({ project }: { project: CaseStudy }) {
  return (
    <div className={`project-visual ${project.accent}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-orbit one" />
      <div className="visual-orbit two" />
      <div className="visual-core">
        <span>{project.kicker}</span>
        <strong>{project.title}</strong>
      </div>
    </div>
  );
}

function TechPill({ children }: { children: React.ReactNode }) {
  return <span className="tech-pill">{children}</span>;
}

function CaseStudyCard({ project, index }: { project: CaseStudy; index: number }) {
  return (
    <motion.article className="case-study" variants={reveal}>
      <ProjectVisual project={project} />
      <div className="case-content">
        <div className="case-meta">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{project.kicker}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="role">{project.role}</p>
        <p className="summary">{project.summary}</p>
        <p className="impact">{project.impact}</p>
        <ul className="evidence-list">
          {project.evidence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="pill-row">
          {project.technologies.slice(0, 6).map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="link-row">
            {project.links.map((link) => (
              <ExternalLinkButton key={link.href} href={link.href} label={link.label} tone="ghost" />
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function CompactProjectCard({ project }: { project: CompactProject }) {
  return (
    <motion.article className="compact-project-card" variants={reveal}>
      <div className="compact-project-topline">
        <span>{project.category}</span>
        <span>{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="role">{project.role}</p>
      <p className="summary">{project.summary}</p>
      <ul className="evidence-list compact">
        {project.proof.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="pill-row">
        {project.technologies.map((tech) => (
          <TechPill key={tech}>{tech}</TechPill>
        ))}
      </div>
      {project.links.length > 0 && (
        <div className="link-row">
          {project.links.map((link) => (
            <ExternalLinkButton key={link.href} href={link.href} label={link.label} tone="ghost" />
          ))}
        </div>
      )}
    </motion.article>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <motion.article className="timeline-item" key={`${item.organization}-${item.title}`} variants={reveal}>
            <div className="timeline-icon">
              <Icon size={20} />
            </div>
            <div>
              <div className="timeline-topline">
                <span>{item.type}</span>
                <span>{item.period}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="organization">{item.organization}</p>
              <p className="summary">{item.summary}</p>
              <ul className="evidence-list compact">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

function SignalCard({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <div className="signal-card">
      <Icon size={18} />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, -110]);

  return (
    <section id="home" className="hero">
      <Suspense fallback={<div className="hero-canvas fallback" aria-hidden="true" />}>
        <HeroCanvas />
      </Suspense>
      <motion.div className="hero-content" style={{ y: heroY }}>
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {profile.title}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="hero-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          {profile.headline}
        </motion.p>
        <motion.p
          className="hero-positioning"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
        >
          {profile.positioning}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
        >
          <button className="external-button primary" type="button" onClick={() => scrollTo('work')}>
            <span>View selected work</span>
            <ArrowDown size={16} />
          </button>
          <ExternalLinkButton href={profile.resumeUrl} label="Resume" tone="secondary" />
          <ExternalLinkButton href={profile.linkedin} label="LinkedIn" tone="ghost" />
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-signals"
        variants={stagger}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        {quickSignals.map((signal) => (
          <motion.div key={signal.label} variants={reveal}>
            <SignalCard {...signal} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Nav />
      <main>
        <Hero />
        <section className="metrics-section" aria-label="Profile highlights">
          <MetricStrip metrics={heroMetrics} />
        </section>

        <Section
          id="work"
          eyebrow="Projects"
          title="Products, research systems, and open-source builds."
          summary="A focused view of shipped products and research work, followed by the full GitHub project catalog with implementation details."
        >
          <div className="case-grid">
            {featuredProjects.map((project, index) => (
              <CaseStudyCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <motion.div className="subsection-heading" variants={reveal}>
            <p className="eyebrow">GitHub project catalog</p>
            <h3>Open-source work and research builds.</h3>
            <p>
              Each entry is linked directly to its repository and summarizes the real implementation, validation, and
              technical focus described in its README.
            </p>
          </motion.div>
          <div className="compact-project-grid">
            {additionalProjects.map((project) => (
              <CompactProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="research"
          eyebrow="Research"
          title="Applied ML research across health and finance."
          summary="Research work is separated from product work so recruiters can quickly see methodology, publication signal, and domain depth."
        >
          <div className="research-grid">
            {researchHighlights.map((project, index) => (
              <CaseStudyCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Internships, leadership, and competition execution."
          summary="This timeline focuses on responsibility, outcomes, and evidence rather than listing every activity at the same volume."
        >
          <Timeline items={experience} />
        </Section>

        <Section
          id="stack"
          eyebrow="Technical stack"
          title="Tools I use to build, model, automate, and ship."
          summary="The stack is grouped by actual work patterns: ML research, full-stack product development, finance modeling, and automation."
        >
          <div className="stack-grid">
            {techStack.map((group) => {
              const Icon = group.icon;
              return (
                <motion.article className="stack-card" key={group.label} variants={reveal}>
                  <div className="stack-heading">
                    <Icon size={22} />
                    <h3>{group.label}</h3>
                  </div>
                  <div className="pill-row">
                    {group.items.map((item) => (
                      <TechPill key={item}>{item}</TechPill>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education and honors"
          title="Strong academic signal, rigorous coursework."
          summary={`${education.school}, ${education.location}. ${education.graduation}.`}
        >
          <div className="education-layout">
            <MetricStrip metrics={education.stats} />
            <motion.div className="education-panel" variants={reveal}>
              <h3>Relevant coursework</h3>
              <div className="pill-row">
                {education.coursework.map((course) => (
                  <TechPill key={course}>{course}</TechPill>
                ))}
              </div>
            </motion.div>
            <motion.div className="education-panel" variants={reveal}>
              <h3>Honors</h3>
              <ul className="honor-list">
                {education.honors.map((honor) => (
                  <li key={honor}>{honor}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Ready for technical internships, research teams, and ambitious builds."
          summary="The fastest way to reach me is email. I also keep my work and updates available on GitHub and LinkedIn."
        >
          <motion.div className="contact-panel" variants={reveal}>
            <div>
              <p className="contact-name">{profile.name}</p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>
                <MapPin size={16} />
                {profile.location}
              </span>
            </div>
            <div className="contact-actions">
              {contactLinks.map((link) => (
                <ExternalLinkButton key={link.href} href={link.href} label={link.label} tone="secondary" />
              ))}
            </div>
          </motion.div>
        </Section>
      </main>
      <footer className="site-footer">
        <span>{profile.name}</span>
        <div>
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
