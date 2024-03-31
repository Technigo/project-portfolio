import styles from "./About.module.css";
import avatar from "../../public/assets/avatar.jpeg";

const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <p className={styles.myName}>Hi I&apos;m Wen Zhao</p>
        <h1 className={styles.frontend}>Frontend Developer</h1>
        <div className={styles.intro}>
          <div className={styles.avatarContainer}>
            <img
              className={styles.avatar}
              src={avatar}
              alt="profile image"
            ></img>
          </div>
          <p className={styles.description}>
            Wen is a budding junior frontend developer passionate about crafting
            seamless user experiences on web and mobile. With a strong
            foundation in HTML, CSS, and JavaScript, I thrive on the challenges
            of turning concepts into interactive and visually appealing web
            applications. Whether it&apos;s experimenting with new frameworks
            like React or diving into responsive design principles, I&apos;m
            constantly eager to learn and grow in this dynamic field. Let&apos;s
            build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
