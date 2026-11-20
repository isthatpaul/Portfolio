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
  date?: string;
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

export type LifeMomentCategory = "Campus" | "Out & About" | "Sports" | "Tech Events";
export type LifeMomentTapeColor = "pink" | "yellow" | "blue" | null;
export type LifeMomentRotation = "-rotate-2" | "-rotate-1" | "rotate-1" | "rotate-2";

export interface LifeMoment {
  id: string;
  imageUrl: string;
  caption: string;
  category: LifeMomentCategory;
  rotation: LifeMomentRotation;
  tapeColor?: LifeMomentTapeColor;
}

const staticBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function sitePath(path: string) {
  return `${staticBasePath}${path}`;
}

function assetPath(path: string) {
  return sitePath(path);
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
  personal: {
    avatarUrl: assetPath("/assets/profile/avatar.jpg"),
    aboutPhotoUrl: assetPath("/assets/profile/about.jpg"),
  },
  resumePath: assetPath("/assets/resume/resume.pdf"),
  links: {
    linkedin: "https://www.linkedin.com/in/paul-martin-ryan-crisologo",
    github: "https://github.com/isthatpaul",
    email: "paulryan0613@gmail.com",
  },
  topNavigation: [
    { label: "Work", href: "/", icon: "briefcase" as IconName },
    { label: "Experience", href: "/#experience", icon: "calendar" as IconName },
    { label: "About", href: "/about", icon: "users" as IconName },
    { label: "Life and all", href: "/life", icon: "route" as IconName },
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
    metadata: "Engineered with curiosity. Vibecoded with love.",
    backToTop: "Back to top ↑",
  },
  about: {
    eyebrow: "ABOUT",
    motto: "Code • Data • Systems • Curiosity • Explore • Build • Repeat • ",
    headline: "A little about me.",
    paragraphs: [
      "I’m Paul, a Computer Science undergraduate majoring in Software Technology at De La Salle University, Class of 2028. I’m drawn to the quiet satisfaction of understanding how a system works, then making it a little more useful for someone else.",
      "Technically, I enjoy the bridge between sound software engineering and data science: predictive models, dependable systems, and interfaces that make complex information easier to read and act on.",
      "A lot of my best learning happens with other people. I help build the DLSU Data Science Society and La Salle Computer Society communities, organize campus tech initiatives, and enjoy the energy of working alongside curious teammates.",
      "I’m still figuring out the exact shape of the work I want to do. For now, I’m following good questions across code, data, systems, and the people who make each project better.",
    ],
    resumeLabel: "Resume",
    beyondScreen: {
      title: "Beyond the screen.",
      ctaLabel: "Explore life and all",
      intro: "When I’m not coding or analyzing datasets, you’ll usually find me:",
      interests: [
        "Listening to music and discovering new playlists",
        "Hunting down and eating good food around Manila",
        "Playing competitive recreational pickleball to unplug from the screen",
        "Hanging out and catching up with friends",
        "Analyzing Formula 1 race telemetry and weekend strategy",
      ],
    },
  },
  hero: {
    headline: {
      lineOne: "Building useful software",
      lineTwo: "from data, systems, and curiosity.",
    },
    intro: "I build practical software, data-informed tools, and machine learning workflows that help people make sense of complex problems.",
    primaryAction: "Explore my work",
    secondaryAction: "View resume",
    illustrationLabel: "Technical schematic depicting a delay-weighted routing graph, normalized relational database entities, and clustered data points",
  },
  sectionCopy: {
    academicWorks: {
      title: "Academic Works",
      description: "Research, analytics, database, and algorithms coursework exploring practical software and data systems.",
      inspectAction: "Project details",
      walkthroughNote: "Public repository and report links aren't posted for this project yet. Browse other code on GitHub or email me for a walkthrough.",
      githubAction: "View GitHub profile",
      requestAction: "Request walkthrough",
    },
    experience: {
      title: "Experience",
      description: "Campus technical leadership and community roles at De La Salle University.",
    },
  },
  life: {
    eyebrow: "Outside the build",
    title: "Life and all",
    description: "A flexible space for the interests, experiments, and campus moments that sit around the work.",
    status: "Scaffold ready",
    galleryHeadline: "Between commits, courts, and campus.",
    gallerySubtitle: "A small scrapbook of the people, places, and detours that keep the work human.",
    galleryNote: "The work is the throughline. The rest is life.",
    previewLabel: "Open photo preview",
    closePreviewLabel: "Close photo preview",
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
  lifeMoments: [
    {
      id: "poster-showcase",
      imageUrl: assetPath("/assets/life/poster-showcase.jpg"),
      caption: "LRT & MRT Delay App research poster showcase",
      category: "Campus",
      rotation: "-rotate-2",
      tapeColor: "yellow",
    },
    {
      id: "concert-night",
      imageUrl: assetPath("/assets/life/concert-night.jpg"),
      caption: "Arena lights & live music break",
      category: "Out & About",
      rotation: "rotate-1",
      tapeColor: "blue",
    },
    {
      id: "campus-friends",
      imageUrl: assetPath("/assets/life/campus-friends.jpg"),
      caption: "Between classes with friends",
      category: "Campus",
      rotation: "-rotate-1",
      tapeColor: "pink",
    },
    {
      id: "pickleball-court",
      imageUrl: assetPath("/assets/life/pickleball-court.jpg"),
      caption: "Weekend rallies on the pickleball court",
      category: "Sports",
      rotation: "rotate-2",
      tapeColor: null,
    },
    {
      id: "retreat-day",
      imageUrl: assetPath("/assets/life/retreat-day.jpg"),
      caption: "Quiet morning architecture & retreat day",
      category: "Out & About",
      rotation: "-rotate-2",
      tapeColor: "yellow",
    },
    {
      id: "shopee-roadshow",
      imageUrl: assetPath("/assets/life/shopee-roadshow.jpg"),
      caption: "Shopee Graduate Development Program campus roadshow",
      category: "Tech Events",
      rotation: "rotate-1",
      tapeColor: "blue",
    },
    {
      id: "campus-fit",
      imageUrl: assetPath("/assets/life/campus-fit.jpg"),
      caption: "Mid-week campus routine",
      category: "Campus",
      rotation: "-rotate-1",
      tapeColor: "pink",
    },
  ] satisfies LifeMoment[],
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
      summary: "Supporting student-led data science research, technical learning, and analytics initiatives.",
      impact: [
        "Contribute to applied data and analytics initiatives across the student research team.",
        "Support peer learning sessions and collaborative technical workshops.",
        "Translate data and modeling concepts into accessible materials for student audiences.",
      ],
      tags: ["Data Science", "Research", "Community"],
      icon: "users",
      current: true,
    },
    {
      id: "dlsu-tech-summit",
      organization: "DLSU Tech Summit",
      role: "Executive",
      location: "De La Salle University",
      summary: "Coordinating technical programs and event operations for DLSU's student-led technology summit.",
      impact: [
        "Coordinate technical program logistics and event-facing deliverables across committees.",
        "Keep cross-team schedules and operational details aligned from planning through event day.",
      ],
      tags: ["Event Operations", "Technology", "Coordination"],
      icon: "calendar",
    },
    {
      id: "lscs-junior-officer",
      organization: "La Salle Computer Society",
      role: "Junior Officer",
      location: "De La Salle University",
      summary: "Supporting student computing programs and community events across the college.",
      impact: [
        "Assist in organizing computing workshops, student activities, and technical events.",
        "Handle committee logistics and execution within a volunteer leadership team.",
      ],
      tags: ["Student Leadership", "Computing", "Operations"],
      icon: "graduation-cap",
    },
  ] satisfies ExperienceItem[],
} as const;

export type PortfolioData = typeof portfolioData;
