import styles from "./style.module.scss";

const AdvantageBox = (props) => {
  const { img, title, text } = props;
  return (
    <div className={styles.section}>
      <img draggable="false" className={styles.img} src={img} alt="" />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.text}>{text}</h4>
      </div>
    </div>
  );
};

export default AdvantageBox;
