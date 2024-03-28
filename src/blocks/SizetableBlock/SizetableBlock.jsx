import styles from "./style.module.scss";
import table from "../../img/SizetableBlock/table.jpg";

const SizetableBlock = ({ setIsVisibleSizetable }) => {
  const handleSizetable = () => {
    setIsVisibleSizetable(true);
  }
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Таблиця розмірів</h2>
      <img draggable="false" onClick={handleSizetable} className={styles.img} src={table} alt="" />
    </div>
  );
};

export default SizetableBlock;
