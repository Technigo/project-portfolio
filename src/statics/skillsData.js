import { tagYellowColor, greenColor, blueColor, secondaryColorText } from '../styles/styleVariable';

export const skillsData = [
  {
    color: secondaryColorText.color,
    tag: 'Code',
    skills: [
      'HTML',
      'CSS / SCSS / Tailwind CSS',
      'JavaScript / TypeScript',
      'React / Next.js',
      'Astro.js',
      'Node.js',
      'PHP',
      'SQL',
    ],
  },
  {
    color: blueColor.color,
    tag: 'ToolBox',
    skills: ['Github', 'Figma', 'Slack', 'Postman', 'VScode'],
  },
  { color: greenColor.color, tag: 'UpComing', skills: ['Python', 'C', 'C++'] },
  {
    color: tagYellowColor.color,
    tag: 'More',
    skills: [
      'Agile methodology',
      'Teamwork',
      'Design skills',
      'Problem solving',
      'Trustworthiness',
    ],
  },
];
