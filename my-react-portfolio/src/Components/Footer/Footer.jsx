import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTxt}>
        <p className={styles.ticker}>
          Beckie Morton &#x2022; Fullstack Developer &#x2022; Beckie Morton
          &#x2022; Fullstack Developer &#x2022; Beckie Morton &#x2022; Fullstack
          Developer &#x2022; Beckie Morton &#x2022; Fullstack Developer &#x2022;
          Beckie Morton &#x2022;
        </p>
      </div>
    </div>
  );
};
