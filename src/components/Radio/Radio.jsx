import Button from "../Button/Button";
import styles from "./style.module.scss";

const Radio = ({radioId1, radioId2,radioId3}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form action="" onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fomrm_section}>
        <input
          className={styles.input}
          type="radio"
          name="radio"
          id={radioId1}
          value="999"
        />
        <label className={styles.label} htmlFor={radioId1}>
          1 Сорочка 999 ₴{" "}
        </label>
      </div>
      <div className={styles.fomrm_section}>
        <input
          className={styles.input}
          type="radio"
          name="radio"
          id={radioId2}
          value="1699"
        />
        <label className={styles.label} htmlFor={radioId2}>
          2 сорочки <span className={styles.select}> 1 699</span> ₴ (додаткова
          економія <span className={styles.select}>299</span> ₴)
        </label>
      </div>
      <div className={styles.fomrm_section}>
        <input
          className={styles.input}
          type="radio"
          name="radio"
          id={radioId3}
          value="1699"
        />
        <label className={styles.label} htmlFor={radioId3}>
          3 сорочки<span className={styles.select}> 2 399</span> ₴ (додаткова
          економія <span className={styles.select}>598</span> ₴)
        </label>
      </div>
    </form>
  );
};

export default Radio;
