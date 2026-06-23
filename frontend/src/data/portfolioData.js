export const profile = {
  name: "Bernardo Borges",
  title: "Software Engineer",
  tagline: "College Graduate in Software Engineering",
  location: "Aveiro, Portugal",
  email: "bernardo.borges@example.com",
  bio: `I am a Software Engineering graduate focused on building reliable, well-architected systems. My work spans distributed architectures, secure backend services, and immersive interactive experiences. I value clarity, rigor, and the discipline of writing software that endures.`,
  social: {
    github: "https://github.com/bennytime",
    linkedin: "https://www.linkedin.com/",
  },
};

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C", "SQL"],
  Frameworks: ["FastAPI", "Django REST", "React", "Three.js", "Node.js"],
  Infrastructure: ["Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "Keycloak"],
  Observability: ["Grafana", "Prometheus", "Centralized Logging"],
  Practices: ["Microservices", "Event-driven Design", "REST APIs", "CI/CD", "Network Security"],
};

export const experience = [
  {
    role: "Software Engineering Graduate",
    org: "University of Aveiro",
    period: "2022 — 2025",
    summary:
      "Completed a comprehensive software engineering programme with emphasis on distributed systems, security, and full-stack development. Delivered production-grade academic projects in collaboration with university institutions.",
  },
  {
    role: "Full-Stack Engineer · Project Lead",
    org: "Taça UA — AAUAv",
    period: "Feb 2025 — Jun 2025",
    summary:
      "Led the design of a microservices platform powering the administration of the university sports cup. Built FastAPI and Django REST services with asynchronous processing, integrated React frontends with Keycloak SSO, and instrumented the full stack with Grafana and Prometheus.",
  },
];

export const education = [
  {
    degree: "B.Sc. in Software Engineering",
    org: "University of Aveiro",
    period: "2022 — 2025",
    note: "Coursework in distributed systems, network security, data engineering, and human–computer interaction.",
  },
];

export const projects = [
  {
    id: "taca-ua",
    name: "Taça UA — Administration Website",
    type: "Full-stack · Microservices",
    period: "Feb — Jun 2025",
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
