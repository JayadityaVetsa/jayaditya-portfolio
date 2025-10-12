export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    website?: string;
  };
  resumeUrl: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number; // 1-5
  yearsOfExperience: number;
  featured: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  type: 'academic' | 'competition' | 'recognition' | 'publication';
  featured: boolean;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
  animated: boolean;
}

export const personalInfo: PersonalInfo = {
  name: 'Jayaditya Vetsa',
  title: 'Student Researcher | ML Developer | Quant Finance Enthusiast',
  subtitle: 'Building intelligent systems at the intersection of finance, AI, and curiosity.',
  description: `I'm a passionate high school senior (Class of 2026) at Rouse High School with an unrelenting drive to build impactful technology at the intersection of artificial intelligence, quantitative finance, and neuroscience. My journey spans from developing AI models for neurological diagnosis to building financial analysis platforms that serve thousands of users.

As a co-founder, intern, and researcher, I've learned that the most exciting innovations happen when different fields collide. Whether I'm building chatbots with 1000+ executions, conducting 100+ hours of equity research for global competitions, or developing deep learning models for neurodegenerative disease detection, I'm always pushing the boundaries of what's possible.

When I'm not coding or researching, you can find me mentoring 100+ students, leading teams of 150+ members, or competing in business and finance competitions. I believe in using technology not just to solve problems, but to create opportunities for others to succeed.`,
  email: 'vetsajayaditya@gmail.com',
  phone: '737-230-0202',
  location: 'Leander, TX',
  socialLinks: {
    github: 'https://github.com/JayadityaVetsa',
    linkedin: 'https://www.linkedin.com/in/jayaditya-vetsa-21b20b285',
    twitter: 'https://twitter.com/jayaditya_vetsa',
    website: 'https://financetoolsai.pythonanywhere.com'
  },
  resumeUrl: '/resume/jayaditya-vetsa-resume.pdf'
};

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming', level: 5, yearsOfExperience: 4, featured: true },
  { name: 'JavaScript', category: 'Programming', level: 4, yearsOfExperience: 3, featured: true },
  { name: 'TypeScript', category: 'Programming', level: 4, yearsOfExperience: 2, featured: true },
  { name: 'Swift', category: 'Programming', level: 3, yearsOfExperience: 1, featured: false },
  { name: 'Java', category: 'Programming', level: 3, yearsOfExperience: 2, featured: false },
  { name: 'C++', category: 'Programming', level: 3, yearsOfExperience: 1, featured: false },

  // AI/ML Technologies
  { name: 'TensorFlow', category: 'AI/ML', level: 5, yearsOfExperience: 3, featured: true },
  { name: 'PyTorch', category: 'AI/ML', level: 4, yearsOfExperience: 2, featured: true },
  { name: 'Scikit-learn', category: 'AI/ML', level: 4, yearsOfExperience: 3, featured: true },
  { name: 'OpenCV', category: 'AI/ML', level: 4, yearsOfExperience: 2, featured: true },
  { name: 'Pandas', category: 'AI/ML', level: 5, yearsOfExperience: 3, featured: true },
  { name: 'NumPy', category: 'AI/ML', level: 5, yearsOfExperience: 3, featured: true },
  { name: 'Matplotlib', category: 'AI/ML', level: 4, yearsOfExperience: 3, featured: false },
  { name: 'Seaborn', category: 'AI/ML', level: 4, yearsOfExperience: 2, featured: false },

  // Web Technologies
  { name: 'React', category: 'Web Development', level: 4, yearsOfExperience: 2, featured: true },
  { name: 'Next.js', category: 'Web Development', level: 3, yearsOfExperience: 1, featured: false },
  { name: 'Flask', category: 'Web Development', level: 4, yearsOfExperience: 2, featured: true },
  { name: 'FastAPI', category: 'Web Development', level: 3, yearsOfExperience: 1, featured: false },
  { name: 'HTML/CSS', category: 'Web Development', level: 5, yearsOfExperience: 3, featured: true },
  { name: 'TailwindCSS', category: 'Web Development', level: 4, yearsOfExperience: 2, featured: true },

  // Database & Cloud
  { name: 'PostgreSQL', category: 'Database', level: 3, yearsOfExperience: 1, featured: false },
  { name: 'MongoDB', category: 'Database', level: 3, yearsOfExperience: 1, featured: false },
  { name: 'Firebase', category: 'Database', level: 4, yearsOfExperience: 2, featured: true },
  { name: 'Azure', category: 'Cloud', level: 3, yearsOfExperience: 1, featured: false },
  { name: 'AWS', category: 'Cloud', level: 3, yearsOfExperience: 1, featured: false },

  // Finance & Quantitative
  { name: 'Financial Modeling', category: 'Finance', level: 5, yearsOfExperience: 2, featured: true },
  { name: 'Quantitative Analysis', category: 'Finance', level: 4, yearsOfExperience: 2, featured: true },
  { name: 'Risk Management', category: 'Finance', level: 4, yearsOfExperience: 2, featured: true },
  { name: 'Bloomberg Terminal', category: 'Finance', level: 3, yearsOfExperience: 1, featured: false },

  // Tools & APIs
  { name: 'Git', category: 'Tools', level: 4, yearsOfExperience: 3, featured: true },
  { name: 'Docker', category: 'Tools', level: 3, yearsOfExperience: 1, featured: false },
  { name: 'OpenAI API', category: 'APIs', level: 4, yearsOfExperience: 2, featured: true },
  { name: 'LangChain', category: 'APIs', level: 4, yearsOfExperience: 1, featured: true },
  { name: 'LlamaIndex', category: 'APIs', level: 3, yearsOfExperience: 1, featured: false },
];

export const achievements: Achievement[] = [
  {
    title: 'Commended Student - National Merit Scholarship',
    description: 'National Merit Scholarship Program Recognition',
    date: '2024-09',
    type: 'academic',
    featured: true,
  },
  {
    title: 'YIS Global Pitch Competition - Top 24',
    description: 'Selected as Top 24 finalist globally from 650+ teams across 20+ countries',
    date: '2024-10',
    type: 'competition',
    featured: true,
  },
  {
    title: 'DECA National - 2nd Place',
    description: '2nd place nationally in Virtual Business Challenge (Fashion)',
    date: '2024-04',
    type: 'competition',
    featured: true,
  },
  {
    title: 'DECA ICDC Qualifier',
    description: '2x ICDC qualifier, team won 1st place at ICDC',
    date: '2024-04',
    type: 'competition',
    featured: true,
  },
  {
    title: 'GARSEF Second Round Selection',
    description: 'Advanced to Round 2 Judging for innovative neuroimaging research',
    date: '2024-02',
    type: 'competition',
    featured: true,
  },
  {
    title: 'AP Scholar with Distinction',
    description: 'Achieved distinction on multiple AP examinations',
    date: '2023-07',
    type: 'academic',
    featured: false,
  },
  {
    title: 'AP Capstone Diploma',
    description: 'Completed rigorous AP Capstone program',
    date: '2024-05',
    type: 'academic',
    featured: false,
  },
  {
    title: 'Science Olympiad State Qualifier',
    description: 'Led team to Texas State, placed 6th in Cell Biology at UT',
    date: '2023-03',
    type: 'competition',
    featured: true,
  },
  {
    title: 'Young Investor Society Newsletter Feature',
    description: 'Featured for 2 months on YIS Newsletter resources page',
    date: '2024-06',
    type: 'recognition',
    featured: false,
  },
];

export const stats: Stat[] = [
  {
    label: 'Monthly Users',
    value: '20K+',
    description: 'FinancialToolsAI platform',
    animated: true,
  },
  {
    label: 'Students Taught',
    value: '100+',
    description: 'Through NSF volunteering',
    animated: true,
  },
  {
    label: 'Published Preprints',
    value: '2',
    description: 'IEEE TechRxiv',
    animated: true,
  },
  {
    label: 'Team Members',
    value: '150+',
    description: 'Led in Science Olympiad',
    animated: true,
  },
  {
    label: 'Years Coding',
    value: '4+',
    description: 'Started programming in 2020',
    animated: true,
  },
  {
    label: 'Projects Built',
    value: '10+',
    description: 'Major projects completed',
    animated: true,
  },
];

export const skillCategories = [
  'All',
  'Programming',
  'AI/ML',
  'Web Development',
  'Database',
  'Cloud',
  'Finance',
  'Tools',
  'APIs',
];

export const getFeaturedSkills = () => skills.filter(skill => skill.featured);
export const getSkillsByCategory = (category: string) => 
  category === 'All' ? skills : skills.filter(skill => skill.category === category);
export const getFeaturedAchievements = () => achievements.filter(achievement => achievement.featured);
export const getAchievementsByType = (type: string) => 
  type === 'All' ? achievements : achievements.filter(achievement => achievement.type === type); 