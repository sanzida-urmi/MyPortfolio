const projectsData = [
 {
  id: 1,
  name: "LoanLink 💸",
  image: "https://i.ibb.co/8gQ9X9x0/Screenshot-2026-02-14-201355.png",

  shortDescription:
    "A full-stack microloan request and approval management system with secure role-based dashboards and JWT authentication.",

  techStack: [
    "React.js",
    "React Router DOM",
    "Axios",
    "TanStack Query",
    "Tailwind CSS",
    "DaisyUI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JSON Web Token (JWT)",
    "Firebase Authentication"
  ],

  liveLink: "https://client-11-3146c.web.app",
  githubClient: "https://github.com/sanzida-urmi/LoanLink",

  challenges: [
    "Building protected routes for User, Manager, and Admin dashboards",
    "Implementing secure Axios interceptors for API requests",
    "Handling EMI tracking and loan status updates dynamically"
  ],

  futurePlans: [
    "Add automated EMI reminder notifications",
  ]
},
 {
  id: 2,
  name: "ZapShift 🚴‍♀️",
  image: "https://i.ibb.co/ym5ppj1P/Screenshot-2026-02-14-201641.png", 

  shortDescription:
    "A modern parcel delivery management system with role-based dashboards, JWT authentication, and real-time parcel tracking for users, riders, and admins.",

  techStack: [
    "React.js",
    "React Router DOM",
    "Tailwind CSS",
    "DaisyUI",
    "Axios",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Firebase"
  ],

  liveLink: "https://zap-shift-7fef3.web.app",
  githubClient: "https://github.com/sanzida-urmi/zap-shift",

  challenges: [
    "Implementing secure JWT authentication and protected routes",
    "Managing real-time parcel status updates efficiently",
    "Handling delivery assignment workflow logic",
  ],

  futurePlans: [
    "Add real-time location tracking using maps integration",
    "Implement push notifications for delivery updates",
  ]
},

  {
  id: 3,
  name: "MovieMaster Pro 🎬",
  image: "https://i.ibb.co.com/Jw4VvqLn/68747470733a2f2f692e6962622e636f2f6862445736516d2f53637265656e73686f742d323032352d31312d31392d313033.png",

  shortDescription:
    "A full-stack movie management web application that allows users to browse, add, edit, delete, and manage personal movie collections with authentication and protected routes.",

  techStack: [
    "React.js",
    "React Router",
    "Tailwind CSS",
    "DaisyUI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase Authentication",
    "React Toastify",
    "Framer Motion"
  ],

  liveLink: "https://effulgent-tarsier-43c508.netlify.app",
  githubClient: "https://github.com/sanzida-urmi/MovieMaster",

  challenges: [
    "Implementing secure authentication with protected routes",
    "Building full CRUD operations with MongoDB",
    "Managing global state for watchlist and filtering system",
    "Implementing advanced search and smart movie categorization",
  ],

  futurePlans: [
    "Add movie recommendation system based on user preferences",
    "Integrate external movie API (like TMDB) for dynamic data",
  ]
},
];

export default projectsData;
