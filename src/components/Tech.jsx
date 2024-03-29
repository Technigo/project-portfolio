import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNpm,
  SiPostman,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const techMapping = [
  { id: "html", component: SiHtml5 },
  { id: "css", component: SiCss3 },
  { id: "javascript", component: SiJavascript },
  { id: "react", component: SiReact },
  { id: "npm", component: SiNpm },
  { id: "postman", component: SiPostman },
  { id: "github", component: SiGithub },
  { id: "figma", component: SiFigma },
];

export const Tech = () => {
  return (
    <section>
      <div>
        <h2>Tech</h2>
      </div>
      <div>
        {techMapping.map(({ id, component: Icon }) => (
          <div key={id}>
            <Icon />
          </div>
        ))}
      </div>
    </section>
  );
};
