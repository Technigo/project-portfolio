import avatar from "../../public/assets/avatar.jpeg";
import styles from "./Avatar.module.css";

const Avatar = () => {
  return (
    <div className={styles.avatarContainer}>
      <img className={styles.avatar} src={avatar} alt="profile image"></img>
    </div>
  );
};

export default Avatar;
