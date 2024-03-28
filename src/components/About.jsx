import styles from "./About.module.css";
import avatar from "../assets/avatar.jpeg";

const About = () => {
  return (
    <section className={styles.section} id="about">
      <p>Hi I&apos;m Wen Zhao</p>
      <h1 className={styles.frontend}>Frontend Developer</h1>
      <div className={styles.intro}>
        <div className={styles.avatarContainer}>
          <img className={styles.avatar} src={avatar} alt="profile image"></img>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti
          magnam expedita dolores ipsam blanditiis obcaecati nisi? Adipisci,
          doloremque mollitia.
        </p>
      </div>
    </section>
  );
};

export default About;
