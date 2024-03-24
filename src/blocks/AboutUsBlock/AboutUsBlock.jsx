import AboutUsBox from "../../components/AboutUsBox/AboutUsBox";
import styles from "./style.module.scss";
import img1 from "../../img/AboutUsBlock/img1.svg";
import img2 from "../../img/AboutUsBlock/img2.svg";

const AboutUsBlock = () => {
  return (
    <div className={styles.section}>
      <AboutUsBox img={img1} title="100" text="Замовлень" />
      <AboutUsBox img={img2} title="60" text="Відгуків" />
    </div>
  );
};

export default AboutUsBlock;
