import { Heading } from "../../ui/Heading";
import styles from "./Blog.module.scss";
import { secondaryColorText } from "../../../styles/styleVariable";
import { ImageFrame } from "../../ui/ImageFrame";
import { Label } from "../../ui/Label";
import { Title } from "../../ui/Title";
import { Button } from "../../ui/Button";

export default function Blog() {
  return (
    <>
      <div className={styles.wave_box}>
        {Array.from({ length: 10 }, (_) => (
          <>
            <svg
              className={styles.wave}
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="11"
              viewBox="0 0 175 11"
              fill="none"
            >
              <path
                d="M1.63306 5.2453C8.50572 2.25157 14.2329 2.25157 18.8147 5.2453C23.3965 8.23904 29.1237 8.23904 35.9964 5.2453C42.869 2.25157 48.5962 2.25157 53.178 5.2453C57.7598 8.23904 63.487 8.23904 70.3597 5.2453C77.2323 2.25157 82.9595 2.25157 87.5413 5.2453C92.1231 8.23904 97.8503 8.23904 104.723 5.2453C111.596 2.25157 117.323 2.25157 121.905 5.2453C126.486 8.23904 132.214 8.23904 139.086 5.2453C145.959 2.25157 151.686 2.25157 156.268 5.2453C160.85 8.23904 166.577 8.23904 173.45 5.2453"
                stroke="#FF4575"
                strokeWidth="5.99997"
              />
            </svg>
          </>
        ))}
      </div>

      <section className={styles.blog_section}>
        <div className={styles.blog_inner}>
          <Heading color={secondaryColorText}>My Words</Heading>
          <div className={styles.blogs_wrapper}>
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </section>
    </>
  );
}

function Post() {
  return (
    <article className={styles.post_card}>
      <ImageFrame imagePath="/images/berlin.png" borderColor={secondaryColorText} />
      <Label labelText="Sep 2023" />
      <Title
        text="How to stop being scared:
Learning to love code"
      />
      <p className={styles.post_text}>
        Writing code is less about “just working”. Instead, it’s much more about creativity. It’s
        similar to creative writing in that the author architecting a story must use an assortment
        of tools and components (i.e., content) in a way to satisfy a particular objective.
      </p>
      <Button text="Read Article" iconPath="/icons/doc.png" url="#" background="#fff" />
    </article>
  );
}
