import styles from "./style.module.scss";
import cn from "classnames";

const Radio = ({ radioId1, radioId2, radioId3, register, errors, content }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const {
    radio_first,
    radio_second_1,
    radio_second_2,
    radio_second_3,
    radio_second_4,
    radio_second_5,
    radio_third_1,
    radio_third_2,
    radio_third_3,
    radio_third_4,
    radio_third_5,
  } = content;
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className={cn(styles.form, errors && styles.error)}
    >
      <div className={styles.form_section}>
        <input
          className={styles.input}
          type="radio"
          {...register("value")}
          id={radioId1}
          value="1"
        />
        <label className={styles.label} htmlFor={radioId1}>
          {radio_first}
        </label>
      </div>
      <div className={styles.fomrm_section}>
        <input
          className={styles.input}
          type="radio"
          {...register("value")}
          id={radioId2}
          value="2"
        />
        <label className={styles.label} htmlFor={radioId2}>
          {radio_second_1}{" "}
          <span className={styles.select}>{radio_second_2}</span>
          {radio_second_3}
          <span className={styles.select}>{radio_second_4}</span>{" "}
          {radio_second_5}
        </label>
      </div>
      <div className={styles.fomrm_section}>
        <input
          className={styles.input}
          type="radio"
          {...register("value")}
          id={radioId3}
          value="3"
        />
        <label className={styles.label} htmlFor={radioId3}>
          {radio_third_1}
          <span className={styles.select}>{radio_third_2}</span>
          {radio_third_3}
          <span className={styles.select}>{radio_third_4}</span>{radio_third_5}
        </label>
      </div>
    </form>
  );
};

export default Radio;
