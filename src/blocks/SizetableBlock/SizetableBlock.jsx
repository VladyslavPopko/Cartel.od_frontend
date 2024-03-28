import styles from "./style.module.scss";
import table from "../../img/SizetableBlock/table.jpg";

const SizetableBlock = ({ setIsVisibleSizetable, content }) => {
  const { title } = content;
  const handleSizetable = () => {
    setIsVisibleSizetable(true);
  };
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <img
        draggable="false"
        onClick={handleSizetable}
        className={styles.img}
        src={table}
        alt=""
      />
    </div>
  );
};

export default SizetableBlock;
