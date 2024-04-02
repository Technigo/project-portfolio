
export const Image = () => {
const profileImageBackUp = "../assets/kat.jpeg";
const profileImage = "../assets/kat.webp";
const style ="profile-image";

return (
  <picture className={style}>
    <source srcSet={profileImage} type="image/webp" />
    <source srcSet={profileImageBackUp} type="image/png" />
    <img className="profile-image wide" src={profileImageBackUp} alt="Kathinka Sewell" />
  </picture>
)
}

export default Image;