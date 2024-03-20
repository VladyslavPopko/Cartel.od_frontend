import styles from "./style.module.scss";
import img1 from "../../img/AboutBlock/img1.png"
import img2 from "../../img/AboutBlock/img2.png"
const AboutBlock = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>
            Замовляй комплекти<br></br>
            СОРОЧОК з додатковою знижкою
          </p>
          <div className={styles.list}>
            <div className={styles.list_item}><img src={img1} alt="" /></div>
            <div className={styles.list_item}>пРИ ЗАМОЛВЕННІ 2 СОРОЧОК ЗНИЖКА: </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
