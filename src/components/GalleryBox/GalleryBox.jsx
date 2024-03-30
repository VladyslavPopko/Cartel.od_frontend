import { memo } from "react";
import styles from "./style.module.scss";

const GalleryBox = (props) => {
  const { img } = props;
  return (
    <div className={styles.section}>
      <img draggable="false" className={styles.img} src={img} />
    </div>
  );
};

export default memo(GalleryBox);
