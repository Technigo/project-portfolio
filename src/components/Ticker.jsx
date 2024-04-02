import styles from './Ticker.module.css';

export const Ticker = () => {
  const repeatedText = new Array(200).fill().map((_, index) => (
    <span key={index}>Arnau Vidal • Frontend Developer •</span>
  ));

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerScroll}>
        <div className={styles.LeftToRight}>
          {repeatedText}
        </div>
      </div>
    </div>
  );
}