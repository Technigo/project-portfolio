import { Footer } from "../../components/sections/Footer";
import styles from "./PageNotFound.module.scss";
function PageNotFound() {
  return (
    <>
      <div className={styles.pagenotfound}>
        <div className={styles.inner_page}>
          <h2>Page not found</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
