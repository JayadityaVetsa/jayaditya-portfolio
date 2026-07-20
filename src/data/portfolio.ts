import {
  ArrowUpRight,
  Activity,
  Brain,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  LineChart,
  Mail,
  Microscope,
  Rocket,
  Trophy,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type LinkItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type CaseStudy = {
  title: string;
  kicker: string;
  role: string;
  summary: string;
  impact: string;
  accent: 'cyan' | 'indigo' | 'gold' | 'emerald' | 'rose';
  technologies: string[];
  evidence: string[];
  links: LinkItem[];
};

export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  type: string;
  summary: string;
  bullets: string[];
  icon: LucideIcon;
};

export type CompactProject = {
  title: string;
  category: string;
  role: string;
  summary: string;
  status: string;
  technologies: string[];
  proof: string[];
  links: LinkItem[];
};

export const profile = {
  name: 'Jayaditya Vetsa',
  title: 'ML Developer, Student Researcher, and Quant Finance Builder',
  location: 'Leander, TX',
  email: 'vetsajayaditya@gmail.com',
  phone: '737-230-0202',
  resumeUrl: '/resume/jayaditya-vetsa-resume.pdf',
  github: 'https://github.com/JayadityaVetsa',
  linkedin: 'https://www.linkedin.com/in/jayaditya-vetsa-21b20b285',
  headline:
    'I build AI systems, finance tools, and research prototypes that turn ambitious technical ideas into usable products.',
  positioning:
    'High school senior at Rouse High School, Class of 2026, focused on machine learning, quantitative finance, and applied research. My strongest work combines rigorous models with interfaces people can actually use.',
};

export const heroMetrics: Metric[] = [
  {
    value: '20K+',
    label: 'monthly users',
    detail: 'FinancialToolsAI finance platform',
  },
  {
    value: '2',
    label: 'IEEE TechRxiv preprints',
    detail: 'AI neuroimaging and LSTM sentiment research',
  },
  {
    value: 'Top 24',
    label: 'global finalist',
    detail: 'YIS investment competition from 650+ teams',
  },
  {
    value: '1540',
    label: 'SAT score',
    detail: 'Ranked 6 of 531 at Rouse High School',
  },
];

export const featuredProjects: CaseStudy[] = [
  {
    title: 'LISDSurvey',
    kicker: 'Civic education technology',
    role: 'Co-Founder and Lead Data Engineer',
    summary:
      'Published an iOS survey platform for Leander ISD to replace expensive third-party tools and give administrators a cleaner feedback loop.',
    impact: 'Potential reach of 30,000+ students while replacing tools that can cost $10K+ per year.',
    accent: 'cyan',
    technologies: ['Swift', 'Firebase', 'REST APIs', 'iOS', 'Data Visualization'],
    evidence: [
      'Under beta testing with RHS administrators and district officials.',
      'Built secure collection, storage, and visualization flows for survey data.',
      'Designed real-time feedback features to increase student participation.',
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/lisdsurvey/id6752630095',
      },
    ],
  },
  {
    title: 'FinancialToolsAI',
    kicker: 'AI finance platform',
    role: 'Co-Founder and Lead Backend Developer',
    summary:
      'A free financial literacy platform with AI-powered stock analysis, company summaries, DCF tools, Monte Carlo simulations, and beginner-focused investment education.',
    impact: '20,000+ monthly users and a Young Investors Society newsletter feature reaching 12,000+ students.',
    accent: 'emerald',
    technologies: ['Python', 'Flask', 'Gemini API', 'Pandas', 'Matplotlib', 'Financial APIs'],
    evidence: [
      'Made professional-level finance tools accessible to beginners.',
      'Improved financial literacy for 50+ teens through simple online workflows.',
      'Built and maintained backend data and AI analysis pipelines.',
    ],
    links: [
      {
        label: 'Live Site',
        href: 'https://financetoolsai.pythonanywhere.com',
      },
    ],
  },
  {
    title: 'QuantifyIQ',
    kicker: 'Portfolio optimization',
    role: 'Co-Founder and Lead Backend Developer',
    summary:
      'Advanced investing platform that applies Modern Portfolio Theory, Black-Litterman optimization, Monte Carlo simulation, and stress testing.',
    impact: 'Gives users quantitative portfolio tools normally reserved for advanced finance workflows.',
    accent: 'indigo',
    technologies: ['Python', 'Modern Portfolio Theory', 'Black-Litterman', 'Monte Carlo', 'Risk Models'],
    evidence: [
      'Implemented portfolio construction around risk and return tradeoffs.',
      'Added investor-view inputs through Black-Litterman modeling.',
      'Built historical crisis stress tests for resilience analysis.',
    ],
    links: [
      {
        label: 'Live Site',
        href: 'https://quant-iq-vision-frontend.onrender.com/',
      },
    ],
  },
  {
    title: 'NOVA',
    kicker: 'AI medical imaging research',
    role: 'Researcher and Builder',
    summary:
      'Deep learning tool for early neurodegenerative disease detection using gray matter segmentation on 2D MRI data.',
    impact: 'Achieved 96.08% accuracy and published a preprint on IEEE TechRxiv.',
    accent: 'rose',
    technologies: ['Python', 'TensorFlow', 'CNNs', 'Medical Imaging', 'MRI Analysis'],
    evidence: [
      'Selected for Round 2 judging at the Greater Austin Regional Science and Engineering Fair.',
      'Designed heat-map style disease progression visualization concepts.',
      'Focused on early-stage Parkinsons and paralysis indicators.',
    ],
    links: [
      {
        label: 'Preprint',
        href: 'https://www.techrxiv.org/users/935305/articles/1305840-nova-a-deep-learning-based-tool-for-early-detection-and-biomarker-inference-of-neurodegenerative-diseases-using-2d-mri',
      },
    ],
  },
  {
    title: 'Sentiment Credibility LSTM',
    kicker: 'Independent quant research',
    role: 'Independent Researcher',
    summary:
      'Research pipeline testing how real, Reddit, and AI-generated sentiment sources affect LSTM-based stock forecasting.',
    impact: 'Published findings on IEEE TechRxiv with a focus on source credibility and prediction volatility.',
    accent: 'gold',
    technologies: ['Python', 'LSTM', 'VADER', 'Yahoo Finance', 'Time Series', 'Sentiment Analysis'],
    evidence: [
      'Combined market data with multiple sentiment sources in a custom forecasting pipeline.',
      'Measured volatility introduced by lower-credibility or synthetic sentiment inputs.',
      'Connected machine learning model behavior to practical investment research quality.',
    ],
    links: [
      {
        label: 'Preprint',
        href: 'https://www.techrxiv.org/users/935305/articles/1311773-the-impact-of-sentiment-source-credibility-on-lstm-based-stock-price-prediction',
      },
    ],
  },
  {
    title: 'Arista Networks Equity Research',
    kicker: 'Global finance finalist',
    role: 'YIS Global Finalist and Student Board Member',
    summary:
      'Professional stock pitch and 10-year DCF model for Arista Networks, presented at the Global Youth Investment Summit.',
    impact: 'First Rouse High School team to reach Top 24 globally from 650+ teams.',
    accent: 'cyan',
    technologies: ['DCF Modeling', 'Excel', 'WACC', 'Scenario Analysis', 'Equity Research'],
    evidence: [
      'Conducted 100+ hours of equity research on Arista Networks.',
      'Built bull, base, and bear cases with terminal value sensitivity testing.',
      'Pitched investment thesis to hedge fund managers and industry judges in New York.',
    ],
    links: [],
  },
];

export const additionalProjects: CompactProject[] = [
  {
    title: 'PatchProof',
    category: 'Developer tooling',
    role: 'Founder and Maintainer',
    summary:
      'Deterministic CLI and GitHub Action that proves a changed regression test fails on a base revision and passes on the submitted fix.',
    status: 'npm package and GitHub Action',
    technologies: ['TypeScript', 'Node.js', 'npm', 'GitHub', 'Security Automation'],
    proof: [
      'Supports pytest, Jest, and Vitest across Linux, Windows, and macOS.',
      'Uses isolated Git worktrees and separate base/head environments for reproducible checks.',
      'Reports whether a changed test actually distinguishes a patch from its base revision.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/JayadityaVetsa/PatchProof' },
      { label: 'Documentation', href: 'https://jayadityavetsa.github.io/PatchProof/' },
      { label: 'npm', href: 'https://www.npmjs.com/package/@jayadityavetsa/patchproof' },
    ],
  },
  {
    title: 'AVA Action Recognition',
    category: 'Computer vision research',
    role: 'Researcher and Builder',
    summary:
      'Benchmarked single-frame CNNs on a curated 15-class AVA v2.2 action-recognition subset to measure the limits of spatial-only vision.',
    status: 'Research benchmark',
    technologies: ['Python', 'PyTorch', 'EfficientNet-B2', 'CNNs', 'AVA v2.2'],
    proof: [
      'Compared a 3.2M-parameter custom CNN with an 8.4M-parameter fine-tuned EfficientNet-B2.',
      'Fine-tuned EfficientNet-B2 reached 22.58% validation accuracy and 12.99% mAP.',
      'Analyzed why temporal context is essential for motion-dependent actions such as reading, drinking, and smoking.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/JayadityaVetsa/AvaActionRecognition' }],
  },
  {
    title: 'Cross-Sectional Statistical Arbitrage',
    category: 'Quantitative research',
    role: 'Independent Builder',
    summary:
      'Market-neutral residual mean-reversion research platform for liquid U.S. equities, with factor neutralization and cost-aware backtesting.',
    status: 'Research dashboard',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Backtesting', 'Statistical Arbitrage'],
    proof: [
      'Ranks residual mean-reversion signals after modeling returns against SPY-derived market factors.',
      'Includes transaction costs, slippage, validation utilities, tests, and a beginner-friendly Streamlit dashboard.',
      'Cached June 2026 research run reported a 0.97 full-period Sharpe ratio; historical simulation only, not investment advice.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/JayadityaVetsa/cross-sectional-statistical-arbitrage' }],
  },
  {
    title: 'Queue-Reactive Limit Order Book Simulator',
    category: 'Quant finance',
    role: 'Independent Builder',
    summary:
      'Research-grade simulator and Streamlit dashboard for state-dependent limit-order-book dynamics, calibration, and execution research.',
    status: 'Market microstructure simulator',
    technologies: ['Python', 'Market Microstructure', 'Simulation', 'Limit Order Books', 'Data Modeling'],
    proof: [
      'Models limit, market, and cancel events with queue-reactive arrival intensities.',
      'Includes calibration, deterministic simulation, empirical validation, and an interactive research guide.',
      'Verified 11/11 tests and benchmarked over 107,000 simulated events per second locally.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/JayadityaVetsa/queue-reactive-limit-order-book-market-simulator' }],
  },
  {
    title: 'Gridwatch AI',
    category: 'Applied machine learning',
    role: 'Builder',
    summary:
      'Real-time U.S. power-grid risk monitoring dashboard that predicts and visualizes potential cascade failures with a 72-hour outlook.',
    status: 'ML monitoring dashboard',
    technologies: ['React', 'TypeScript', 'Vite', 'Gradient Boosting', 'EIA', 'NOAA'],
    proof: [
      'Processes grid-load anomalies and climate features in a live monitoring workflow.',
      'Uses a GradientBoostingRegressor trained on historically backtested EIA and NOAA data.',
      'Designed as a Vite application ready for Vercel deployment.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/JayadityaVetsa/Gridwatch-AI' }],
  },
  {
    title: 'Quant IQ Vision',
    category: 'Portfolio optimization',
    role: 'Co-Founder and Lead Backend Developer',
    summary:
      'Full-stack portfolio analysis and optimization application with a React interface and FastAPI service layer.',
    status: 'Live application',
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Tailwind CSS'],
    proof: [
      'Provides portfolio analysis, risk metrics, market data, and efficient-frontier visualization.',
      'Uses a documented REST API for portfolio analysis and market-data workflows.',
      'Pairs frontend product work with a Python backend built for data validation and API delivery.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/JayadityaVetsa/quant-iq-vision-08' },
      { label: 'Live Site', href: 'https://quant-iq-vision-frontend.onrender.com/' },
    ],
  },
  {
    title: 'AppSpark',
    category: 'Education technology',
    role: 'Builder',
    summary:
      'Web application that helps young technologists discover viable app ideas and follow personalized learning challenges to build them.',
    status: 'AI learning platform',
    technologies: ['React', 'TypeScript', 'Firebase', 'Gemini API', 'Tailwind CSS'],
    proof: [
      'Combines curated ideas with Gemini-powered customization based on user interests and skills.',
      'Validates concepts against a users skill level and available time.',
      'Includes personalized learning pathways, community features, and progress tracking.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/JayadityaVetsa/SparkApp' }],
  },
  {
    title: 'Robot PoseShield (SphereShield)',
    category: 'Robotics and safety',
    role: 'Independent Builder',
    summary:
      'CPU-based collision checking and motion repair for the Franka Panda, using deterministic sphere geometry and differentiable URDF kinematics.',
    status: 'Robotics research implementation',
    technologies: ['Python', 'PyTorch', 'PyBullet', 'URDF Kinematics', 'Motion Planning'],
    proof: [
      'Uses 61 official Panda collision spheres and validates geometry independently against PyBullet.',
      'Achieved 94.28% holdout accuracy with zero observed false-safe classifications across 2,479 collision cases.',
      'Repaired two colliding trajectories to zero collisions across 301 dense PyBullet checks each.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/JayadityaVetsa/Robot-PoseShield' }],
  },
  {
    title: 'AIGP',
    category: 'Applied AI',
    role: 'Summer Builder',
    summary:
      'AI product work focused on turning complex reasoning workflows into a structured, testable user experience.',
    status: 'In development',
    technologies: ['AI Systems', 'TypeScript', 'Product Design', 'Evaluation', 'Workflow Automation'],
    proof: [
      'Built as part of a summer push into more rigorous AI product engineering.',
      'Explores structured generation, evaluation, and user-facing workflow design.',
      'Included as active work without overstating launch metrics before release.',
    ],
    links: [],
  },
];

export const researchProjects: CaseStudy[] = [
  {
    title: 'Robot Learning and Motion Planning',
    kicker: 'UT Dallas IRVL Lab | Research in progress',
    role: 'Research Assistant',
    summary:
      'Developing a video-conditioned generative pipeline that translates human demonstration videos into physically valid robot task-execution videos.',
    impact: 'Targeting publication by October 2026; 89.9% Neural Collision Field test accuracy with 5.4 ms median correction time.',
    accent: 'indigo',
    technologies: ['Wan2.2', 'CuRobo', 'B-Splines', 'Franka Panda', 'Neural Collision Fields'],
    evidence: [
      'Integrates a Wan2.2 backbone with CuRobo motion planning and B-spline optimization.',
      'Built a Neural Collision Field optimizer for the Franka Panda robot.',
      'Work is ongoing at the Intelligent Robotics and Vision Lab at UT Dallas.',
    ],
    links: [],
  },
  {
    title: 'PUF Authentication Research',
    kicker: 'Hardware security research',
    role: 'Researcher | Mentor: Dr. Seema Aarella',
    summary:
      'Studied targeted forgery risk in physically unclonable function authentication and designed defenses that preserve legitimate access accuracy.',
    impact: 'Published to IEEE HOST; reduced attacker forgery success below 0.51% while maintaining 99.094% legitimate accuracy.',
    accent: 'gold',
    technologies: ['Hardware Security', 'PUFs', 'Logistic Regression', 'Adversarial Evaluation', 'Python'],
    evidence: [
      'Designed a ridge-linear surrogate attacker with a 212x improvement over random flipping at a 12-bit budget.',
      'Measured a peak targeted-forgery rate of 20.03% across a five-seed visibility sweep.',
      'Built a logistic rejection gate to distinguish attack attempts from legitimate authentication.',
    ],
    links: [],
  },
];

export const researchHighlights = [
  ...featuredProjects.filter((project) =>
    ['NOVA', 'Sentiment Credibility LSTM', 'Arista Networks Equity Research'].includes(project.title),
  ),
  ...researchProjects,
];

export const experience: TimelineItem[] = [
  {
    title: 'Research Assistant',
    organization: 'Intelligent Robotics and Vision Lab, UT Dallas',
    period: 'Summer 2026 to Present',
    type: 'Research in Progress',
    summary:
      'Building video-conditioned robot-learning systems for physically valid task execution; targeting publication by October 2026.',
    bullets: [
      'Developed a Wan2.2-based pipeline that translates human demonstrations into robot task-execution videos.',
      'Integrated CuRobo motion planning with B-spline optimization for feasible robot trajectories.',
      'Built a Franka Panda Neural Collision Field optimizer with 89.9% test accuracy and 5.4 ms median correction time.',
    ],
    icon: Activity,
  },
  {
    title: 'Researcher',
    organization: 'PUF Authentication Research | Mentor: Dr. Seema Aarella',
    period: '2026',
    type: 'Published Research',
    summary: 'Published to IEEE HOST on targeted forgery risk and defensive authentication gating for PUF systems.',
    bullets: [
      'Designed a ridge-linear surrogate attacker that improved 212x over random flipping with a 12-bit budget.',
      'Reached a 20.03% peak targeted-forgery rate across a five-seed visibility sweep.',
      'Built a logistic rejection gate that reduced forgery success below 0.51% while maintaining 99.094% legitimate accuracy.',
    ],
    icon: Microscope,
  },
  {
    title: 'Co-Founder and Lead Data Engineer',
    organization: 'LISDSurvey',
    period: '2025 to Present',
    type: 'Product',
    summary: 'Published an iOS survey app for Leander ISD administrators and student feedback workflows.',
    bullets: [
      'Built secure survey collection, storage, and visualization using Swift, Firebase, and REST APIs.',
      'Designed real-time feedback features to improve student participation.',
      'Created a potential district-scale alternative to costly third-party tools.',
    ],
    icon: Code2,
  },
  {
    title: 'Co-Founder and Lead Backend Developer',
    organization: 'FinancialToolsAI',
    period: '2023 to Present',
    type: 'Product',
    summary: 'Built an AI finance platform with tools for stock analysis, DCF, Monte Carlo simulation, and Q&A.',
    bullets: [
      'Reached 20,000+ monthly users with beginner-friendly financial literacy tools.',
      'Featured in the Young Investors Society newsletter for two months.',
      'Used Python, Flask, Pandas, Matplotlib, Gemini API, and financial APIs.',
    ],
    icon: LineChart,
  },
  {
    title: 'Co-Founder and Lead Backend Developer',
    organization: 'QuantifyIQ',
    period: '2025',
    type: 'Quant Project',
    summary: 'Built portfolio optimization tools for advanced investors using modern quantitative methods.',
    bullets: [
      'Applied Modern Portfolio Theory to balance portfolio risk and return.',
      'Integrated Black-Litterman modeling for investor-view personalization.',
      'Added Monte Carlo forecasting and stress testing against historical crises.',
    ],
    icon: LineChart,
  },
  {
    title: 'Global Finalist and Student Board Member',
    organization: 'RHS Young Investors Society',
    period: '2023 to Present',
    type: 'Competition',
    summary: 'Produced a professional stock pitch and DCF model for Arista Networks.',
    bullets: [
      'First Rouse High School team to reach Top 24 globally from 650+ teams.',
      'Conducted 100+ hours of equity research and built a 10-year DCF model.',
      'Pitched investment thesis to hedge fund managers and industry judges in New York.',
    ],
    icon: Trophy,
  },
  {
    title: 'Co-Founder and Researcher',
    organization: 'RHS Science Fair',
    period: '2023 to Present',
    type: 'Research',
    summary: 'Developed AI neuroimaging research for early disease detection and biomarker inference.',
    bullets: [
      'Achieved 96.08% accuracy using a CNN approach on 2D MRI data.',
      'Selected for Round 2 judging at GARSEF for clinical potential.',
      'Published NOVA research through IEEE TechRxiv.',
    ],
    icon: Brain,
  },
  {
    title: 'Independent Researcher',
    organization: 'LSTM Stock Sentiment Research',
    period: '2024',
    type: 'Research',
    summary: 'Studied how sentiment source credibility changes stock price forecasting behavior.',
    bullets: [
      'Built a Python pipeline combining VADER sentiment, Yahoo Finance data, and multiple news sources.',
      'Compared real, Reddit, and AI-generated sentiment sources in LSTM forecasting.',
      'Published findings on IEEE TechRxiv.',
    ],
    icon: Activity,
  },
  {
    title: 'Machine Learning Intern',
    organization: 'Calimatic EdTech',
    period: '2024 to Present',
    type: 'Internship',
    summary: 'Built production AI workflows across chatbot, knowledge base, and internal automation systems.',
    bullets: [
      'Developed a chatbot with 1,000+ successful executions using Python and APIs.',
      'Improved knowledge-base efficiency by 70% through data cleanup and database management.',
      'Built 5+ n8n workflows for lead management, task tracking, website operations, and SEO.',
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: 'ML and Software Intern',
    organization: 'IQ-Consulting',
    period: '2024 to Present',
    type: 'Internship',
    summary: 'Automated internal workflows and prototyped enterprise search over documents and notes.',
    bullets: [
      'Automated 10+ workflows, saving the team about 5 hours per week.',
      'Structured 200+ records of engagement data for recruiting and project planning.',
      'Prototyped Azure Cognitive Search and LangChain integrations for 1,000+ internal documents.',
    ],
    icon: Code2,
  },
  {
    title: 'Co-Founder and Vice President',
    organization: 'RHS Science Olympiad',
    period: '2021 to Present',
    type: 'Leadership',
    summary: 'Helped build one of the schools strongest STEM communities while competing at the state level.',
    bullets: [
      'Grew the club to 150+ members and helped raise $6,000+.',
      'Advanced from UT Regionals to Texas State as a top-four school.',
      'Placed 6th in Cell Biology and earned multiple top-ten event placements.',
    ],
    icon: Rocket,
  },
  {
    title: 'Volunteer Tutor',
    organization: 'North South Foundation',
    period: '2022 to Present',
    type: 'Volunteer',
    summary: 'Taught advanced math and helped run local academic competitions for younger students.',
    bullets: [
      'Tutored 100+ students preparing for national math competitions.',
      'Designed three curricula and teaching material sets.',
      'Raised $4,000+ for scholarships for low-income students in India.',
    ],
    icon: Users,
  },
  {
    title: 'National Competitor',
    organization: 'RHS DECA',
    period: '2022 to Present',
    type: 'Competition',
    summary: 'Competed across business strategy, stock market simulation, and national virtual business events.',
    bullets: [
      'Placed 2nd nationally in both rounds of the Virtual Business Challenge for Fashion.',
      'Qualified twice for ICDC, with team placing 1st at ICDC.',
      'Built DECA prep tooling that supported 125+ members.',
    ],
    icon: Trophy,
  },
  {
    title: 'Varsity Competitor',
    organization: 'RHS Debate',
    period: '2022 to 2024',
    type: 'Competition',
    summary: 'Competed in Public Forum debate while mentoring newer debaters and building research discipline.',
    bullets: [
      'Won 1st place speaker recognition at the Vista Ridge TFA Public Forum tournament.',
      'Mentored 20+ novice debaters on case construction, rebuttals, and competitive confidence.',
      'Researched complex topics and prepared 30+ cases and 100+ rebuttal blocks.',
    ],
    icon: Trophy,
  },
  {
    title: 'Technical Director',
    organization: 'RHS National Technical Honor Society',
    period: '2023 to Present',
    type: 'Leadership',
    summary: 'Led technical operations, automated selection processes, and taught peers project skills.',
    bullets: [
      'Inducted 70+ members and helped drive 90% year-over-year chapter growth.',
      'Analyzed 1,000+ candidate applications with automated sorting workflows.',
      'Taught 50+ peers advanced algorithms and project development strategies.',
    ],
    icon: Code2,
  },
  {
    title: 'Software Member',
    organization: 'RHS FIRST Robotics Challenge 7064',
    period: '2022 to 2023',
    type: 'Robotics',
    summary: 'Programmed competition robot behavior and improved drive quality with control logic.',
    bullets: [
      'Implemented PID control to improve robot driving quality.',
      'Programmed robot functions in Java using robotics libraries.',
      'Debugged software under competition conditions with engineering teammates.',
    ],
    icon: Activity,
  },
];

export const techStack = [
  {
    label: 'AI and ML',
    icon: Brain,
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'LSTM', 'CNNs'],
  },
  {
    label: 'Software',
    icon: Code2,
    items: ['Python', 'TypeScript', 'React', 'Node.js', 'Flask', 'Swift', 'Firebase'],
  },
  {
    label: 'Finance',
    icon: LineChart,
    items: ['DCF', 'WACC', 'Monte Carlo', 'Black-Litterman', 'Limit Order Books', 'Risk Modeling'],
  },
  {
    label: 'Automation and Cloud',
    icon: ArrowUpRight,
    items: ['OpenAI API', 'LangChain', 'LlamaIndex', 'Azure', 'n8n', 'REST APIs'],
  },
];

export const education = {
  school: 'Rouse High School',
  location: 'Leander, TX',
  graduation: 'Class of 2026',
  stats: [
    { value: '4.0', label: 'Unweighted GPA', detail: '5.6 weighted GPA' },
    { value: '6 / 531', label: 'Class Rank', detail: 'Top 1.1% of class' },
    { value: '1540', label: 'SAT', detail: '780 Reading/Writing, 760 Math' },
    { value: '5', label: 'AP CSA Score', detail: 'AP Scholar with Distinction' },
  ],
  coursework: [
    'AP Computer Science A',
    'AP Calculus BC',
    'Multivariable Calculus',
    'AP Statistics',
    'AP Physics C',
    'AP Physics 1',
    'AP Seminar',
  ],
  honors: [
    'National Merit Commended Student',
    'AP Scholar with Distinction',
    'AP Capstone Diploma',
    'National Recognition Program',
    'Rural and Small-Town Recognition Award',
  ],
};

export const contactLinks: LinkItem[] = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'Resume', href: profile.resumeUrl },
];

export const quickSignals = [
  { label: 'Research', value: 'Medical imaging, LSTM forecasting', icon: Microscope },
  { label: 'Products', value: 'Finance tools, iOS survey platform', icon: Rocket },
  { label: 'Academics', value: '1540 SAT, Rank 6/531', icon: GraduationCap },
  { label: 'Contact', value: profile.email, icon: Mail },
];
