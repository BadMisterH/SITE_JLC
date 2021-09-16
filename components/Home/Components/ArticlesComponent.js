import { styles, DesignMaquette, Tech } from "../Import";
import Link from "next/link";

const ArticlesComponent = () => {
  return (
    <div className={styles.sectionFour}>
      <h1 style={{ width: "100vw" }} className={styles.titreSection}>
        ALLONS PLUS LOIN
      </h1>
      <div className={styles.container_Four}>
        <Link href="/Blog">
          <div className={styles.box_Four} style={{ cursor: "pointer" }}>
            <img className={styles.Img_box_four} src={Tech}></img>

            <h2 className={styles.titre_articles}>TITRE ARTICLE</h2>

            <p className={styles.description_four}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy{" "}
            </p>
            <p className={styles.suite}>Lire la suite...</p>
          </div>
        </Link>
        <Link href="/Blog">
          <div className={styles.box_Four} style={{ cursor: "pointer" }}>
            <img className={styles.Img_box_four} src={DesignMaquette}></img>

            <h2 className={styles.titre_articles}>TITRE ARTICLE</h2>

            <p className={styles.description_four}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy{" "}
            </p>
            <p className={styles.suite}>Lire la suite...</p>
          </div>
        </Link>
        <Link href="/Blog">
          <div className={styles.box_Four} style={{ cursor: "pointer" }}>
            <img className={styles.Img_box_four} src={Tech}></img>

            <h2 className={styles.titre_articles}>TITRE ARTICLE</h2>

            <p className={styles.description_four}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <p className={styles.suite}>Lire la suite...</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticlesComponent;
