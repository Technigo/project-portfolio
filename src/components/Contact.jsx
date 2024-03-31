import styles from "./Contact.module.css";
import Lottie from "lottie-react";
import toTop from "../animation/to-top.json";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.descr}>
        <h2 className={styles.title}>Let&apos;s work together</h2>
        <p className={styles.subtitle}>
          Please fill out the form and I will reply asap!
        </p>
      </div>
      <form name="contact form" className={styles.form}>
        <label className={styles.label}>
          Name
          <input className={styles.text} type="text"></input>
        </label>
        <label className={styles.label}>
          Email
          <input className={styles.email} type="email"></input>
        </label>
        <label className={styles.label}>
          Message
          <textarea
            className={styles.message}
            placeholder="Type your message here"
          ></textarea>
        </label>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
      <Lottie
        animationData={toTop}
        loop={true}
        className={styles.toTop}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        title="Back to top"
      />
    </section>
  );
};

export default Contact;
