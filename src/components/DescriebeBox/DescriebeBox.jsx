import styles from "./style.module.scss";

const DescriebeBox = (props) => {
  const { img, text } = props;
  return (
    <div className={styles.box}>
      <img draggable="false" className={styles.img} src={img} alt="" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default DescriebeBox;
