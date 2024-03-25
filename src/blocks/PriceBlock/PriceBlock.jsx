import Button from "../../components/Button/Button";
import Radio from "../../components/Radio/Radio";
import Time from "../../components/Time/Time";
import styles from "./style.module.scss";

const PriceBlock = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section_content}>
        <Radio />

        <p className={styles.text}>До кінця АКЦІЇ залишилось:</p>
        <Time />
        <Button
          text="оформити ЗАМОВлення"
          className={styles.button}
          type="submit"
        />

       
      </div>
    </div>
  );
};

export default PriceBlock;
