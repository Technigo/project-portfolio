import { Link } from "react-router-dom";

import { Heading } from "../../ui/Heading";
import { ImageFrame } from "../../ui/ImageFrame";
import { Label } from "../../ui/Label";
import { Title } from "../../ui/Title";
import { Button } from "../../ui/Button";
import { ObserverWrapper } from "../../ui/ObserverWrapper";
import { secondaryColorText, yellowColor } from "../../../styles/styleVariable";
import { blogsData as data } from "../../../statics/blogsData";

import styles from "./Blog.module.scss";

export default function Blog() {
  return (
    <section className={styles.blog_section}>
      <ObserverWrapper>
        <div className={styles.wave_box}></div>
        <div className={styles.blog_inner}>
          <Heading color={secondaryColorText}>My Words</Heading>
          <div className={styles.blogs_wrapper}>
            {data.map((blog) => (
              <Post blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </ObserverWrapper>
    </section>
  );
}

function Post({ blog }) {
  const { introText, title, date, url, imagePath, imageDescription, id } = blog;
  return (
    <article className={styles.post_card}>
      <div className={styles.image_wrapper}>
        <ImageFrame
          imagePath={imagePath}
          borderColor={secondaryColorText.color}
          description={imageDescription}
        />
      </div>
      <Label labelText={date} />
      <Title text={title} />
      <p className={styles.post_text}>{introText}...</p>
      <Link to={`/blog/${id}/`}>
        <Button
          iconPath="/icons/doc.svg"
          background="#fff"
          hoverColor={yellowColor.color}
          altText="read article icon image"
        >
          Read Article
        </Button>
      </Link>
    </article>
  );
}
