export interface AcademicStat {
  label: string;
  value: string;
  description: string;
}

export interface APScore {
  subject: string;
  score: number | string;
}

export interface Honor {
  title: string;
  year?: string;
  type: 'academic' | 'recognition';
}

export interface EducationInfo {
  school: string;
  location: string;
  graduationYear: string;
  stats: AcademicStat[];
  coursework: string[];
  apScores: APScore[];
  honors: Honor[];
}

export const educationInfo: EducationInfo = {
  school: 'Rouse High School',
  location: 'Leander, TX',
  graduationYear: 'Class of 2026',
  stats: [
    { label: 'GPA (Unweighted)', value: '4.0', description: 'On a 4.0 scale' },
    { label: 'GPA (Weighted)', value: '5.6', description: 'On a 5.0 scale' },
    { label: 'Class Rank', value: '6 / 531', description: 'Top 1.1% of class' },
    { label: 'SAT Score', value: '1540', description: '780 R/W · 760 Math' },
  ],
  coursework: [
    'AP Computer Science A',
    'AP Calculus BC',
    'Multivariable Calculus',
    'AP Statistics',
    'AP Physics 1',
    'AP Physics C',
    'AP Human Geography',
    'AP World History',
    'AP Seminar',
    'AP Capstone',
  ],
  apScores: [
    { subject: 'AP Computer Science A', score: 5 },
    { subject: 'AP Human Geography', score: 5 },
    { subject: 'AP World History', score: 5 },
    { subject: 'AP Seminar', score: 4 },
    { subject: 'AP Physics 1', score: 4 },
  ],
  honors: [
    { title: 'National Merit Commended Student', year: '2025', type: 'academic' },
    { title: 'AP Scholar with Distinction', year: '2024', type: 'academic' },
    { title: 'AP Capstone Diploma', year: '2024', type: 'academic' },
    { title: 'National Recognition Program', year: '2024', type: 'recognition' },
    { title: 'Rural and Small-Town Recognition Award', year: '2023', type: 'recognition' },
  ],
};
