export const navLinks = [
  {
    page: "Profile",
    path: "profile",
  },
  {
    page: "Tech",
    path: "tech",
  },
  {
    page: "Projects",
    path: "projects",
  },
  {
    page: "Articles",
    path: "articles",
  },
  {
    page: "Skills",
    path: "skills",
  },
  {
    page: "Contact",
    path: "contact",
  },
];

export const projects = [
  {
    id: 1,
    title: "Happy Thoughts",
    description:
      "A React project focused on state management, API interactions for fetching and posting data. Features include a design-aligned UI, sorted thought display by recency, like count for each thought, a form for new thoughts, and a like functionality.",
    tags: ["HTML5", "CSS3", "React", "Node"],
    image: "/happy-thoughts-image.png",
    github_url: "https://github.com/JuliaHolm/project-happy-thoughts-vite",
    demo_url: "https://what-makes-you-happy.netlify.app/",
  },
  {
    id: 2,
    title: "Adopt a Cat",
    description:
      "A React project to create a customizable survey form. Focus on React state and form control. After submission, users see a summary. Design is flexible but should prioritise accessibility.",
    tags: ["HTML5", "CSS3", "React", "Node"],
    image: "/adopt-a-cat-image.png",
    github_url: "https://github.com/JuliaHolm/project-survey-vite",
    demo_url: "https://willowy-meerkat-5ea81b.netlify.app/",
  },
];

export const myWords = [
  {
    title: "Thinking about React",
    id: "01",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://i.etsystatic.com/18966527/r/il/7b3560/3090782918/il_fullxfull.3090782918_gxvs.jpg",
    imageAlt:
      "A mug with a code printed on it, basically saying coffe should be in it.",
    date: "today",
    url_article: "link",
  },
  {
    title: "Coding is super fun, everyone should do it!",
    id: "02",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://i.etsystatic.com/18966527/r/il/7b3560/3090782918/il_fullxfull.3090782918_gxvs.jpg",
    imageAlt:
      "A mug with a code printed on it, basically saying coffe should be in it.",
    date: "yesterday",
    url_article: "link",
  },
];

export const skills = [
  {
    id: 1,
    bg_color: "#0B24F5",
    category: "Code",
    items: [
      "HTML5",
      "CSS3",
      "Javascript ES6",
      "React",
      "Styled Components",
      "GitHub",
    ],
  },
  {
    id: 2,
    bg_color: "#2483E0",
    category: "Toolbox",
    items: [
      "Atom",
      "Postman",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Keynote",
      "Slack",
    ],
  },
  {
    id: 3,
    bg_color: "#6DB486",
    category: "Uppcoming",
    items: ["Node.js"],
  },
  {
    id: 4,
    bg_color: "#EB5577",
    category: "More",
    items: [
      "Design Lead",
      "Branding",
      "Strategy",
      "Process design",
      "Concept development",
      "Agile methodology",
      "Hyper Island toolbox",
    ],
  },
];
