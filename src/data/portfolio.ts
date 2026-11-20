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
  previewImage?: {
    src: string;
    alt: string;
    caption: string;
  };
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

export type LifeMomentCategory = "Campus" | "Out & About" | "Sports" | "Tech Events";

export interface LifeMoment {
  id: string;
  imageUrl: string;
  caption: string;
  category: LifeMomentCategory;
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
    headline: {
      lineOne: "Got a problem",
      lineTwo: "worth solving?",
    },
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    metadata: "Paul Crisologo · CS Software Technology, DLSU '28 · Manila",
    backToTop: "Back to top ↑",
  },
  about: {
    headline: "A little about me.",
    paragraphs: [
      "I’m Paul, a Computer Science undergraduate majoring in Software Technology at De La Salle University (Class of 2028). I like taking systems apart to understand how they work, then writing software that puts those pieces to practical use.",
      "Most of my coursework and independent projects sit across software engineering and data science: supervised ML pipelines in Python, clustering analyses in Pandas, normalized SQL schemas, and weighted graph algorithms in Java.",
      "Outside class, I work with the Data and Research committee at DLSU Data Science Society, help coordinate DLSU Tech Summit, and serve as a Junior Officer in La Salle Computer Society.",
      "I’m looking for software engineering, data, or machine learning internships where I can ship production code and learn from strong engineering teams.",
    ],
    resumeLabel: "Resume",
    beyondScreen: {
      title: "Beyond the screen.",
      ctaLabel: "Explore life and all",
      intro: "When I’m away from code and datasets, you’ll usually find me:",
      interests: [
        "Listening to music and putting together new playlists",
        "Trying out food spots around Manila",
        "Playing competitive recreational pickleball",
        "Catching up with friends outside campus",
        "Following Formula 1 race telemetry and weekend strategy",
      ],
    },
  },
  hero: {
    headline: {
      lineOne: "Software built on",
      lineTwo: "data, models, and clean systems.",
    },
    intro: "Computer Science undergraduate at DLSU ('28) building predictive models, relational database schemas, graph routing algorithms, and responsive web interfaces.",
    primaryAction: "Explore my work",
    focusHeading: "Technical focus",
    focusAreas: [
      {
        title: "Machine Learning & Data",
        stack: "Python · scikit-learn · Pandas",
        detail: "Predictive race-outcome pipelines and unsupervised film clustering.",
      },
      {
        title: "Relational Systems",
        stack: "SQL · ER Design",
        detail: "Normalized utility billing schemas covering accounts, meters, and ledgers.",
      },
      {
        title: "Graph Algorithms",
        stack: "Java · Weighted Graphs",
        detail: "Delay-aware LRT and MRT route computation across transit networks.",
      },
    ],
  },
  sectionCopy: {
    academicWorks: {
      title: "Academic Works",
      description: "Four CS projects spanning supervised machine learning, unsupervised clustering, relational database design, and delay-aware graph routing.",
      inspectAction: "Overview & details",
      walkthroughNote: "Public repository and report links aren't posted for this project yet. Browse other code on GitHub or reach out for a technical walkthrough.",
      githubAction: "View GitHub profile",
      requestAction: "Request walkthrough",
    },
    experience: {
      title: "Experience",
      description: "Student technical leadership across data science, campus tech events, and computing organizations at De La Salle University.",
    },
  },
  life: {
    title: "Life and all",
    galleryHeadline: "Between commits, courts, and campus.",
    gallerySubtitle: "Photos from research showcases, campus tech events, pickleball courts, and time around Manila.",
    previewLabel: "Open photo preview",
    closePreviewLabel: "Close photo preview",
  },
  lifeMoments: [
    {
      id: "poster-showcase",
      imageUrl: assetPath("/assets/life/poster-showcase.jpg"),
      caption: "LRT & MRT Delay App research poster showcase",
      category: "Campus",
    },
    {
      id: "concert-night",
      imageUrl: assetPath("/assets/life/concert-night.jpg"),
      caption: "Arena lights & live music break",
      category: "Out & About",
    },
    {
      id: "campus-friends",
      imageUrl: assetPath("/assets/life/campus-friends.jpg"),
      caption: "Between classes with friends",
      category: "Campus",
    },
    {
      id: "pickleball-court",
      imageUrl: assetPath("/assets/life/pickleball-court.jpg"),
      caption: "Weekend rallies on the pickleball court",
      category: "Sports",
    },
    {
      id: "retreat-day",
      imageUrl: assetPath("/assets/life/retreat-day.jpg"),
      caption: "Quiet morning architecture & retreat day",
      category: "Out & About",
    },
    {
      id: "shopee-roadshow",
      imageUrl: assetPath("/assets/life/shopee-roadshow.jpg"),
      caption: "Shopee Graduate Development Program campus roadshow",
      category: "Tech Events",
    },
    {
      id: "campus-fit",
      imageUrl: assetPath("/assets/life/campus-fit.jpg"),
      caption: "Mid-week campus routine",
      category: "Campus",
    },
  ] satisfies LifeMoment[],
  academicWorks: [
    {
      id: "f1-predictive-model",
      title: "F1 Predictive Model",
      context: "Machine Learning coursework",
      category: "AI & Research",
      summary: "Supervised Python pipeline predicting Formula 1 race outcomes from historical driver, qualifying, and circuit features.",
      details: "Built a scikit-learn workflow covering historical race-data cleaning, driver and track feature engineering, cross-model evaluation, and feature-importance analysis to trace which race variables drive predicted standings.",
      icon: "brain",
      tags: ["Python", "scikit-learn", "Feature Engineering"],
      outcomes: ["Historical race-data preprocessing", "Supervised model comparison", "Feature-importance analysis"],
    },
    {
      id: "tmdb-clustering",
      title: "TMDB Clustering",
      context: "Data Mining & Analytics",
      category: "Data Analytics",
      summary: "Unsupervised segmentation of TMDB film metadata grouping titles by genre mix, popularity, and audience ratings.",
      details: "Cleaned and scaled TMDB movie records in Pandas, evaluated dimensionality-reduction and clustering configurations, and profiled each cluster visually to compare genre, release, and audience-rating patterns.",
      icon: "chart",
      tags: ["Python", "Pandas", "Clustering"],
      outcomes: ["Metadata cleaning & feature scaling", "Clustering parameter experiments", "Visual cluster profiling"],
    },
    {
      id: "utility-billing-schema",
      title: "Public Utility Billing System",
      context: "Database Management Systems",
      category: "Software & Systems",
      summary: "Normalized SQL schema modeling utility customer accounts, metered usage readings, billing cycles, and payment ledgers.",
      details: "Defined entity-relationship boundaries, primary and foreign key constraints, and normalized tables separating subscriber accounts, periodic meter readings, invoice line items, and payment settlements for reliable billing queries.",
      icon: "database",
      tags: ["SQL", "Relational Design", "Data Modeling"],
      outcomes: ["Normalized ER schema & keys", "Usage-to-invoice table mapping", "Reporting-ready SQL structure"],
    },
    {
      id: "train-delay-router",
      title: "Train Delay Router",
      context: "Algorithms & Data Structures",
      category: "Software & Systems",
      summary: "Java graph-routing solver that weights LRT and MRT edges with station delays to compare alternative rail paths.",
      details: "Modeled rail stations and transfers as a weighted graph in Java, adjusting edge weights for service delays to compute and compare shortest-time routes when disruptions change the fastest path across the network.",
      icon: "route",
      tags: ["Java", "Graphs", "Algorithms"],
      outcomes: ["Weighted transit graph model", "Delay-adjusted edge routing", "Shortest-path route comparison"],
      previewImage: {
        src: assetPath("/assets/life/poster-showcase.jpg"),
        alt: "Paul presenting the LRT and MRT Delay App research poster at DLSU",
        caption: "LRT & MRT Delay App research poster showcase at DLSU.",
      },
    },
  ] satisfies AcademicWork[],
  experience: [
    {
      id: "dlsu-data-science-society",
      organization: "DLSU Data Science Society",
      role: "Associate for Data and Research",
      date: "Oct 2026 – Present",
      location: "De La Salle University",
      summary: "Student data science organization at De La Salle University.",
      impact: [
        "Work on applied data and analytics projects within the Data and Research committee.",
        "Help run peer study sessions and student technical workshops on data workflows.",
        "Write and present clear walkthroughs of modeling and analytics concepts for student audiences.",
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
      summary: "Student-run technology summit at De La Salle University.",
      impact: [
        "Coordinated technical program logistics, schedules, and event-facing deliverables across committees.",
        "Tracked cross-team execution from pre-event planning through summit day operations.",
      ],
      tags: ["Event Operations", "Technology", "Coordination"],
      icon: "calendar",
    },
    {
      id: "lscs-junior-officer",
      organization: "La Salle Computer Society",
      role: "Junior Officer",
      location: "De La Salle University",
      summary: "Undergraduate computing organization at De La Salle University.",
      impact: [
        "Helped organize college computing workshops, technical talks, and student activities.",
        "Handled committee logistics and event execution within a volunteer officer team.",
      ],
      tags: ["Student Leadership", "Computing", "Operations"],
      icon: "graduation-cap",
    },
  ] satisfies ExperienceItem[],
} as const;

export type PortfolioData = typeof portfolioData;
