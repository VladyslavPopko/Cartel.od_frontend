import { memo } from "react";
import styles from "./style.module.scss";

const SizetableBlock = ({ setIsVisibleSizetable, content }) => {
  const { title, img } = content;
  const handleSizetable = () => {
    setIsVisibleSizetable(true);
  };
  return (
    <div className={styles.section}>
      <hr className={styles.hr} />
      <div className="">
        <h2 className={styles.title}>{title}</h2>
        <img
          draggable="false"
          onClick={handleSizetable}
          className={styles.img}
          src={img}
          alt=""
        />
        <p className={styles.text}><span className={styles.selected}>ВАЖЛИВО!!!</span> Якщо виникли труднощі з вибором розміру, узгодьте це з менеджером</p>
      </div>

      <hr className={styles.hr} />
    </div>
  );
};

export default memo(SizetableBlock);
