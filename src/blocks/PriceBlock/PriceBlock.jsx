import Button from "../../components/Button/Button";
import Radio from "../../components/Radio/Radio";
import Time from "../../components/Time/Time";
import styles from "./style.module.scss";

const PriceBlock = ({radioId1, radioId2,radioId3}) => {
  return (
    <div className={styles.section}>
      <div className={styles.section_content}>
        <Radio radioId1={radioId1} radioId2={radioId2} radioId3={radioId3}/>

        <p className={styles.text}>До кінця АКЦІЇ залишилось:</p>
        <Time />
        <Button
          text="ДОДАТИ У КОШИК"
          className={styles.button}
          type="submit"
        />

       
      </div>
    </div>
  );
};

export default PriceBlock;
