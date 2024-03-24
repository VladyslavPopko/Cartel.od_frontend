import GalleryBox from "../../components/GalleryBox/GalleryBox";
import styles from "./style.module.scss";
import img1 from "../../img/GalleryBlock/img1.jpg";
import img2 from "../../img/GalleryBlock/img2.jpg";
import img3 from "../../img/GalleryBlock/img3.jpg";
import img4 from "../../img/GalleryBlock/img4.jpg";

const GalleryBlock = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.list}>
        <GalleryBox img={img1} />
        <GalleryBox img={img2} />
        <GalleryBox img={img3} />
        <GalleryBox img={img4} />
      </div>
    </div>
  );
};

export default GalleryBlock;
