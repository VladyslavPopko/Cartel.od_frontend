import styles from "./style.module.scss";

const Form = () => {
  return (
    <div className={styles.section}>
      <input type="text" placeholder="П.І.Б" className={styles.input} />
      <input type="text" placeholder="Введіть Ваш телефон" className={styles.input} />
      <input type="text" placeholder="Введіть Ваш Email" className={styles.input} />
      <input type="text" placeholder="Оберіть розмір" className={styles.input} />
    </div>
  );
};

export default Form;
