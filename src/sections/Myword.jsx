import wavy from "/images/divider.png";
import styles from "../styling/myword.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";
import data from "../translations/en.json";

const list = data.mywordList.article;

const buttonStyle = {
  border: "none",
  background: "none",
  width: "30px",
};
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <img
        src="/icons/left-arrow.png"
        alt="left arrow"
        style={{ width: "30px" }}
      />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <img
        src="/icons/double-right.png"
        alt="right arrow"
        style={{ width: "30px" }}
      />
    </button>
  ),
};
export const Myword = () => {
  const { t } = useTranslation();
  const articles = t("mywordList.article", { returnObjects: true });
  const slideImages = list.map((myword) => myword.image);

  return (
    <div className={styles.myword_container}>
      <h1>{t("mywordList.title")}</h1>

      <article className={styles.frame}>
        <Slide
          images={slideImages}
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          autoplay={false}
          {...properties}
        >
          {articles.map((myword) => (
            <div key={myword.id} className={styles.article_wrapper}>
              <img src={myword.image} alt="article's picture" />
              <p>{t(myword.time)}</p>
              <h3>{t(myword.title)}</h3>
              <h5>{t(myword.text)}</h5>
              <a href={myword.link} target="_blank" rel="noopener noreferrer">
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M14 33.0609C14 35.655 15.2945 37 17.7901 37H30.2099C32.7056 37 34 35.655 34 33.0609V14.939C34 12.357 32.7056 11 30.2099 11H17.7901C15.2945 11 14 12.357 14 14.939V33.0609ZM16.2857 32.9168V15.0831C16.2857 13.9663 16.8455 13.3538 17.9767 13.3538H30.0117C31.1428 13.3538 31.7144 13.9663 31.7144 15.0831V32.9168C31.7144 34.0337 31.1428 34.6462 30.0117 34.6462H17.9767C16.8455 34.6462 16.2857 34.0337 16.2857 32.9168ZM19.7376 18.2896H28.274C28.6939 18.2896 29.0204 17.9533 29.0204 17.521C29.0204 17.1007 28.6939 16.7764 28.274 16.7764H19.7376C19.3061 16.7764 18.9796 17.1007 18.9796 17.521C18.9796 17.9533 19.3061 18.2896 19.7376 18.2896ZM19.7376 22.3968H28.274C28.6939 22.3968 29.0204 22.0605 29.0204 21.6282C29.0204 21.2078 28.6939 20.8836 28.274 20.8836H19.7376C19.3061 20.8836 18.9796 21.2078 18.9796 21.6282C18.9796 22.0605 19.3061 22.3968 19.7376 22.3968ZM19.7376 26.5039H23.8659C24.2857 26.5039 24.6006 26.1797 24.6006 25.7593C24.6006 25.327 24.2857 24.9787 23.8659 24.9787H19.7376C19.3061 24.9787 18.9796 25.327 18.9796 25.7593C18.9796 26.1797 19.3061 26.5039 19.7376 26.5039Z"
                      fill="currentColor"
                    />
                  </svg>
                  {t("mywordList.button")}
                </button>
              </a>
            </div>
          ))}
        </Slide>
      </article>
    </div>
  );
};
