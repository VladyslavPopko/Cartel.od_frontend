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
      {errors.name && (
        <p className={styles.error}>Перевірте введене ім'я. Приклад: "Петро"</p>
      )}
      <input
        {...register("tel")}
        type="tel"
        placeholder="Введіть Ваш телефон"
        className={styles.input}
      />
      {errors.tel && (
        <p className={styles.error}>
          Перевірте введений номер телефону. Приклад: "+380505555555"
        </p>
      )}
      <input
        {...register("email")}
        type="email"
        placeholder="Введіть Ваш Email"
        className={styles.input}
      />
      {errors.email && (
        <p className={styles.error}>
          Перевірте введену пошту. Приклад: "email@gmail.com"
        </p>
      )}
    </div>
  );
};

export default Form;
