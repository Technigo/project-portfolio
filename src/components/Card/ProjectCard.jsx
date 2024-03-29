import { Image } from "../Image/Image";

export const ProjectCard = ({ image }) => {
  return (
    <article>
      <Image src={image} />
      {/* <TextBox title={name} /> */}
    </article>
  );
};
