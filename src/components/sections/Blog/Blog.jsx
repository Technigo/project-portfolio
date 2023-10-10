import { Heading } from "../../ui/Heading";
import { ImageFrame } from "../../ui/ImageFrame";
import { Label } from "../../ui/Label";
import { Title } from "../../ui/Title";
import { Button } from "../../ui/Button";
import { secondaryColorText, yellowColor } from "../../../styles/styleVariable";
import { blogsData as data } from "../../../statics/blogsData";

import styles from "./Blog.module.scss";

export default function Blog() {
  return (
    <section className={styles.blog_section}>
      <div className={styles.wave_box}></div>
      <div className={styles.blog_inner}>
        <Heading color={secondaryColorText}>My Words</Heading>
        <div className={styles.blogs_wrapper}>
          {data.map((blog) => (
            <Post blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Post component (mapping a post data from blogsData array)
function Post({ blog }) {
  const { text, title, date, url, imagePath, imageDescription } = blog;
  return (
    <article className={styles.post_card}>
      <ImageFrame
        imagePath={imagePath}
        borderColor={secondaryColorText}
        description={imageDescription}
      />
      <Label labelText={date} />
      <Title text={title} />
      <p className={styles.post_text}>{text}</p>
      <Button
        text="Read Article"
        iconPath="/icons/doc.png"
        url={url}
        background="#fff"
        hoverColor={yellowColor.color}
      />
    </article>
  );
}
