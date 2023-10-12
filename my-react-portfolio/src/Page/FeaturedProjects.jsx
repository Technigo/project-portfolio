import Headlines from "../Components/Headlines";
import Photo from "../Components/Photo";

export const FeaturedProjects = () => {
  return (
    <div>
      <Headlines title="Featured Projects" />
      <Photo
        source="/src/assets/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.avif"
        color="blue"
        size="sqaure"
      />
    </div>
  );
};

export default FeaturedProjects;
