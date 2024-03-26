import styles from "./style.module.scss";

const Form = ({ register, errors }) => {
  return (
    <div className={styles.section}>
      <input
        {...register("name")}
        type="text"
        placeholder="П.І.Б"
        className={styles.input}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <input
        {...register("tel")}
        type="tel"
        placeholder="Введіть Ваш телефон"
        className={styles.input}
      />
      {errors.tel && <p>{errors.tel.message}</p>}
      <input
        {...register("email")}
        type="email"
        placeholder="Введіть Ваш Email"
        className={styles.input}
      />
    </div>
  );
};

export default Form;
