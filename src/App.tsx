import { useEffect, useRef, useState } from 'react';
import { MotionConfig, motion, useReducedMotion, useScroll, useSpring, useTransform, type Variants } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import {
  education,
  experience,
  highlights,
  moreProjects,
  organizations,
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
  { id: 'campus', label: 'At UT' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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
  document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={reveal}>{children}</motion.div>;
}

function MotionStudy() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-14, 20]);
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  return (
    <div ref={ref} className="motion-study" aria-hidden="true">
      <div className="study-label"><span>FIELD NOTES / 001</span><span>Motion & perception</span></div>
      <motion.svg viewBox="0 0 440 440" style={reduced ? {} : { rotate, y }}>
        <defs><pattern id="study-grid" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" opacity=".18" /></pattern><linearGradient id="path-color" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#bb5428" /><stop offset="1" stopColor="#537b73" /></linearGradient></defs>
        <rect width="440" height="440" fill="url(#study-grid)" />
        {[110, 155, 200].map(r => <circle key={r} cx="220" cy="220" r={r} fill="none" stroke="currentColor" strokeOpacity=".15" strokeDasharray={r === 155 ? '3 8' : undefined} />)}
        <path d="M20 220H420M220 20V420" stroke="currentColor" strokeOpacity=".12" />
        <ellipse cx="220" cy="220" rx="175" ry="75" transform="rotate(-38 220 220)" fill="none" stroke="currentColor" strokeOpacity=".2" />
        <motion.path d="M65 305C85 160 145 93 222 149S365 348 377 208C387 92 273 68 217 222S83 377 65 305" fill="none" stroke="url(#path-color)" strokeWidth="3" strokeLinecap="round" initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, ease: 'easeInOut', delay: .3 }} />
        {[[65,305],[222,149],[377,208],[217,222]].map(([cx,cy],i) => <g key={i}><circle cx={cx} cy={cy} r="11" fill="#f5f3ed" stroke="#ae4e29" strokeWidth="1" /><circle cx={cx} cy={cy} r="3" fill="#ae4e29" /></g>)}
        <text x="233" y="241" fontSize="10" fill="currentColor" fontFamily="monospace">SE(3)</text>
      </motion.svg>
      <div className="study-footer"><span><i /> FROM OBSERVATION TO ACTION</span><span>JV / 2026</span></div>
    </div>
  );
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
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const select = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <header className="site-nav">
      <a className="wordmark" href="#top" aria-label="Jayaditya Vetsa home">JV</a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button key={item.id} aria-current={active === item.id ? 'location' : undefined} className={active === item.id ? 'active' : ''} type="button" onClick={() => select(item.id)}>
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
    <section id={id} className="section">
      <Reveal className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal><article className="project-row">
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
    </article></Reveal>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: .001 });
  const [showMore, setShowMore] = useState(false);
  return (
    <MotionConfig reducedMotion="user">
    <div id="top" className="app-shell">
      <a className="skip-link" href="#work">Skip to selected work</a>
      <motion.div className="scroll-progress" style={{ scaleX: reduced ? scrollYProgress : progress }} aria-hidden="true" />
      <Nav />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-layout"><div className="hero-copy">
          <motion.p className="hero-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            {profile.location} <span className="kicker-dot" /> UT Austin · Robotics Honors
          </motion.p>
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}>
            From perception<br />to <em>possibility.</em>
          </motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}>
            I’m Jayaditya Vetsa, a computer science student at UT Austin. I build systems that connect machine learning to the physical world—and tools that make complex ideas useful.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }}>
            <button type="button" className="primary-action" onClick={() => scrollTo('work')}>Explore selected work <ArrowDownRight size={17} /></button>
            <ExternalLink link={{ label: 'Email me', href: `mailto:${profile.email}` }} className="text-action" />
          </motion.div>
          <div className="hero-affiliation">Computer Science <span>/</span> Robotics <span>/</span> Applied ML</div>
          </div><MotionStudy /></div>
          <motion.div className="highlights" variants={stagger} initial="hidden" animate="visible">
            {highlights.map((item) => <motion.div key={item.label} variants={reveal}><strong>{item.value}</strong><span>{item.label}</span></motion.div>)}
          </motion.div>
          <a className="scroll-cue" href="#work">A closer look <ArrowDownRight size={16} /></a>
        </section>

        <Section id="work" eyebrow="Selected work" title="Research-minded engineering, made useful.">
          <Reveal><p className="section-intro">Robot control, autonomous flight, developer tools, and quantitative research. Built to be measured, inspected, and used.</p></Reveal>
          <div className="project-list">{selectedProjects.map((project, index) => <ProjectRow key={project.title} project={project} index={index} />)}</div>
          <Reveal className="more-work">
            <div className="more-work-heading"><button className="archive-toggle" type="button" aria-expanded={showMore} aria-controls="project-archive" onClick={() => setShowMore(!showMore)}>{showMore ? '− Close' : '+ Explore'} the project archive <span>{moreProjects.length} projects</span></button><ExternalLink link={{ label: 'All repositories', href: profile.github }} className="text-action" /></div>
            <div id="project-archive" className="more-projects" hidden={!showMore}>
              {moreProjects.map((project) => (
                <article key={project.title}>
                  <span>{project.category} · {project.year}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ExternalLink link={project.links[0]} className="compact-link" />
                </article>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="research" eyebrow="Research" title="Careful methods across different domains.">
          <div className="research-list">
            {research.map((item) => <Reveal key={item.title}><article><p>{item.label}</p><div><h3>{item.title}</h3><span>{item.text}</span>{item.link && <ExternalLink link={item.link} className="compact-link" />}</div></article></Reveal>)}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Technical work with room for leadership.">
          <div className="experience-list">
            {experience.map((item) => (
              <Reveal key={`${item.title}-${item.organization}`}><article>
                <div><p>{item.period}</p><h3>{item.title}</h3><span>{item.organization}</span></div>
                <div><p>{item.summary}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
              </article></Reveal>
            ))}
          </div>
        </Section>

        <Section id="campus" eyebrow="At UT Austin" title="Building alongside the team.">
          <Reveal><p className="section-intro">Bringing perception, software, and controls into student robotics at UT.</p></Reveal>
          <div className="organization-grid">{organizations.map((org, index) => <Reveal key={org.name}><article className="organization-card"><div className="org-top"><span className="eyebrow">{org.area}</span><span className="org-number">0{index + 1}</span></div><h3>{org.name}</h3><p className="org-role">{org.role}</p><p>{org.text}</p><span className="org-school">The University of Texas at Austin</span></article></Reveal>)}</div>
        </Section>

        <Section id="about" eyebrow="About" title="Curiosity, backed by careful work.">
          <Reveal className="about-grid">
            <div><p>I’m interested in how machines understand the world—and how we know when they get it right.</p><p>At UT Austin, I’m studying computer science in the Robotics Honors Program. My work spans robot learning, autonomous systems, computational biology, and financial tools, with an emphasis on reproducible experiments and useful software.</p><p className="about-signature">Jayaditya Vetsa <span>Austin, TX</span></p></div>
            <aside><p className="eyebrow">Education</p><h3>{education.school}</h3><span>{education.detail}</span><ul>{education.academics.map((item) => <li key={item}>{item}</li>)}</ul><p className="eyebrow course-label">Tools I work with</p><div className="tag-row">{education.coursework.map((course) => <span key={course}>{course}</span>)}</div></aside>
          </Reveal>
        </Section>

        <section id="contact" className="contact-section">
          <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2>Interested in working together?</h2>
          <p className="contact-intro">Let’s connect about robotics research, engineering, or summer 2027 internship opportunities.</p>
          <div className="contact-actions">
            <ExternalLink link={{ label: 'Email me', href: `mailto:${profile.email}` }} className="primary-action" />
            <ExternalLink link={{ label: 'LinkedIn', href: profile.linkedin }} className="text-action" />
            <ExternalLink link={{ label: 'GitHub', href: profile.github }} className="text-action" />
          </div>
          </Reveal>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} {profile.name}</span><a href={`mailto:${profile.email}`}>{profile.email}</a><div><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a></div></footer>
    </div>
    </MotionConfig>
  );
}

export default App;
