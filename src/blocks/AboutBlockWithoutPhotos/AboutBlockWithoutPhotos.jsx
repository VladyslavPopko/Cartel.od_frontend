import styles from "./style.module.scss";
import Box from "../../components/Box/Box";
import PriceBlock from "../PriceBlock/PriceBlock";
import { memo } from "react";
const AboutBlockWithOutPhotos = ({
  radioId1,
  radioId2,
  radioId3,
  data,
  selected,
  addNotification,
  content,
}) => {
  const { subtitle_first_value, subtitle_second_value } = content;
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h2 className={styles.title}>
          Гарна новина для <span className={styles.select}>тебе</span>
        </h2>
        <h3 className={styles.subtitle}>
          замовляй декілька товарів та отримай додаткову знижку
        </h3>
        <div className={styles.text_item}>
          <p className={styles.text}>
            1+<span className={styles.select}>1</span> = Знижка
          </p>{" "}
          <Box value={subtitle_first_value} />
        </div>
        <div className={styles.text_item}>
          <p className={styles.text}>
            a <span className={styles.select}>2</span>+1 = ще більша знижка
          </p>
          <Box value={subtitle_second_value} />
        </div>
        <p className={styles.info}>
          *акція діє на будь який товар та додається одразу до кошика
        </p>

        <PriceBlock
          content={content}
          addNotification={addNotification}
          radioId1={radioId1}
          radioId2={radioId2}
          radioId3={radioId3}
          data={data}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default memo(AboutBlockWithOutPhotos);
