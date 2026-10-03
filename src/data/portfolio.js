// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Kevin Morales",
  title: "Web Developer",
  roles: [
    "PHP / Laravel Developer",
    "Backend Engineer",
    "Vue.js & React Developer",
    "Legacy Code Specialist",
  ],
  tagline:
    "I build reliable, backend-driven web applications with PHP and Laravel, and polish them with Vue.js, Nuxt.js and React.js.",
  summary:
    "Web Developer with 5+ years of experience designing, building and maintaining backend-driven web applications using PHP and Laravel. Proficient in front-end development with Vue.js, Nuxt.js and React.js, and in database management with MySQL, PostgreSQL and Microsoft SQL Server. Delivered in-house enterprise systems for manufacturing and electronics companies, including HRIS, accounting, document control and workflow management platforms.",
  summary2:
    "I enjoy optimizing application performance and user experience, supporting servers and deployments (Docker, Git), and collaborating with cross-functional teams to deliver reliable, high-quality software. I am equally comfortable writing modern Laravel code and working through native PHP and legacy systems.",
  location: "Dasmariñas City, Cavite, Philippines",
  email: "moralesk765@gmail.com",
  phone: "+63 966 538 8712",
  phoneHref: "+639665388712",
  photo: "profile.jpg",
  resume: "Kevin_Morales_Resume_ATS.docx",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { name: "GitHub", icon: "github", href: "https://github.com/Kev1118" },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/kevin-morales-3695261b1/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/kmora16/",
  },
];

export const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "3", label: "Companies" },
  { value: "5", label: "Featured systems" },
  { value: "3", label: "Databases mastered" },
];

// Proficiency bars (carried over from the previous portfolio site)
export const coreSkills = [
  { name: "PHP / Laravel", level: 80 },
  { name: "MySQL", level: 76 },
  { name: "PostgreSQL", level: 70 },
  { name: "HTML / CSS / JavaScript", level: 65 },
  { name: "Vue.js", level: 60 },
  { name: "Server management", level: 60 },
  { name: "React.js", level: 50 },
  { name: "AWS", level: 40 },
];

export const skillGroups = [
  {
    title: "Backend",
    icon: "server",
    items: ["PHP", "Laravel", "RESTful APIs", "MVC architecture"],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: [
      "Vue.js",
      "Nuxt.js",
      "React.js",
      "JavaScript",
      "jQuery",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "Microsoft SQL Server"],
  },
  {
    title: "DevOps & Tools",
    icon: "wrench",
    items: [
      "Git",
      "Bitbucket",
      "Docker",
      "Server Management",
      "Computer Troubleshooting",
    ],
  },
  { title: "Automation", icon: "bot", items: ["RPA with Kofax Kapow"] },
  {
    title: "AI Tools",
    icon: "sparkles",
    items: ["Cursor AI", "GitHub Copilot"],
  },
  {
    title: "Currently Learning",
    icon: "book",
    items: ["Node.js", "Python (Flask)", "Next.js"],
  },
];

export const experience = [
  {
    role: "Web Developer",
    company: "KMC Solutions",
    dates: "June 2024 – Present",
    current: true,
    points: [
      "Develop and maintain in-house systems for Amkor Technology as part of its global I.T. support team.",
      "Build and support the CART (Contract Accounting Review Tool) system for contract accounting review.",
      "Develop and maintain the HRIS (Human Resource Information System).",
      "Develop the Factory System, a workflow management application for factory operations.",
    ],
    tags: ["PHP", "Laravel", "Vue.js", "React.js"],
  },
  {
    role: "Specialist I (Web Developer)",
    company: "Fujitsu Die-Tech Corporation of the Philippines",
    dates: "May 2021 – June 2024",
    points: [
      "Developed in-house web applications using PHP, Laravel, MySQL and PostgreSQL.",
      "Built and maintained the HR management, accounting, document control and factory systems.",
      "Provided secondary support for server management and system maintenance.",
    ],
    tags: ["PHP", "Laravel", "MySQL", "PostgreSQL"],
  },
  {
    role: "Staff Programmer",
    company: "H.R.D Singapore PTE LTD",
    dates: "February 2018 – May 2019",
    points: [
      "Worked in the software development section, building in-house systems using VB/VB.NET, C# and Magic XPA.",
    ],
    tags: ["VB.NET", "C#", "Magic XPA"],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  school: "National College of Science and Technology",
  dates: "2012 – 2017",
};

// Project descriptions are brief on purpose – edit them to add more detail.
export const projects = [
  {
    title: "Human Resource Management System",
    short: "HRMS",
    description:
      "In-house HR platform for managing employee records and day-to-day HR administration.",
    tags: ["PHP", "Laravel", "MySQL"],
    href: "https://www.kevin-morales.com/pages/hrms.html",
  },
  {
    title: "Internal Quality Management System",
    short: "IQMS",
    description:
      "Internal system supporting quality management and document control processes.",
    tags: ["PHP", "Laravel", "PostgreSQL"],
    href: "https://www.kevin-morales.com/pages/iqms.html",
  },
  {
    title: "MIS Asset Monitoring",
    short: "MIS",
    description:
      "Monitoring tool for tracking and managing company I.T. assets.",
    tags: ["PHP", "MySQL", "JavaScript"],
    href: "https://www.kevin-morales.com/pages/mis.html",
  },
  {
    title: "Meeting Room Reservation",
    short: "MRR",
    description:
      "Booking system that lets employees reserve meeting rooms and avoid schedule conflicts.",
    tags: ["PHP", "MySQL", "JavaScript"],
    href: "https://www.kevin-morales.com/pages/meetingroom.html",
  },
  {
    title: "Labor and Management Committee",
    short: "LMC",
    description:
      "Portal built for the Labor and Management Committee, published on GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://kev1118.github.io/lmc.github.io/",
  },
];

export const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Udemy",
    date: "November 2023",
  },
  { title: "Laravel", issuer: "Udemy", date: "April 2023" },
  {
    title: "Computer Systems Servicing NC II",
    issuer: "TESDA",
    date: "April 2023",
  },
  {
    title: "RPA Training – Kofax Kapow",
    issuer: "Training only, no certification",
    date: "2021",
  },
];
