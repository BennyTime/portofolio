export const profile = {
  name: "Bernardo Borges",
  title: "B.Sc. in Computer Engineering",
  tagline: "Bachelor's student in Computer Engineering",
  location: "Aveiro, Portugal",
  phone: "+351 964754707",
  dob: "18/02/2002",
  nationality: "Portuguese",
  email: "bernardo.borges@ua.pt",
  website: "https://bennytime.github.io/portofolio/",
  linkedin: "https://www.linkedin.com/in/bernardo-borges-079ba5418/",
  address: "3830-159, Ílhavo, Portugal",
  drivingLicence: "B",
  bio: `I am a Bachelor's student in Computer Engineering at the University of Aveiro with hands-on experience in full-stack development. I focus on building clear, usable frontends and the backend APIs that make them work. I value clarity, rigor, and writing software that endures.`,
  social: {
    github: "https://github.com/BennyTime",
  },
};

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C", "C#", "SQL"],
  Frameworks: ["FastAPI", "React", "Three.js", "Node.js"],
  Infrastructure: ["Docker", "PostgreSQL", "MongoDB", "Redis", "Keycloak"],
  Observability: ["Grafana", "Prometheus"],
  Tools: ["Git", "Bash", "K6", "Jira", "UML"],
  Frontend: ["HTML", "CSS"],
  Practices: ["Microservices", "REST APIs", "CI/CD", "Network Security"],
};

export const experience = [
  {
    role: "Software Engineering Graduate",
    org: "University of Aveiro",
    period: "12/09/2022 — 06/07/2026",
    summary:
      "Completed a comprehensive software engineering programme with a strong focus on full-stack development — particularly the frontend — alongside backend API design and security. Delivered production-grade academic projects in collaboration with university institutions.",
  },
  {
    role: "Full-Stack Engineer · Frontend Focus",
    org: "Taça UA — AAUAv",
    period: "Feb 2025 — Jun 2026",
    summary:
      "Contributed to a platform powering the administration of the university sports cup. Focused on building the React frontend and integrating it with Keycloak authentication, while also contributing to parts of the FastAPI backend API.",
  },
];

export const education = [
  {
    degree: "Bachelor's of Science in Computer Engineering",
    org: "University of Aveiro",
    period: "12/09/2022 — 06/07/2026",
    note: "Focused on software engineering and information systems, with an emphasis on building practical and scalable applications. The course emphasized engineering principles, problem-solving, and independent learning through hands-on software development.",
  },
];

export const languageSkills = {
  motherTongue: "Portuguese",
  other: [
    {
      language: "English",
      level: "C2",
    },
  ],
};

export const projects = [
  {
    id: "taca-ua",
    name: "Taça UA — Administration Website",
    type: "Full-stack · Microservices",
    period: "Feb — Jun 2026",
    description:
      "A full-stack platform for AAUAv built on a distributed, event-driven microservices architecture. Backend services were implemented with FastAPI and Django REST with asynchronous task pipelines. The React frontend was integrated with Keycloak for identity and access. The system is observed end-to-end through Grafana, Prometheus, and centralized logging.",
    stack: ["FastAPI", "Django REST", "React", "Keycloak", "Grafana", "Prometheus"],
    link: "https://taca-ua.github.io",
    image: "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    span: "wide",
  },
  {
    id: "secure-doc",
    name: "Secure Document Repository",
    type: "Security · Cryptography",
    period: "Mar — Jun 2026",
    description:
      "A secure system for document sharing across untrusted networks. Implements end-to-end encryption, robust authentication, and secure channels — designed around the core principles of confidentiality, integrity, and authenticity.",
    stack: ["Cryptography", "Authentication", "Network Security"],
    link: "https://github.com/Alxit0/document-repo-service",
    image: "https://images.pexels.com/photos/8466227/pexels-photo-8466227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    span: "narrow",
  },
  {
    id: "astratd",
    name: "AstraTD",
    type: "3D · Browser Game",
    period: "Academic Project",
    description:
      "A browser-based 3D tower defence built entirely in JavaScript with Three.js. Handles real-time 3D rendering, scene management, and interactive gameplay logic — a focused exploration of graphics and game architecture in the browser.",
    stack: ["JavaScript", "Three.js", "WebGL"],
    link: "https://bennytime.github.io/AstraTD",
    image: "https://images.pexels.com/photos/13930769/pexels-photo-13930769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    span: "narrow",
  },
  {
    id: "evsync",
    name: "EVSync",
    type: "Platform · Sustainability",
    period: "Academic Project",
    description:
      "An integrated platform that streamlines the EV charging experience for drivers and station operators. Provides real-time station discovery, slot booking, session management, and payment integration. Users can also track CO₂ savings — turning charging data into measurable environmental impact.",
    stack: ["React", "Backend Services", "Payment Integration"],
    link: "https://github.com/EVSync/App",
    image: "https://images.pexels.com/photos/5864153/pexels-photo-5864153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    span: "wide",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];