export type AcademicWorkCategory = "AI & Research" | "Software & Systems" | "Data Analytics";

export type IconName =
  | "brain"
  | "chart"
  | "file-text"
  | "database"
  | "route"
  | "briefcase"
  | "users"
  | "calendar"
  | "graduation-cap"
  | "mail";

export interface AcademicWork {
  id: string;
  title: string;
  context: string;
  category: AcademicWorkCategory;
  summary: string;
  details: string;
  icon: IconName;
  tags: string[];
  outcomes: string[];
  reportUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  date: string;
  location: string;
  summary: string;
  impact: string[];
  tags: string[];
  icon: IconName;
  current?: boolean;
}

export interface LifeItem {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  icon: IconName;
}

export interface AboutToolkitGroup {
  label: string;
  items: string[];
}

export interface AboutSnapshot {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  icon: IconName;
}

export const portfolioData = {
  profile: {
    name: "Paul Martin Ryan Alipio Crisologo",
    shortName: "Paul Crisologo",
    monogram: "PR",
    role: "CS Undergraduate",
    location: "Manila, Philippines",
    education: "De La Salle University '28",
    degree: "Computer Science · Software Technology",
    greeting: "Hi, I'm Paul — CS @ DLSU",
    bio: "I'm a Computer Science undergraduate at De La Salle University, majoring in Software Technology. I build practical, thoughtful software and enjoy working at the intersection of data, systems, and machine learning.",
    extendedBio: "I like turning complex questions into clear, usable tools — from predictive models and explainable analytics to dependable software systems. My work is grounded in curiosity, careful reasoning, and a desire to make technical ideas useful to real people.",
  },
  resumePath: "/assets/resume/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/paul-martin-ryan-crisologo",
    github: "https://github.com/isthatpaul",
    email: "paulryan0613@gmail.com",
  },
  topNavigation: [
    { label: "Work", href: "/", icon: "briefcase" as IconName },
    { label: "Life and all", href: "/life", icon: "route" as IconName },
    { label: "Experience", href: "/#experience", icon: "calendar" as IconName },
    { label: "About", href: "/about", icon: "users" as IconName },
  ],
  navigationCta: "Let's talk",
  editorialFooter: {
    eyebrow: "Let's make something useful",
    headline: {
      lineOne: "Got a problem",
      lineTwo: "worth solving?",
    },
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    metadata: "Engineered with curiosity. Built in Manila.",
    backToTop: "Back to top ↑",
  },
  about: {
    eyebrow: "Beyond the terminal",
    headline: {
      lineOne: "A little more about how I think, build,",
      lineTwo: "and spend my time.",
    },
    paragraphs: [
      "I’m a Computer Science undergraduate majoring in Software Technology at De La Salle University, Class of 2028. I started with a curiosity about how things work and keep coming back to the same question: how can a technical idea become something useful to another person?",
      "The part of computing that excites me most is the bridge between solid software engineering fundamentals and data science — predictive models, well-shaped systems, and interfaces that make complex information easier to understand.",
      "I also like the work that happens between the commits: organizing tech events, contributing to the DLSU Data Science Society and La Salle Computer Society, and competing in hackathons and CTF challenges with people who enjoy learning in public.",
    ],
    details: [
      { label: "Studying", value: "Computer Science · Software Technology" },
      { label: "University", value: "De La Salle University" },
      { label: "Class", value: "2028" },
      { label: "Based", value: "Manila, Philippines" },
    ],
    toolkitLabel: "The working toolkit",
    toolkitTitle: "Tools I reach for",
    toolkit: [
      { label: "Languages", items: ["Python", "Java", "C", "JavaScript/TypeScript", "Go", "SQL"] },
      { label: "Web & Systems", items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Playwright"] },
      { label: "Data & Machine Learning", items: ["pandas", "NumPy", "scikit-learn", "FastF1 API", "K-Means"] },
      { label: "Databases & Dev Tools", items: ["PostgreSQL/SQL", "MongoDB", "Git/GitLab", "Linux/VS Code"] },
    ] satisfies AboutToolkitGroup[],
    snapshotsLabel: "Outside of code",
    snapshotsTitle: "A few things that keep the work human",
    snapshots: [
      {
        id: "motorsport-telemetry",
        title: "Motorsport Telemetry",
        summary: "Analyzing Formula 1 race strategy, lap times, and driver performance data.",
        tags: ["Formula 1", "FastF1 API"],
        icon: "chart",
      },
      {
        id: "on-the-court",
        title: "On the Court",
        summary: "Playing competitive recreational pickleball to unplug from the screen.",
        tags: ["Pickleball", "Reset"],
        icon: "route",
      },
      {
        id: "campus-community",
        title: "Campus & Community",
        summary: "Building workshops and student tech initiatives at DLSU.",
        tags: ["DLSU", "Workshops"],
        icon: "users",
      },
    ] satisfies AboutSnapshot[],
  },
  hero: {
    headline: {
      lineOne: "Building useful software",
      lineTwo: "from data, systems, and curiosity.",
    },
    intro: "I build practical software, data-informed tools, and machine learning workflows that help people make sense of complex problems.",
    primaryAction: "Explore my work",
    secondaryAction: "View resume",
    illustrationLabel: "Line-art illustration of a laptop, books, and a simple systems diagram",
  },
  sectionCopy: {
    academicWorks: {
      eyebrow: "Selected work",
      title: "Academic Works",
      description: "A collection of research, analytics, software, and systems projects developed through coursework and independent practice.",
      inspectAction: "Inspect artifact",
      codeAction: "View code",
      filterLabel: "Filter academic works",
    },
    experience: {
      eyebrow: "Where I show up",
      title: "Experience",
      description: "Work, volunteer, and leadership experiences that have shaped how I collaborate, learn, and deliver.",
    },
  },
  life: {
    eyebrow: "Outside the build",
    title: "Life and all",
    description: "A flexible space for the interests, experiments, and campus moments that sit around the work.",
    status: "Scaffold ready",
    items: [
      {
        id: "formula-1-telemetry",
        title: "Formula 1 telemetry",
        summary: "A future notebook for race data, strategy, and performance patterns.",
        tags: ["Data", "Strategy"],
        icon: "chart",
      },
      {
        id: "pickleball",
        title: "Pickleball",
        summary: "A place for notes on play, practice, and the small rituals that keep learning fun.",
        tags: ["Movement", "Practice"],
        icon: "route",
      },
      {
        id: "hackathons",
        title: "Hackathons",
        summary: "A running shelf for fast prototypes, team experiments, and ideas worth testing.",
        tags: ["Build", "Collaborate"],
        icon: "briefcase",
      },
      {
        id: "campus-life",
        title: "Campus life",
        summary: "A future collection of the communities, events, and people that make DLSU feel alive.",
        tags: ["Community", "DLSU"],
        icon: "users",
      },
    ] satisfies LifeItem[],
  },
  filters: ["All", "AI & Research", "Software & Systems", "Data Analytics"] as const,
  academicWorks: [
    {
      id: "f1-predictive-model",
      title: "F1 Predictive Model",
      context: "Machine Learning research",
      category: "AI & Research",
      summary: "A predictive modeling study exploring which race and driver signals can help explain Formula 1 outcomes.",
      details: "This work moves from data preparation and feature selection into model comparison and interpretation, with a focus on making the result explainable rather than treating accuracy as the only outcome.",
      icon: "brain",
      tags: ["Python", "scikit-learn", "Feature Engineering"],
      outcomes: ["Predictive modeling workflow", "Feature comparison", "Research-style reporting"],
    },
    {
      id: "tmdb-clustering",
      title: "TMDB Clustering",
      context: "Data mining & analytics",
      category: "Data Analytics",
      summary: "A clustering analysis of film metadata to surface patterns across genres, popularity, and audience signals.",
      details: "This analysis turns a large movie dataset into interpretable groups through preparation, dimensionality decisions, clustering experiments, and visual comparison of the resulting segments.",
      icon: "chart",
      tags: ["Python", "Pandas", "Clustering"],
      outcomes: ["Segmented film profiles", "Exploratory analysis", "Visual cluster comparison"],
    },
    {
      id: "utility-billing-schema",
      title: "Public Utility Billing System",
      context: "Database management systems",
      category: "Software & Systems",
      summary: "A relational data model for utility billing, customer accounts, usage records, and payment history.",
      details: "This schema work focuses on translating real-world billing relationships into a structured, maintainable database design with clear entity boundaries and room for reliable reporting.",
      icon: "database",
      tags: ["SQL", "Relational Design", "Data Modeling"],
      outcomes: ["Normalized entities", "Billing relationships", "Query-ready structure"],
    },
    {
      id: "train-delay-router",
      title: "Train Delay Router",
      context: "Algorithms & data structures",
      category: "Software & Systems",
      summary: "A route-planning problem that models delay-aware travel choices and compares paths through a transport network.",
      details: "The project turns a graph problem into a practical routing exercise, using weighted paths and clear assumptions to reason about how delays change a recommended journey.",
      icon: "route",
      tags: ["Java", "Graphs", "Algorithms"],
      outcomes: ["Graph-based routing", "Delay-aware weights", "Algorithmic reasoning"],
    },
  ] satisfies AcademicWork[],
  experience: [
    {
      id: "dlsu-data-science-society",
      organization: "DLSU Data Science Society",
      role: "Associate for Data and Research",
      date: "Oct 2026 – Present",
      location: "De La Salle University",
      summary: "A student organization role centered on learning, community, and the practical application of data science.",
      impact: ["Contributed to a student community around data and analytics.", "Supported collaborative learning and technical initiatives.", "Practiced communicating data concepts to a wider student audience."],
      tags: ["Data Science", "Community", "Leadership"],
      icon: "users",
      current: true,
    },
    {
      id: "dlsu-tech-summit",
      organization: "DLSU Tech Summit",
      role: "Executive",
      date: "Academic organization",
      location: "De La Salle University",
      summary: "An executive role supporting a student-led technology event and the people, programs, and details behind it.",
      impact: ["Helped coordinate technical and event-facing responsibilities.", "Worked across a team to keep initiatives moving toward shared outcomes.", "Built confidence in planning, follow-through, and collaboration."],
      tags: ["Event Operations", "Technology", "Teamwork"],
      icon: "calendar",
    },
    {
      id: "lscs-junior-officer",
      organization: "La Salle Computer Society",
      role: "Junior Officer",
      date: "Academic organization",
      location: "De La Salle University",
      summary: "A junior leadership role in a computing community, supporting activities that connect students with technology and one another.",
      impact: ["Supported organization initiatives and student activities.", "Learned to contribute consistently within a volunteer team.", "Strengthened coordination and ownership through hands-on work."],
      tags: ["Student Leadership", "Computing", "Volunteer Work"],
      icon: "graduation-cap",
    },
  ] satisfies ExperienceItem[],
  contact: {
    detailLabels: {
      email: "Email",
      location: "Location",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me about your project, opportunity, or question...",
    },
  },
} as const;

export type PortfolioData = typeof portfolioData;
