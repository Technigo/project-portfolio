
export const Image = () => {
const profileImageBackUp = "../assets/kat.jpeg";
const profileImage = "../assets/kat.webp";
const style ="profile-image";

return (
  <picture className={style}>
<source srcSet={profileImage}
  alt="Kathinka Sewell" type="image/webp" />
<source srcSet={profileImageBackUp}
  alt="Kathinka Sewell" type="image/png" />
<img className="profile-image wide"
  src={profileImageBackUp}
  alt="Kathinka Sewell"
/>
</picture>
)
}

export default Image;