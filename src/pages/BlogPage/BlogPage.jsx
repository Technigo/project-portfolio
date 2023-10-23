import styles from "./BlogPage.module.scss";
import { Footer } from "../../components/sections/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { ImageFrame } from "../../components/ui/ImageFrame";
import { Label } from "../../components/ui/Label";
import { primaryColorText, secondaryColorText, yellowColor } from "../../styles/styleVariable";
import { Title } from "../../components/ui/Title";
import { useParams } from "react-router-dom";
import { ScrollToTop } from "../../components/ui/ScrollToTop";

import { blogsData as data } from "../../statics/blogsData";
import { useEffect, useState } from "react";
import PageNotFound from "../PageNotFound/PageNotFound";
import { Loading } from "../../components/ui/Loading";

function BlogPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    data.forEach((obj, i) => {
      if (Object.values(obj).includes(Number(id))) setCurrentPost(obj);
      return;
    });
    setIsLoading(false);
  }, [id]);

  if (!currentPost) return <PageNotFound />;
  if (isLoading) return <Loading />;
  const { date, title, text, url, imagePath } = currentPost;
  return (
    <section className={styles.blog_page}>
      <ScrollToTop />
      <div className={styles.wave_box}></div>
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
          <div className={styles.text_box} lang="en">
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
