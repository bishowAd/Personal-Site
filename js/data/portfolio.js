/**
 * portfolio.js — Single source of truth for all portfolio content.
 *
 * To update the site, edit this file only.
 * Components read from here and re-render automatically.
 */

export const DATA = {
  /* ── Personal ─────────────────────────────── */
  personal: {
    name:     'Bishow Adhikari',
    nameShort:'Bishow',
    role:     'Data Scientist & UI Designer',
    email:    'bishow.adhikari@selu.edu',
    phone:    '(985) 956-9976',
    location: 'Hammond, Louisiana',
    linkedin: 'https://linkedin.com/in/bishowadhikari',
    github:   'https://github.com/bishowAd',
    photo:    'profile-photo.JPG',
    university: 'Southeastern Louisiana University',
    graduation: 'Dec 2027',
    gpa:      '3.77',
    statusBadge: 'Open to internships & freelance work',
  },

  /* ── Hero typewriter phrases ──────────────── */
  phrases: [
    'analyze data.',
    'design interfaces.',
    'build products.',
    'find the signal in the noise.',
    'turn ideas into reality.',
  ],

  /* ── Hero stats ───────────────────────────── */
  stats: [
    { value: '3.77', label: 'GPA' },
    { value: '4×',   label: "Dean's List" },
    { value: '50+',  label: 'Students/wk' },
    { value: '3+',   label: 'Projects' },
  ],

  /* ── Role chips (hero photo) ──────────────── */
  roles: [
    { icon: '📊', label: 'Data Scientist',  bg: 'rgba(99,102,241,0.2)' },
    { icon: '🎨', label: 'UI Designer',     bg: 'rgba(168,85,247,0.2)' },
    { icon: '💻', label: 'Full-Stack Dev',  bg: 'rgba(244,114,182,0.2)' },
  ],

  /* ── About section ────────────────────────── */
  about: {
    headline:    'Not your average CS student',
    paragraphs: [
      `I'm a Computer Science student at Southeastern Louisiana University with a Data Science concentration. My interest in data started with a single book — <em class="not-italic font-semibold text-gray-800">"The Art of Statistics: How to Learn from Data"</em> — and hasn't slowed down since.`,
      `By day I tutor up to 50 students a week in Algebra, Calculus, and Statistics. That experience taught me one invaluable skill: taking something genuinely complex and making it crystal clear. I bring that same clarity to every analysis, design decision, and line of code I write.`,
      `Outside class I'm active in ACM, the International Student Union, and the Nepalese Student Association — volunteering to help new students settle in. Community matters to me, and that shows up in every team I join.`,
    ],
    facts: [
      { icon: '📍', text: 'Hammond, Louisiana' },
      { icon: '🎓', text: 'SLU · Dec 2027' },
      { icon: '📊', text: '3.77 GPA' },
      { icon: '🏆', text: "Dean's List × 4" },
      { icon: '🥉', text: 'Integration Bee 2nd Runner-Up' },
    ],
  },

  /* ── Services ─────────────────────────────── */
  services: [
    {
      icon:   '📈',
      title:  'Data Science & ML',
      desc:   'I dig into messy datasets and surface the patterns that matter — from exploratory analysis to clustering models — and make data tell a clear story.',
      tags:   ['Python', 'Pandas', 'K-Means', 'EDA'],
      accent: 'indigo',
    },
    {
      icon:   '🔍',
      title:  'Data Analysis & BI',
      desc:   'Hand me a chaotic spreadsheet — I\'ll give you a dashboard full of clarity. I turn business data into insights that drive real, confident decisions.',
      tags:   ['SQL', 'Seaborn', 'Matplotlib', 'BI Dashboards'],
      accent: 'purple',
    },
    {
      icon:   '🎨',
      title:  'UI Design & Frontend',
      desc:   'Interfaces that feel as good as they look. I design with real users in mind and build with clean code — responsive, polished, no handoff friction.',
      tags:   ['React', 'TypeScript', 'Tailwind'],
      accent: 'pink',
    },
  ],

  /* ── Skills ───────────────────────────────── */
  skills: [
    {
      icon:   '💻',
      title:  'Languages',
      bg:     'bg-indigo-100',
      items:  ['Python', 'JavaScript', 'Java', 'Kotlin', 'C++', 'C#', 'SQL'],
    },
    {
      icon:   '📊',
      title:  'Data Science',
      bg:     'bg-purple-100',
      items:  ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'K-Means', 'Time Series'],
    },
    {
      icon:   '🗄️',
      title:  'Databases',
      bg:     'bg-pink-100',
      items:  ['SQL Server', 'MySQL', 'Firebase', 'MS Access'],
    },
    {
      icon:   '🛠️',
      title:  'Tools & Frameworks',
      bg:     'bg-emerald-100',
      items:  ['React.js', 'Node.js', '.NET', 'Jupyter', 'Git / GitHub', 'VS Code'],
    },
  ],

  /* ── Projects ─────────────────────────────── */
  projects: [
    {
      headerClass:   'ph-1',
      emoji:         '📊',
      categoryLabel: 'Data Science · ML',
      categoryColor: 'text-indigo-600',
      year:          '2025',
      title:         'Student Exam Data — Visual Exploration',
      desc:          'Full EDA on student performance: study hours, sleep, attendance, and outcomes. Identified hidden performance clusters and prepped data for unsupervised ML — not just charts, but a real story about how students succeed.',
      tags:          ['Python', 'Pandas', 'K-Means', 'Seaborn'],
      tagClass:      'bg-indigo-50 text-indigo-700',
      link:          'https://github.com/bishowAd/Cluster-Analysis',
    },
    {
      headerClass:   'ph-2',
      emoji:         '₿',
      categoryLabel: 'Time Series · Finance',
      categoryColor: 'text-pink-600',
      year:          '2025',
      title:         'Bitcoin Seasonal Trend Analysis',
      desc:          'Dug into years of Bitcoin price data to expose the calendar patterns traders rarely talk about — monthly cycles, weekend dips, holiday swings. Clear visualizations that make the volatility readable.',
      tags:          ['Python', 'Matplotlib', 'Time Series', 'NumPy'],
      tagClass:      'bg-pink-50 text-pink-700',
      link:          'https://github.com/bishowAd/CS340_S25_Leo',
    },
    {
      headerClass:   'ph-3',
      emoji:         '✅',
      categoryLabel: 'Full-Stack · SaaS',
      categoryColor: 'text-emerald-600',
      year:          '2025',
      title:         'TaskFlow — Collaborative Task Manager',
      desc:          'Designed and shipped a full-stack task management app from scratch — React/TypeScript frontend, C# backend, MySQL, full auth. Built in Agile sprints. Every feature shipped, not just prototyped.',
      tags:          ['React', 'TypeScript', 'C# / .NET', 'MySQL'],
      tagClass:      'bg-emerald-50 text-emerald-700',
      link:          'https://github.com/bishowAd/TaskFlow',
    },
  ],

  /* ── Experience ───────────────────────────── */
  experience: [
    {
      title:   'Mathematics Tutor',
      company: 'Department of Mathematics · Southeastern Louisiana University',
      period:  'Aug 2024 – Present',
      bullets: [
        'Deliver one-on-one and group sessions for up to <strong class="font-semibold text-gray-800">50 students per week</strong> covering Algebra, Calculus, and Statistics — building real understanding, not just getting through homework.',
        'Adapt explanations on the fly for different learning styles — the same skill that makes my data presentations land for both technical and non-technical audiences.',
        'Coach structured problem-solving strategies that lead to measurable improvements in performance and student confidence.',
        'Maintain detailed progress records and tailor each session to the student\'s specific gaps and needs.',
      ],
    },
  ],

  /* ── Honors ───────────────────────────────── */
  honors: [
    { icon: '🏆', bg: 'bg-indigo-50', title: 'Academic Honors',    desc: 'Honors Scholarship (4 semesters) · Dean\'s List (4 semesters) · SGA Scholarship' },
    { icon: '🥉', bg: 'bg-purple-50', title: 'Integration Bee',    desc: '2nd Runner-Up, 16th Annual Integration Bee Competition' },
    { icon: '💻', bg: 'bg-cyan-50',   title: 'ACM Member',         desc: 'Active member of the Association for Computing Machinery' },
    { icon: '🌍', bg: 'bg-emerald-50',title: 'Student Leadership', desc: 'International Student Union & Nepalese Student Association member' },
    { icon: '🤝', bg: 'bg-yellow-50', title: 'Community Service',  desc: 'Volunteer for student orientation, campus tours, and university events' },
    { icon: '📚', bg: 'bg-pink-50',   title: 'Relevant Coursework',desc: 'Data Mining · Data Analytics & BI · Data Structures & Algorithms' },
  ],
};
