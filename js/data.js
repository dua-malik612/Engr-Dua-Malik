// ===== EDIT HERE: all text and links of your portfolio live in this file =====
const LINKEDIN = "https://www.linkedin.com/in/dua-malik-37882a408/";
const GITHUB = "https://github.com/dua-malik612";
const EMAIL = "612duamlik@gmail.com";
const P = id => "https://lnkd.in/p/" + id;
const FELLOWSHIP = P("dfS5UpUi"); // Zeppelin fellowship completion post

const ROLES = ["Software Engineer", "Web Developer", "Public Speaker"];

const STATS = [
  ["4", "full-stack projects shipped"],
  ["10", "weeks of fellowship"],
  ["5", "wins and titles"]
];

const PROJECTS = [
  { title: "Local Skill Board", tag: "Project 1", img: "skill", color: "#6FE0C5",
    live: "https://local-skill-board.vercel.app/", post: "https://lnkd.in/p/dyRsAfxp",
    text: "A peer-to-peer directory where people trade skills. Deployed on Vercel.",
    stack: ["Next.js", "Supabase", "Tailwind CSS"] },
  { title: "SpaceSync", tag: "Project 2 · Coming soon", img: "space", color: "#FF8F7A",
    live: "", post: P("dysBQNXA"),
    text: "Booking platform for shared resources and spaces, with caching for fast availability checks.",
    stack: ["React", "TypeScript", "Express", "MongoDB", "Redis"] },
  { title: "TruckLink", tag: "Project 3", img: "truck", color: "#C4B8FF",
    live: "https://trucklink-frontend-vofx.vercel.app/", post: "https://lnkd.in/p/db4RngyD",
    text: "Role-based portal for hiring and onboarding truck drivers, with JWT auth and route guards.",
    stack: ["Next.js", "NestJS", "MongoDB", "JWT"] },
  { title: "CarpoolCampus", tag: "Project 4", img: "carpool", color: "#6FE0C5",
    live: "https://carpool-xlo2.vercel.app/", post:"https://lnkd.in/p/dm5uCVvR",
    text: "Ride-sharing for students who commute to campus, with OTP-verified signup.",
    stack: ["React", "Node.js", "Express", "PostgreSQL"] }
];

const ACADEMIC = [
  "Missing Persons Database System: role-based access for admin, law enforcement and the public",
  "Blood Bank Management System: donors, inventory and request tracking",
  "Desktop app in C# WinForms with full CRUD on SQL Server",
  "Oracle database design with advanced SQL queries and constraints"
];

const JOURNEY = [
  ["Jul – Sep 2026", "Zeppelin Labs Web Development Fellowship", "Three months, four full-stack projects. Owned frontend testing and the frontend–backend handoff.", FELLOWSHIP],
  ["2026", "Sponsorship & Logistics, AICP FJWU Chapter", "Sponsor outreach and event logistics for the university chapter.", P("dZy5wMTt")],
  ["2026", "Collabin Growth Challenge, Track D", "Built a creator-acquisition plan: channels, incentives, objection handling and a phased rollout.", ""],
  ["2024", "Campus Ambassador, AICP Cabinet '24", "Part of the AICP cabinet as a campus ambassador.", P("dQ6-NFWc")],
  ["2024 – 2028", "BS Software Engineering, FJWU", "Currently in 5th semester.", ""]
];

const SKILLS = {
  "Frontend": ["React", "Next.js", "Vite", "Tailwind CSS", "HTML / CSS", "Bootstrap"],
  "Backend & data": ["Node.js", "Express", "NestJS", "Supabase", "MongoDB", "PostgreSQL", "SQL Server", "Oracle"],
  "Tools": ["Git / GitHub", "Vercel", "Linux (Ubuntu)", "C# WinForms", "Visual Paradigm", "MS Office"]
};

const WINS = [
  ["1st, All Pakistan FGEI Urdu Extempore Contest", ""],
  ["1st, Zonal Software Development Competition (FGEI)", ""],
  ["1st, Inter-University Independence Day Competition", ""],
  ["1st, Essay Writing Competition (English), FJWU Literary & Debating Society, 2026", P("d6cxGi3k")],
  ["Winner, CM Laptop Scheme (merit-based)", ""]
];

const CERTS = [
  ["Google Project Management", "Coursera", "Sep 2026", P("d6ci3nsb")],
  ["Google Project Management (7 courses)", "Coursera", "", P("dczvhsi6")],
  ["Google Project Management Professional Certificate (v.3) badge", "Credly", "", "https://www.credly.com/badges/46449b1b-72b9-4f27-8203-eb59f311e5af/public_url"],
  ["Google Prompting Essentials Specialization", "Google · Coursera", "", P("dJpvpwSR")],
  ["4 courses included in the Google Prompting Essentials Specialization", "Google · Coursera", "", P("d8V44iJ2")],
  ["Accelerate Your Job Search with AI", "Google", "Sep 2026", LINKEDIN],
  ["AI with Integrity Masterclass", "DataCrumbs × Character Building Society", "Sep 2026", P("dZe68jyq")],
  ["Build Your Professional Presence", "DataCrumbs × FJWU STEM Society", "Aug 2026", P("dNXxu_Vv")],
  ["Future-Ready AI, Marketing & E-Commerce", "DataCrumbs × SCDS & IUB", "Aug 2026", P("duVPmY7X")],
  ["Health & Safety Risk Management", "Udemy", "Apr 2025", P("dUMjHxm3")],
  ["MS Excel 2013 Advanced; Intro to MS Word", "Alison, CPD Certified", "", P("dQMirbJW")],
  ["Introduction to MS Word 2019/365", "Alison, CPD Certified", "", P("d4ucKhS9")]
];
