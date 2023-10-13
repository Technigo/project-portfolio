import styles from "./BlogPage.module.scss";
import { Footer } from "../../components/sections/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { ImageFrame } from "../../components/ui/ImageFrame";
import { Heading } from "../../components/ui/Heading";
import { Label } from "../../components/ui/Label";
import { primaryColorText, secondaryColorText, yellowColor } from "../../styles/styleVariable";
import { Title } from "../../components/ui/Title";
import { useParams } from "react-router-dom";
import { Home } from "../Home";

import { blogsData as data } from "../../statics/blogsData";
import { useEffect, useMemo, useState } from "react";

function BlogPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    data.forEach((obj, i) => {
      if (Object.values(obj).includes(Number(id))) setCurrentPost(obj);
      return;
    });
  }, [id]);
  if (!currentPost) return <Home />;
  const { date, title, text, url, imagePath } = currentPost;
  return (
    <section className={styles.blog_page}>
      <div className={styles.inner_blog}>
        <div className={styles.blog_content}>
          <div className={styles.image_box}>
            <div className={styles.image_wrapper}>
              <ImageFrame
                imagePath={imagePath}
                borderColor={secondaryColorText.color}
                description={`image of ${title}`}
              />
            </div>
          </div>
          <div className={styles.text_box}>
            <Title text={title} />
            <Label labelText={date} />
            <p>{text}</p>
          </div>
        </div>
        <div className={styles.btn_wrapper}>
          <Button
            onclick={() => navigate(-1)}
            hoverColor={yellowColor.color}
            iconPath="/icons/arrow.svg"
            borderColor={secondaryColorText.color}
          ></Button>
        </div>
      </div>
      <Footer bgColor={primaryColorText.color} />
    </section>
  );
}

export default BlogPage;
