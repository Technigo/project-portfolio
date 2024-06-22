
export const Image = () => {
const profileImageBackUp = "../assets/kat.jpeg";
const profileImage = "../assets/kat.webp";

return (
  <picture>
    <source srcSet={profileImage} type="image/webp" />
    <source srcSet={profileImageBackUp} type="image/png" />
    <img className="profile-image" src={profileImageBackUp} alt="Kathinka Sewell" />
  </picture>
)
}

export default Image;