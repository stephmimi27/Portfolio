// Edit the portfolio content here. Both Book and Plain views use these exports.

export const profile = {
  name: 'Stephanie Cao',
  nameLower: 'stephanie',
  coverLabel: 'PORTFOLIO 2026',
  degree: 'Computer Science and Business',
  classLabel: 'UBC Sauder, Class of 2026',
  plainTagline: 'Computer Science and Business graduate, UBC Sauder (2026)',
  introduction:
    'Computer Science and Business graduate from UBC Sauder. I like building products where technical depth meets business thinking.',
  photoPlaceholder: '',
  email: 'stephmimi27@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/stephanie-mimi-cao/',
  github: 'https://github.com/stephmimi27',
};

export const about = {
  book: [
    'I studied Computer Science and Business, and I’m happiest where the two meet. I care about making technology that people actually trust and use.',
    'I’ve built an NLP compliance tool, worked on trade data automation in asset management, and researched AI agents and language models.',
  ],
  plain: [
    'I studied Computer Science and Business at UBC Sauder and focus on work where technical depth meets business thinking. I care about building technology that people trust and adopt.',
    'My experience includes an NLP compliance product at TELUS, trade data automation at RBC Global Asset Management, and AI agent and language model research at UBC.',
  ],
};

export const experience = [
  {
    id: 'ubc', organization: 'University of British Columbia', label: 'UBC', labelClass: 't1',
    role: 'Research Assistant – AI Agents & Model Development', dates: 'Jun 2025 – Jun 2026',
    bookDescription: 'Designed RAG agents and contextual NLP pipelines, evaluating model cost and latency.',
    plainBullets: [
      'Architected NLP embedding pipelines, selecting BERT over word2vec for context-aware models.',
      'Prepared data through CSV transformation, cleaning, summarization and key implementation.',
      'Designed RAG agents using OpenAI’s API and SDK tools to evaluate three agents’ cost and latency.',
      'Aligned international partners on model selection and the project’s technical roadmap for a planned publication.',
    ], patchIndex: 7,
  },
  {
    id: 'telus', organization: 'TELUS', label: 'TELUS', labelClass: 't3',
    role: 'AI Research and Development Technical Product Manager Intern', dates: 'Jan 2025 – Apr 2025',
    bookDescription: 'Built data tools and led an NLP compliance product for 28,000 employees.',
    plainBullets: [
      'Used interviews and A/B tests across 40+ business units to identify reporting bottlenecks and rule out three low-impact features.',
      'Designed a real-time dashboard pipeline that reduced charting work by 85%.',
      'Shipped a data visualization web app, with workshops and documentation that raised adoption by 30%.',
      'Defined an enterprise NLP compliance engine as product owner, scaling it to 28,000 employees for town halls.',
    ], patchIndex: 0,
  },
  {
    id: 'rbc-sdet', organization: 'RBC Global Asset Management', label: 'RBC GLOBAL ASSET MANAGEMENT', labelClass: 't2',
    role: 'Software Development Engineer in Test Intern', dates: 'May 2024 – Aug 2024',
    bookDescription: 'Improved test automation and security for an internal trading tool.',
    plainBullets: [
      'Authored a SQL guide for product managers working with more than 50 pages of test plans.',
      'Initiated regression test automation with Selenium and Python for an internal trading tool.',
      'Refactored over 30 core library functions, accelerating runtime by 35%.',
      'Implemented input validation and least-privilege access controls to prevent SQL injection.',
    ], patchIndex: 2,
  },
  {
    id: 'rbc-operations', organization: 'RBC Global Asset Management', label: 'RBC GLOBAL ASSET MANAGEMENT', labelClass: 't2',
    role: 'Technical Business Operations Analyst Intern', dates: 'Sept 2023 – Apr 2024',
    bookDescription: 'Managed trade automation and improved disaster recovery workflows.',
    plainBullets: [
      'Managed 200+ automation workflows, tracking failures and documenting fixes, with an average of 93 monthly solves.',
      'Directed real-time trade data flows using custom ActiveBatch workflows.',
      'Automated workload shifts to new clusters for disaster recovery, increasing efficiency by 70%.',
    ], patchIndex: 2,
  },
  {
    id: 'mosa', organization: 'Mosa', label: 'MOSA', labelClass: 't4',
    role: 'Software Engineering Intern', dates: 'Jan 2023 – Apr 2023',
    bookDescription: 'Built an e-commerce platform and prototypes for a retail website migration.',
    plainBullets: [
      'Built iterative prototypes with a team of three to improve the user experience of a retail website migration.',
      'Integrated third-party email campaign tools with marketing, increasing engagement by 1,000+ users.',
      'Delivered an e-commerce platform using JavaScript and Liquid, increasing online orders by 200%.',
    ], patchIndex: 3,
  },
];

export const projects = [
  {
    id: 'patentchecker', name: 'PatentChecker', label: 'AI / ML', labelClass: 't3',
    bookDescription: 'Analyzed patent similarity with BERT, OpenAI models and a nine-million-entry database.',
    plainDescription: 'Used GCP, BERT, Python, PyTorch, sklearn, Node.js and OpenAI APIs to analyze patent similarity and present quantitative and qualitative visualizations.', patchIndex: 7,
  },
  {
    id: 'campusexplorer', name: 'CampusExplorer', label: 'REACT / TYPESCRIPT', labelClass: 't2',
    bookDescription: 'A full-stack search and visualization app built to analyze 64,000+ queries.',
    plainDescription: 'Built a full-stack application using TypeScript, JavaScript, Express and React to analyze 64,000+ queries, with search and charting interfaces.', patchIndex: 1,
  },
  {
    id: 'smiskiwarehouse', name: 'SmiskiWarehouse', label: 'ORACLE SQL', labelClass: 't4',
    bookDescription: 'A warehouse database and React dashboard for real-time supply chain insights.',
    plainDescription: 'Designed an Oracle relational database for warehouse processes and integrated SQL queries into a React application with real-time supply chain dashboards.', patchIndex: 6,
  },
];

export const skills = [
  { category: 'AI/ML & Data', items: 'Python, R, PyTorch, sklearn, LLMs, Transformers, SQL, data pipelines, Tableau' },
  { category: 'Full-Stack & Design', items: 'Java, C++, C, JavaScript, TypeScript, React, Node.js, Express.js, HTML/CSS, Figma' },
  { category: 'Infrastructure & DevOps', items: 'GCP, Git, Jira, Confluence, Selenium, JUnit, Agile methodology' },
];

export const interests = [
  {
    title: 'Applied NLP and RAG',
    plainTitle: 'Applied NLP and retrieval-augmented generation',
    patchIndex: 7,
  },
  {
    title: 'Fintech',
    plainTitle: 'Fintech',
    patchIndex: 1,
  },
  {
    title: 'AI people can trust',
    plainTitle: 'Trustworthy AI',
    patchIndex: 5,
  },
];

export const books = [
  {
    title: 'The Anthropocene Reviewed',
    author: 'John Green',
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
  },
];

export const places = [
  {
    name: 'Vancouver',
    code: 'YVR',
    airport: 'YVR',
    frameStyle: {
      width: '140px',
      transform: 'rotate(-3deg)',
      marginTop: '0px',
      '--tc': '#e8d9a9',
    },
    pictureStyle: {
      background: 'linear-gradient(180deg,#7fb3c9 0%,#f3c6a5 70%,#f6dcc0 100%)',
    },
    sunStyle: {
      left: '62%',
      top: '16%',
      width: '22px',
      height: '22px',
      background: '#fff3d6',
      opacity: '.9',
    },
    skylineStyle: {
      background: '#2f4a45',
      clipPath: 'polygon(0 100%,0 55%,18% 20%,32% 50%,46% 28%,64% 60%,80% 25%,100% 55%,100% 100%)',
    },
  },
  {
    name: 'Seattle',
    code: 'SEA',
    airport: 'SEA',
    frameStyle: {
      width: '124px',
      transform: 'rotate(3deg)',
      marginTop: '20px',
      '--tc': '#cfdcc0',
    },
    pictureStyle: {
      background: 'linear-gradient(180deg,#9db6c8,#dfe6ea)',
    },
    sunStyle: {
      left: '14%',
      top: '14%',
      width: '26px',
      height: '26px',
      background: '#ffffff',
      opacity: '.9',
    },
    skylineStyle: {
      background: '#33444f',
      clipPath:
        'polygon(0 100%,0 80%,40% 80%,47% 40%,38% 35%,44% 28%,48% 28%,49% 0,51% 0,52% 28%,56% 28%,62% 35%,53% 40%,60% 80%,100% 80%,100% 100%)',
    },
  },
  {
    name: 'Toronto',
    code: 'YYZ',
    airport: 'YYZ',
    frameStyle: {
      width: '130px',
      transform: 'rotate(2deg)',
      marginTop: '6px',
      '--tc': '#f0c9bd',
    },
    pictureStyle: {
      background: 'linear-gradient(180deg,#5d8fc4,#bcd8ea)',
    },
    sunStyle: {
      left: '20%',
      top: '16%',
      width: '22px',
      height: '22px',
      background: '#fff7e0',
      opacity: '.9',
    },
    skylineStyle: {
      background: '#2b3a52',
      clipPath:
        'polygon(0 100%,0 75%,30% 75%,30% 65%,52% 65%,52% 45%,56% 45%,57% 0,59% 0,60% 45%,64% 45%,64% 65%,85% 65%,85% 72%,100% 72%,100% 100%)',
    },
  },
  {
    name: 'Montreal',
    code: 'YUL',
    airport: 'YUL',
    frameStyle: {
      width: '136px',
      transform: 'rotate(-2.5deg)',
      marginTop: '18px',
      '--tc': '#cfe3dc',
    },
    pictureStyle: {
      background: 'linear-gradient(180deg,#e59b4a,#f6d58a)',
    },
    sunStyle: {
      left: '68%',
      top: '14%',
      width: '26px',
      height: '26px',
      background: '#fff0c2',
      opacity: '.9',
    },
    skylineStyle: {
      background: '#5a3a2a',
      clipPath:
        'polygon(0 100%,0 70%,25% 70%,25% 55%,35% 55%,38% 38%,45% 28%,50% 25%,55% 28%,62% 38%,65% 55%,75% 55%,75% 70%,100% 70%,100% 100%)',
    },
  },
  {
    name: 'New York',
    code: 'NYC',
    airport: 'NYC',
    frameStyle: {
      width: '134px',
      transform: 'rotate(2.5deg)',
      marginTop: '0px',
      '--tc': '#cfdcc0',
    },
    pictureStyle: {
      background: 'linear-gradient(180deg,#5a4a8a,#f08a5d 75%,#f7c58b)',
    },
    sunStyle: {
      left: '18%',
      top: '34%',
      width: '30px',
      height: '30px',
      background: '#ffe3a8',
      opacity: '.9',
    },
    skylineStyle: {
      background: '#2a2540',
      clipPath:
        'polygon(0 100%,0 60%,8% 60%,8% 35%,16% 35%,16% 55%,24% 55%,24% 20%,32% 20%,32% 50%,42% 50%,42% 30%,50% 30%,50% 60%,60% 60%,60% 25%,68% 25%,68% 55%,78% 55%,78% 40%,88% 40%,88% 62%,100% 62%,100% 100%)',
    },
  },
  {
    name: 'Hong Kong',
    code: 'HKG 香港',
    airport: 'HKG',
    frameStyle: {
      width: '142px',
      transform: 'rotate(-3deg)',
      marginTop: '14px',
      '--tc': '#f0c9bd',
    },
    pictureStyle: {
      background: 'linear-gradient(180deg,#1f2a5c,#a24a8f 70%,#f08aa6)',
    },
    sunStyle: {
      left: '70%',
      top: '12%',
      width: '20px',
      height: '20px',
      background: '#ffe9f2',
      opacity: '.9',
    },
    skylineStyle: {
      background: '#17142e',
      clipPath:
        'polygon(0 100%,0 50%,6% 50%,6% 30%,12% 30%,12% 55%,18% 55%,18% 15%,25% 15%,25% 45%,32% 45%,32% 25%,40% 25%,40% 60%,48% 60%,48% 10%,55% 10%,55% 40%,63% 40%,63% 20%,70% 20%,70% 55%,78% 55%,78% 30%,86% 30%,86% 50%,94% 50%,94% 40%,100% 40%,100% 100%)',
    },
  },
  {
    name: 'Shanghai',
    code: 'PVG 上海',
    airport: 'PVG',
    frameStyle: {
      width: '126px',
      transform: 'rotate(3deg)',
      marginTop: '6px',
      '--tc': '#e8d9a9',
    },
    pictureStyle: {
      background: 'linear-gradient(180deg,#14234a,#3f6fb5 80%,#7fb3d9)',
    },
    sunStyle: {
      left: '16%',
      top: '14%',
      width: '18px',
      height: '18px',
      background: '#e8f1ff',
      opacity: '.9',
    },
    skylineStyle: {
      background: '#0f1a33',
      clipPath:
        'polygon(0 100%,0 80%,38% 80%,45% 62%,42% 55%,45% 48%,49% 45%,48% 30%,45% 26%,48% 20%,52% 20%,55% 26%,52% 30%,51% 45%,55% 48%,58% 55%,55% 62%,62% 80%,100% 80%,100% 100%)',
    },
  },
  {
    name: 'Xi’an',
    code: 'XIY 西安',
    airport: 'XIY',
    frameStyle: {
      width: '136px',
      transform: 'rotate(-2deg)',
      marginTop: '12px',
      '--tc': '#cfdcc0',
    },
    pictureStyle: {
      background: 'linear-gradient(180deg,#e3a45a,#f5d7a0)',
    },
    sunStyle: {
      left: '64%',
      top: '16%',
      width: '26px',
      height: '26px',
      background: '#fff3d0',
      opacity: '.9',
    },
    skylineStyle: {
      background: '#6a4630',
      clipPath:
        'polygon(0 100%,0 78%,6% 78%,6% 72%,12% 72%,12% 78%,18% 78%,18% 72%,24% 72%,24% 78%,36% 78%,36% 60%,40% 60%,40% 48%,44% 48%,44% 38%,50% 28%,56% 38%,56% 48%,60% 48%,60% 60%,64% 60%,64% 78%,76% 78%,76% 72%,82% 72%,82% 78%,88% 78%,88% 72%,94% 72%,94% 78%,100% 78%,100% 100%)',
    },
  },
];

export const education = {
  school: 'UBC Sauder School of Business',
  year: 'Completed May 2026',
  degree: 'Bachelor of Computer Science & Business',
  details: [
    'Key courses: Algorithms & Data Structures, Software Engineering, Relational Databases, Applied ML & AI.',
    'Awards: Beedie Luminaries ($44,000), UBC Centennial ($12,000), and first in class at HKUST with a full-ride scholarship.',
  ],
};
