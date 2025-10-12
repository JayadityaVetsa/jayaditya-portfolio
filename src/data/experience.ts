export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  type: 'internship' | 'volunteer' | 'competition' | 'leadership' | 'research' | 'entrepreneurship';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  location: string;
  hoursPerWeek: number;
  totalWeeks: number;
  featured: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'calimatic-edtech',
    title: 'Machine Learning Intern',
    company: 'Calimatic EdTech',
    period: '2024 - Present',
    type: 'internship',
    description: 'Built enterprise-grade AI chatbot with 1000+ successful executions, improved efficiency by 70%',
    responsibilities: [
      'Developed and deployed a chatbot with 1,000+ successful executions using Python and APIs',
      'Optimized the company knowledge base through data analysis and database management, improving efficiency by 70%',
      'Leveraged advanced tools like OpenAI API, LangChain, Azure, LlamaIndex to design scalable AI solutions',
      'Built 5+ automated workflows in n8n, streamlining lead management, task tracking, website development, and SEO processes'
    ],
    achievements: [
      '1000+ successful chatbot executions',
      '70% efficiency improvement',
      '5+ automated workflows built',
      'Production deployment at Calimatic EdTech'
    ],
    technologies: ['Python', 'OpenAI API', 'LangChain', 'Azure', 'LlamaIndex', 'Database Management', 'n8n'],
    location: 'Remote',
    hoursPerWeek: 25,
    totalWeeks: 10,
    featured: true,
  },
  {
    id: 'iq-consulting',
    title: 'ML & Software Intern',
    company: 'IQ-Consulting (IQC-IT)',
    period: '2024 - Present',
    type: 'internship',
    description: 'Automated 10+ workflows, structured 200+ records, prototyped search integrations',
    responsibilities: [
      'Automated 10+ internal workflows with n8n, reducing repetitive tasks and saving the team ~5 hrs/week',
      'Built dashboards and structured 200+ records of historical engagement data, improving accessibility for recruiting and project planning',
      'Prototyped search integrations with Azure Cognitive Search, LangChain, and LLaMA, enabling faster navigation of 1,000+ internal documents',
      'Contributed to technical documentation and team code reviews, emphasizing lightweight, maintainable solutions'
    ],
    achievements: [
      '10+ automated workflows',
      'Saving ~5 hrs/week for the team',
      '1,000+ internal documents indexed',
      '200+ records structured'
    ],
    technologies: ['n8n', 'Azure Cognitive Search', 'LangChain', 'LLaMA', 'Python', 'Dashboard Development'],
    location: 'Remote',
    hoursPerWeek: 10,
    totalWeeks: 15,
    featured: true,
  },
  {
    id: 'north-south-foundation',
    title: 'Volunteer',
    company: 'North South Foundation',
    period: '2022 - Present',
    type: 'volunteer',
    description: 'Teaching 100+ students advanced mathematics, raised $4,000+ for scholarships',
    responsibilities: [
      'Tutored 100+ students in advanced math, helping them improve academically and prepare for national competitions',
      'Designed 3 curricula and teaching materials tailored to elementary students\' learning needs',
      'Organized and judged local spelling and math competitions, supporting hands-on student engagement',
      'Raised $4,000+ through local tutorials, funding scholarships for low-income students in India'
    ],
    achievements: [
      'Taught 100+ students successfully',
      'Raised $4,000+ for scholarships sent to India',
      'Designed 3 comprehensive curricula',
      'Organized multiple local competitions'
    ],
    technologies: ['Educational Technology', 'Curriculum Development', 'Teaching Methods'],
    location: 'Leander, TX',
    hoursPerWeek: 2,
    totalWeeks: 75,
    featured: true,
  },
  {
    id: 'financial-tools-ai-founder',
    title: 'Co-Founder & Lead Backend Developer',
    company: 'FinancialToolsAI',
    period: '2023 - Present',
    type: 'entrepreneurship',
    description: 'Created AI-powered financial literacy platform serving 20,000+ monthly users',
    responsibilities: [
      'Built free finance website with 20,000+ monthly users, offering stock analysis, company summaries, and investment simulations',
      'Improved financial literacy for 50+ teens, helping beginners make smarter money decisions',
      'Featured in the Young Investors Society newsletter (12,000+ students reached) for 2 months',
      'Designed and maintained platform using Python, Flask, APIs, Pandas to make professional-level insights accessible'
    ],
    achievements: [
      '20,000+ monthly visits',
      'Featured in YIS Newsletter (12,000+ students)',
      'Improved financial literacy for 50+ teens',
      'Successful AI integration across multiple financial tools'
    ],
    technologies: ['Python', 'Gemini API', 'MatPlotLib', 'Pandas', 'Flask', 'HTML/CSS/Bootstrap', 'Financial APIs'],
    location: 'Remote',
    hoursPerWeek: 10,
    totalWeeks: 8,
    featured: true,
  },
  {
    id: 'rhs-young-investors',
    title: 'Global Finalist & Student Board Member',
    company: 'RHS Young Investors Society (YIS)',
    period: '2023 - Present',
    type: 'competition',
    description: 'First RHS team to reach Top 24/650+ globally at Global Youth Investment Summit',
    responsibilities: [
      'Conducted 100+ hrs of equity research on Arista Networks, producing a professional stock pitch report',
      'Built a 10-year Discounted Cash Flow (DCF) model with revenue projections, WACC, and multi-scenario analysis',
      'Pitched investment thesis to NYC hedge fund managers and industry judges, receiving recognition for depth of analysis',
      'Served on YIS Student Board contributing to organization leadership'
    ],
    achievements: [
      'First RHS team to reach Top 24/650+ globally',
      'Advanced to 2025 Global Youth Investment Summit finals in NYC',
      'Pitched to NYC hedge fund managers',
      'Comprehensive scenario analysis across bull, base, and bear cases'
    ],
    technologies: ['Financial Modeling', 'DCF Analysis', 'Excel', 'Investment Research', 'WACC Calculation'],
    location: 'Leander, TX',
    hoursPerWeek: 10,
    totalWeeks: 12,
    featured: true,
  },
  {
    id: 'rhs-science-olympiad',
    title: 'Co-Founder and Vice President',
    company: 'RHS Science Olympiad',
    period: '2021 - Present',
    type: 'leadership',
    description: 'Co-founded and grew club to 150+ members, raised $6,000+, State Qualifier',
    responsibilities: [
      'Co-founded and grew club to 150+ members, raising $6,000+ and worked with the team for 4 years',
      'Advanced from UT Regionals → Texas State (Top 4 school); personally placed 6th in Cell Biology',
      'Led the club for 3 years by managing attendance, organizing club reports, helping form teams, assigning events',
      'Maintained financial records and earned multiple Top 10 event placements'
    ],
    achievements: [
      'State qualifier - Advanced from UT Regionals to Texas State (Top 4)',
      'Grew club to 150+ members',
      'Raised $6,000+ for club activities',
      'Placed 6th in Cell Biology, multiple Top 10 placements'
    ],
    technologies: ['Leadership', 'Team Management', 'Event Organization', 'Financial Management', 'Fundraising'],
    location: 'Leander, TX',
    hoursPerWeek: 5,
    totalWeeks: 140,
    featured: true,
  },
  {
    id: 'rhs-deca',
    title: 'Competitor',
    company: 'RHS DECA',
    period: '2022 - Present',
    type: 'competition',
    description: '2nd place nationally in Virtual Business Challenge',
    responsibilities: [
      'Competed in DECA\'s Virtual Business Challenge (Fashion)',
      'Presented innovative business ideas to entrepreneur prompts',
      'Developed comprehensive business strategies',
      'Prepared for and competed at state and national levels'
    ],
    achievements: [
      '2nd place nationally in Virtual Business Challenge (Fashion)',
      'Top 40% of 16,000+ members in Texas DECA',
      '2x ICDC qualifier, team won 1st at ICDC',
      '2x DECA State Qualifier'
    ],
    technologies: ['Business Strategy', 'Entrepreneurship', 'Presentation Skills', 'Market Analysis'],
    location: 'Leander, TX',
    hoursPerWeek: 5,
    totalWeeks: 120,
    featured: false,
  },
  {
    id: 'rhs-debate',
    title: 'Varsity Competitor',
    company: 'RHS Debate Team',
    period: '2022 - 2023',
    type: 'competition',
    description: 'Best Speaker at Vista Ridge 2023 tournament',
    responsibilities: [
      'Competed in Public Forum debate tournaments',
      'Researched complex topics and constructed effective cases',
      'Developed refutation skills and debate strategies',
      'Mentored 20+ novice debaters in Public Forum'
    ],
    achievements: [
      'Best Speaker at Vista Ridge 2023 Public Forum tournament (1st place)',
      'Mentored 20+ novice debaters successfully',
      'Developed 10+ well-structured cases for winning debate rounds'
    ],
    technologies: ['Research', 'Critical Thinking', 'Public Speaking', 'Argumentation'],
    location: 'Leander, TX',
    hoursPerWeek: 5,
    totalWeeks: 50,
    featured: false,
  },
  {
    id: 'rhs-science-fair',
    title: 'Co-Founder & Researcher',
    company: 'RHS Science Fair',
    period: '2023 - Present',
    type: 'research',
    description: 'NOVA: AI-driven neuroimaging achieving 96.08% accuracy in disease detection',
    responsibilities: [
      'Developed AI-driven gray matter segmentation model to detect neurodegenerative disease progression using MRI/fMRI',
      '96.08% accuracy in identifying neurodegenerative disease, achieved by novel implementation of CNN on 2D MRI',
      'Conducted deep learning-based spatial and temporal analysis for early-stage Parkinson\'s and paralysis indicators',
      'Published preprint "NOVA: A Deep Learning-Based Tool for Early Detection" in TechRxiv (IEEE preprint server)'
    ],
    achievements: [
      'Selected for Round 2 Judging at GARSEF',
      '96.08% accuracy in disease detection',
      'Published in IEEE TechRxiv',
      'Recognized for innovative methodology and clinical potential'
    ],
    technologies: ['Deep Learning', 'Medical Imaging', 'Python', 'TensorFlow', 'MRI/fMRI Analysis', 'CNNs'],
    location: 'Leander, TX',
    hoursPerWeek: 8,
    totalWeeks: 20,
    featured: true,
  },
];

export const experienceTypes = [
  'All',
  'Internship',
  'Volunteer',
  'Competition',
  'Leadership',
  'Research',
];

export const getFeaturedExperiences = () => experiences.filter(exp => exp.featured);
export const getExperiencesByType = (type: string) => 
  type === 'All' ? experiences : experiences.filter(exp => exp.type === type.toLowerCase());
export const getExperienceById = (id: string) => experiences.find(exp => exp.id === id);

// Timeline data for visual representation
export const timelineData = experiences
  .sort((a, b) => {
    // Simple sorting by period string (newer first)
    if (a.period.includes('Present')) return -1;
    if (b.period.includes('Present')) return 1;
    return b.period.localeCompare(a.period);
  })
  .map(exp => ({
    id: exp.id,
    title: exp.title,
    company: exp.company,
    period: exp.period,
    type: exp.type,
    featured: exp.featured,
  })); 