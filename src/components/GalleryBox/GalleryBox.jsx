import { memo } from "react";
import styles from "./style.module.scss";

const GalleryBox = (props) => {
  const { img } = props;
  return <img draggable="false" className={styles.img} src={img} />;
};

export default memo(GalleryBox);
