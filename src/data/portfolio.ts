export type LinkItem = { label: string; href: string };

export type Project = {
  title: string;
  category: string;
  year: string;
  summary: string;
  impact: string;
  technologies: string[];
  links: LinkItem[];
};

export type Experience = {
  title: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const profile = {
  name: 'Jayaditya Vetsa',
  title: 'Machine Learning Researcher & Software Builder',
  location: 'Leander, Texas',
  email: 'vetsajayaditya@gmail.com',
  resumeUrl: '/resume/jayaditya-vetsa-resume.pdf',
  github: 'https://github.com/JayadityaVetsa',
  linkedin: 'https://www.linkedin.com/in/jayaditya-vetsa-21b20b285',
};

export const highlights = [
  { value: '3', label: 'research preprints' },
  { value: '20K+', label: 'monthly product users' },
  { value: 'Top 24', label: 'global finance finalist' },
];

export const selectedProjects: Project[] = [
  {
    title: 'SplineFlow-Panda',
    category: 'Robotics research',
    year: '2026',
    summary: 'A measured MuJoCo study comparing continuous B-spline robot actions with discrete action chunks for a simulated Franka Panda.',
    impact: 'At 2× speed, B-spline actions completed both paired layouts while discrete chunks missed the waypoint criterion; the work includes a live dashboard and reproducible rollout ledger.',
    technologies: ['Python', 'MuJoCo', 'B-splines', 'Robotics', 'Streamlit'],
    links: [
      { label: 'Repository', href: 'https://github.com/JayadityaVetsa/SplineFlow-Panda' },
      { label: 'Live dashboard', href: 'https://splineflow-panda-z8mhg6j3bgnwsxlinc6rpy.streamlit.app/' },
    ],
  },
  {
    title: 'LUAD Immune Phenotyping',
    category: 'Computational biology',
    year: '2026',
    summary: 'A retrospective transcriptome analysis of immune phenotypes and survival stratification in TCGA lung adenocarcinoma.',
    impact: 'Integrates deconvolution, phenotype clustering, supervised assignment, survival analysis, and an exploratory immune-cell interaction score; archived with a Zenodo preprint.',
    technologies: ['Python', 'R', 'RNA-seq', 'Survival Analysis', 'TCGA'],
    links: [
      { label: 'Repository', href: 'https://github.com/JayadityaVetsa/luad-immune-phenotyping' },
      { label: 'Zenodo preprint', href: 'https://doi.org/10.5281/zenodo.21630124' },
    ],
  },
  {
    title: 'Robot PoseShield',
    category: 'Robot safety',
    year: '2026',
    summary: 'CPU-based collision checking and motion repair for the Franka Panda, combining deterministic sphere geometry with differentiable URDF kinematics.',
    impact: 'Uses 61 official collision spheres, achieved 94.28% holdout accuracy with no observed false-safe classifications, and repaired colliding trajectories in PyBullet validation.',
    technologies: ['Python', 'PyTorch', 'PyBullet', 'URDF', 'Motion Planning'],
    links: [{ label: 'Repository', href: 'https://github.com/JayadityaVetsa/Robot-PoseShield' }],
  },
  {
    title: 'PatchProof',
    category: 'Developer tooling',
    year: '2026',
    summary: 'A deterministic CLI and GitHub Action that verifies a regression test fails on a base revision and passes with a submitted fix.',
    impact: 'Supports pytest, Jest, and Vitest across Linux, Windows, and macOS through isolated worktrees and separate base/head environments.',
    technologies: ['TypeScript', 'Node.js', 'GitHub Actions', 'npm', 'Testing'],
    links: [
      { label: 'Repository', href: 'https://github.com/JayadityaVetsa/PatchProof' },
      { label: 'Package', href: 'https://www.npmjs.com/package/@jayadityavetsa/patchproof' },
    ],
  },
  {
    title: 'FinancialToolsAI',
    category: 'Financial technology',
    year: '2025',
    summary: 'A free financial-literacy platform that makes stock analysis, company summaries, DCF models, Monte Carlo simulation, and AI-assisted research approachable.',
    impact: 'Reached 20,000+ monthly users and was featured in the Young Investors Society newsletter.',
    technologies: ['Python', 'Flask', 'Gemini API', 'Pandas', 'Financial APIs'],
    links: [{ label: 'Live site', href: 'https://financetoolsai.pythonanywhere.com' }],
  },
  {
    title: 'Queue-Reactive Limit Order Book Simulator',
    category: 'Quantitative research',
    year: '2026',
    summary: 'A research-grade simulator and dashboard for state-dependent limit-order-book dynamics, calibration, and execution analysis.',
    impact: 'Models limit, market, and cancel events with queue-reactive intensities, and includes deterministic simulation, validation, and an interactive guide.',
    technologies: ['Python', 'Market Microstructure', 'Simulation', 'Data Modeling'],
    links: [{ label: 'Repository', href: 'https://github.com/JayadityaVetsa/queue-reactive-limit-order-book-market-simulator' }],
  },
];

export const moreProjects: Project[] = [
  { title: 'FinDash', category: 'Financial product', year: '2026', summary: 'A customizable Notion-inspired market dashboard with resizable widgets, multi-dashboard support, real-time data, and Supabase authentication.', impact: 'Built with a polished interaction model and 15+ finance widgets.', technologies: ['Next.js', 'TypeScript', 'Supabase', 'Finnhub'], links: [{ label: 'Repository', href: 'https://github.com/JayadityaVetsa/FinDashDesign' }] },
  { title: 'Secure FastAPI Identity Gateway', category: 'Backend security', year: '2026', summary: 'A security-focused identity API with Argon2 password hashing, JWT authentication, RBAC, audit events, and login throttling.', impact: 'Pairs a concise REST surface with automated coverage for security-critical flows.', technologies: ['Python', 'FastAPI', 'JWT', 'SQLite'], links: [{ label: 'Repository', href: 'https://github.com/JayadityaVetsa/secure-fastapi-identity-gateway' }] },
  { title: 'Cross-Sectional Statistical Arbitrage', category: 'Quantitative research', year: '2026', summary: 'Market-neutral residual mean-reversion research for liquid U.S. equities with factor neutralization and cost-aware backtesting.', impact: 'Includes validation utilities, a Streamlit dashboard, and clearly labeled historical simulation results.', technologies: ['Python', 'Streamlit', 'Pandas', 'Backtesting'], links: [{ label: 'Repository', href: 'https://github.com/JayadityaVetsa/cross-sectional-statistical-arbitrage' }] },
  { title: 'AVA Action Recognition', category: 'Computer vision', year: '2026', summary: 'A benchmark of single-frame CNNs on a curated 15-class AVA action-recognition subset.', impact: 'Uses the results to examine why temporal context matters for motion-dependent actions.', technologies: ['Python', 'PyTorch', 'EfficientNet', 'CNNs'], links: [{ label: 'Repository', href: 'https://github.com/JayadityaVetsa/AvaActionRecognition' }] },
  { title: 'Gridwatch AI', category: 'Applied ML', year: '2026', summary: 'A U.S. power-grid monitoring dashboard with a 72-hour risk outlook using grid-load and climate features.', impact: 'Pairs a Gradient Boosting workflow with a deployable monitoring interface.', technologies: ['JavaScript', 'Vite', 'EIA', 'NOAA'], links: [{ label: 'Repository', href: 'https://github.com/JayadityaVetsa/Gridwatch-AI' }] },
  { title: 'Quant IQ Vision', category: 'Financial technology', year: '2025', summary: 'A full-stack portfolio analysis and optimization application with a React interface and FastAPI service layer.', impact: 'Provides portfolio analysis, risk metrics, market-data workflows, and efficient-frontier visualization.', technologies: ['React', 'TypeScript', 'FastAPI', 'Python'], links: [{ label: 'Repository', href: 'https://github.com/JayadityaVetsa/quant-iq-vision-08' }] },
];

export const research = [
  { title: 'UT Dallas Intelligent Robotics & Vision Lab', label: 'Research assistant · 2026–present', text: 'Developing video-conditioned robot-learning systems that connect human demonstrations with physically valid robot task execution.' },
  { title: 'PUF Authentication Research', label: 'IEEE HOST · 2026', text: 'Studied targeted forgery risks in physical unclonable function authentication and designed a defense to preserve legitimate access accuracy.' },
  { title: 'NOVA Neuroimaging', label: 'IEEE TechRxiv · 2025', text: 'Developed a deep-learning tool for early neurodegenerative disease detection using gray-matter segmentation on 2D MRI data.', link: { label: 'Read preprint', href: 'https://www.techrxiv.org/users/935305/articles/1305840-nova-a-deep-learning-based-tool-for-early-detection-and-biomarker-inference-of-neurodegenerative-diseases-using-2d-mri' } },
  { title: 'Sentiment Credibility LSTM', label: 'IEEE TechRxiv · 2025', text: 'Investigated how the credibility of sentiment sources affects LSTM-based stock-price forecasting.', link: { label: 'Read preprint', href: 'https://www.techrxiv.org/users/935305/articles/1311773-the-impact-of-sentiment-source-credibility-on-lstm-based-stock-price-prediction' } },
];

export const experience: Experience[] = [
  { title: 'ML & Software Intern', organization: 'Calimatic EdTech', period: '2025', summary: 'Built AI-enabled internal tools and automation workflows for an education technology team.', highlights: ['Built a chatbot with 1,000+ successful executions.', 'Optimized knowledge-base workflows and database management.', 'Used Python, OpenAI API, LangChain, Azure, LlamaIndex, and n8n.'] },
  { title: 'Global Finalist', organization: 'Young Investors Society', period: '2025', summary: 'Conducted institutional-style equity research and presented an investment thesis in New York.', highlights: ['Reached the Top 24 globally from 650+ teams.', 'Completed 100+ hours of Arista Networks research.', 'Built a 10-year DCF with bull, base, and bear cases.'] },
  { title: 'Co-Founder & Vice President', organization: 'RHS Science Olympiad', period: '2022–2026', summary: 'Helped grow and lead a competitive science team while managing its operations and fundraising.', highlights: ['Led a club of 150+ members.', 'Qualified for Texas State with the team.', 'Placed 6th in Cell Biology at UT Regionals.'] },
  { title: 'Volunteer Educator', organization: 'North South Foundation', period: '2022–2026', summary: 'Taught advanced mathematics and created curriculum for younger students.', highlights: ['Taught 100+ students.', 'Created three curricula and teaching materials.', 'Raised $5,000 for scholarships.'] },
];

export const education = {
  school: 'Rouse High School',
  detail: 'Leander, Texas · Class of 2026',
  academics: ['4.0 unweighted GPA · 5.6 weighted GPA', 'Class rank: 6 / 531', '1540 SAT', 'AP Scholar with Distinction'],
  coursework: ['AP Computer Science A', 'AP Calculus BC', 'Multivariable Calculus', 'AP Statistics', 'AP Physics C'],
};
