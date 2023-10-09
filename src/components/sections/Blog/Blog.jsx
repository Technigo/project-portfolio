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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="11"
        width="100%"
        viewBox="0 0 176 11"
        fill="none"
        className={styles.wave}
      >
        <path
          d="M2 5.2453C8.87266 2.25157 14.5999 2.25157 19.1816 5.2453C23.7634 8.23904 29.4906 8.23904 36.3633 5.2453C43.236 2.25157 48.9632 2.25157 53.5449 5.2453C58.1267 8.23904 63.8539 8.23904 70.7266 5.2453C77.5993 2.25157 83.3265 2.25157 87.9082 5.2453C92.49 8.23904 98.2172 8.23904 105.09 5.2453C111.963 2.25157 117.69 2.25157 122.272 5.2453C126.853 8.23904 132.581 8.23904 139.453 5.2453C146.326 2.25157 152.053 2.25157 156.635 5.2453C161.217 8.23904 166.944 8.23904 173.816 5.2453"
          stroke="#FF4575"
          stroke-width="5.99997"
          width="100%"
        />
      </svg>
      <section className={styles.blog_section}>
        <Heading color={secondaryColorText}>My Words</Heading>
        <div className={styles.inner_blog}>
          <Post />
          <Post />
          <Post />
          <Post />
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
