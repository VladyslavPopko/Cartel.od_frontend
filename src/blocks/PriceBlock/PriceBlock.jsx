import Button from "../../components/Button/Button";
import Radio from "../../components/Radio/Radio";
import Time from "../../components/Time/Time";
import styles from "./style.module.scss";
import img1 from "../../img/PriceBlock/arrow.svg";
import bg from "../../img/PriceBlock/bg.png";
const PriceBlock = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section_content}>
        <img className={styles.bg} src={bg} alt="" />
        <Radio />

        <p className={styles.text}>До кінця АКЦІЇ залишилось:</p>
        <Time />
        <Button
          text="оформити ЗАМОВлення"
          className={styles.button}
          type="submit"
        />
        <div className={styles.galery}>
          <a className={styles.link} href="#">
            Галерея
          </a>
          <a href="#">
            <img className={styles.img} src={img1} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
