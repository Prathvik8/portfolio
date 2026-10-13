// Site Configuration & Content
// Customize your details, projects, leadership entries, and contact info here.

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
}

export interface ProjectEntry {
  id: string;
  numberPrefix: string;
  name: string;
  details: string;
  problem: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceEntry {
  id: string;
  dateRange: string;
  role: string;
  organization: string;
  collegeName?: string;
  description: string;
  bullets: string[];
}

export interface SkillRow {
  category: string;
  skills: string;
}

export const siteConfig = {
  name: "Prathvik",
  greeting: "Hi, I'm",
  currentRole: "3rd-Year Computer Science Engineering Student",
  subtitles: "Developer • Problem Solver • ACM Membership Chair",
  intro: "I'm a 3rd-year Computer Science Engineering student interested in software development, problem solving, technology communities, and building things that are actually useful.",

  photoBoxText: "your photo •\npublic/photo.png",

  socials: {
    github: "https://github.com/Prathvik8",
    linkedin: "https://www.linkedin.com/in/prathvik-shetty-8ba58632b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://instagram.com/prath_vik_17",
    email: "mailto:[prathviks369@gmail.com]"
  } as SocialLinks,

  rawEmail: "prathviks369@gmail.com",
  resumeUrl: "/resume.pdf",
  resumeText: "My updated resume with details on education, coursework, projects, and community leadership.",
  resumeNote: "PDF format • Available for internships & entry-level roles",

  about: {
    p1: "I'm a Computer Science Engineering student who likes figuring out how things work — and then trying to build them myself. Most of what I know came from breaking something, reading the docs, and fixing it again.",
    p2: "Right now I'm spending most of my time on data structures and algorithms, and on web development. I like problems that have a clean answer hiding somewhere, and products that make someone's day slightly easier.",
    p3: "Outside of code, a lot of my time goes into student tech communities, including the ACM Student Chapter at my college, where I serve as Membership Chair. Organising events, helping juniors get started, and getting people in a room to build things together has taught me as much as any course.",
    p4: "Going forward I want to explore software engineering more seriously — how real systems are designed, shipped, and maintained by teams."
  },

  currently: [
    "Learning DSA",
    "Building projects",
    "Exploring web development",
    "Working with student tech communities",
    "Exploring software engineering opportunities"
  ],

  projectsHelperText: "Placeholder projects — replace in src/data/portfolioData.ts",

  projects: [
    {
      id: "project-01",
      numberPrefix: "01",
      name: "[PROJECT NAME 01]",
      details: "[PROJECT DETAILS] — one or two sentences on what it is.",
      problem: "[The problem it solves]",
      tech: ["[Tech]", "[Tech]"],
      githubUrl: "https://github.com/[YOUR_GITHUB_USERNAME]/project-1",
      liveUrl: "https://[project-demo.vercel.app]"
    },
    // {
    //   id: "project-02",
    //   numberPrefix: "02",
    //   name: "[PROJECT NAME 02]",
    //   details: "[PROJECT DETAILS] — one or two sentences on what it is.",
    //   problem: "[The problem it solves]",
    //   tech: ["[Tech]", "[Tech]"],
    //   githubUrl: "https://github.com/[YOUR_GITHUB_USERNAME]/project-2"
    // },
    // {
    //   id: "project-03",
    //   numberPrefix: "03",
    //   name: "[PROJECT NAME 03]",
    //   details: "[PROJECT DETAILS] — one or two sentences on what it is.",
    //   problem: "[The problem it solves]",
    //   tech: ["[Tech]", "[Tech]"],
    //   githubUrl: "https://github.com/[YOUR_GITHUB_USERNAME]/project-3"
    // }
  ] as ProjectEntry[],

  experiences: [
    {
      id: "acm-chair",
      dateRange: "July 2026 — Present",
      role: "Membership Chair",
      organization: "GAT ACM Student Chapter",
      collegeName: "Global Academy Of Technology",
      description: "I serve as Membership Chair of the ACM Student Chapter — looking after the chapter's community: growing the member base, onboarding new members, and keeping people showing up to events.",
      bullets: [
        // "[Event or initiative you led]",
        // "[Something you built or improved]",
        // "[Impact, in plain words]"
      ]
    },
    // {
    //   id: "other-community",
    //   dateRange: "[START] — [END]",
    //   role: "[ROLE]",
    //   organization: "[OTHER COMMUNITY / CLUB]",
    //   collegeName: "",
    //   description: "[Short description.]",
    //   bullets: [
    //     "[Key contribution]",
    //     "[Key contribution]"
    //   ]
    // }
  ] as ExperienceEntry[],

  skills: [
    { category: "Programming", skills: "Python, C, C++, JavaScript" },
    { category: "Web Development", skills: "HTML, CSS, JavaScript, React, Node.js" },
    { category: "Database", skills: "SQL, MySQL, PostgreSQL" },
    { category: "Tools", skills: "Git, GitHub, VS Code" },
    { category: "Other", skills: "DSA, Problem solving, APIs" }
  ] as SkillRow[],

};
