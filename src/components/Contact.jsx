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
    </section>
  );
};

export default Contact;
