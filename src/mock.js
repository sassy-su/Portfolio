// Portfolio data extracted from https://portfolio-builder-905.preview.emergentagent.com/
export const personalInfo = {
  name: "Shashank",
  firstName: "Shashank",
  title: "Full Stack Developer",
  tagline:
    "Engineering ideas into intuitive products - from real-time platforms to AI-driven tools, built with precision and purpose.",
  profileInitial: "S",
  email: "736798765",
  phone: "+91 7367983765",
  location: "Bengaluru, Karnataka",
  github: "https://github.com/sassy-su/",
  linkedin: "https://linkedin.com/in/shashank/",
  resumeUrl: "#",
};

export const aboutInfo = {
  intro:
    "I'm a Computer Science Engineering student at MVJ College of Engineering, Bengaluru, with a passion for building full-stack applications that blend performance with thoughtful design.",
  body:
    "My work spans real-time commerce platforms, AI-driven health tools, and data-heavy analytics dashboards. I enjoy taking ideas from whiteboard to deploy - writing clean code, integrating APIs, and obsessing over every detail along the way.",
  stats: [
    { value: "3+", label: "Projects Shipped" },
    { value: "8.2", label: "Current CGPA" },
    { value: "15+", label: "Technologies" },
    { value: "3+", label: "Years Learning" },
  ],
  education: [
    {
      degree: "B.E. Computer Science",
      school: "MVJ College of Engineering",
      duration: "2022 - 2026",
      detail: "CGPA: 8.2",
    },
    {
      degree: "Intermediate",
      school: "Kendriya Vidyalaya, Muzaffarpur",
      duration: "2020 - 2021",
      detail: "Science Stream",
    },
    {
      degree: "High School",
      school: "Kendriya Vidyalaya, Muzaffarpur",
      duration: "2018 - 2019",
      detail: "CBSE Board",
    },
  ],
};

export const skills = {
  Languages: ["Java", "Python", "C++", "JavaScript", "HTML", "SQL"],
  Frontend: ["React.js", "Next.js", "Vue.js", "Tailwind CSS"],
  "Backend & Databases": ["Node.js", "Flask", "MongoDB", "MySQL", "PostgreSQL"],
  "Core Concepts": [
    "Data Structures & Algorithms",
    "OOP",
    "Computer Networks",
    "DBMS",
  ],
  "Tools & Other": ["Git", "GitHub", "Machine Learning", "NLP", "REST APIs"],
};

export const projects = [
  {
    id: 1,
    title: "Real-Time E-commerce Platform",
    description:
      "Designed and developed a real-time e-commerce system with dynamic inventory updates, interactive product listings, and a responsive UI. Optimized workflows to enhance user engagement across devices.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Socket.io"],
    date: "2024",
    category: "Full Stack",
    accent: "emerald",
    url: "#",
  },
  {
    id: 2,
    title: "AI Health Assistant",
    description:
      "Built an AI-powered health assistant that analyzes user symptoms and suggests recommendations. Leveraged NLP and ML classification with a Flask + MySQL backend for secure data handling.",
    tech: ["Python", "Flask", "NLP", "Machine Learning", "MySQL"],
    date: "2024",
    category: "AI / ML",
    accent: "amber",
    url: "#",
  },
  {
    id: 3,
    title: "Advanced Jira Reporting Tool",
    description:
      "Integrated Jira REST APIs to automate data collection and built an interactive Chart.js dashboard for visualizing issue trends and team performance. End-to-end flow: Jira to DB to API to Dashboard.",
    tech: ["Flask", "Python", "PostgreSQL", "Chart.js", "Jira API"],
    date: "2025",
    category: "Data & Analytics",
    accent: "sky",
    url: "#",
  },
];

export const activities = [
  {
    title: "Computer Science Undergraduate",
    org: "MVJ College of Engineering",
    date: "2022 - Present",
    bullets: [
      "Maintaining a strong CGPA of 8.2 across core CS coursework",
      "Active in coding circles and full-stack project groups",
    ],
  },
  {
    title: "Open Source & Side Projects",
    org: "Independent",
    date: "Ongoing",
    bullets: [
      "Built real-time, AI, and data visualization projects end-to-end",
      "Consistently exploring modern frontend and backend stacks",
    ],
  },
  {
    title: "Languages",
    org: "Communication",
    date: "-",
    bullets: [
      "English - Professional",
      "Hindi - Native",
    ],
  },
];

export const navLinks = [
    { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
