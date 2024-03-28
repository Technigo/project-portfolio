import styles from "./Contact.module.css";

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
        <label>
          <input type="text" placeholder="Name"></input>
        </label>
        <label>
          <input type="email" placeholder="Email"></input>
        </label>
        <label>
          <textarea placeholder="Type your message here"></textarea>
        </label>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
