import styles from "./style.module.scss";
import img1 from "../../img/DescriptionBlock/img1.svg";
import img2 from "../../img/DescriptionBlock/img2.svg";
import img3 from "../../img/DescriptionBlock/img3.svg";
import img4 from "../../img/DescriptionBlock/img4.svg";
import DescriptionItem from "../../components/DescriptionItem/DescriptionItem";

const DescriptionBlock = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section_content}>
        <h2 className={styles.section_title}>Опис товару</h2>
        <div className={styles.section_list}>
          <DescriptionItem
            img={img1}
            logotext="Матеріал бавовна"
            title="Преміум тканина :"
            subtitle="70% Бавовна 30% Поліестер "
            text="Тканина твід - це витончений та вишуканий матеріал, що поєднує в собі класичну елегантність і комфорт сучасності. Її м'яка текстура дарує відчуття приємності при контакті з шкірою, а також забезпечує відмінну вентиляцію та зносостійкість."
          />
          <DescriptionItem
            img={img2}
            logotext="Якісний пошив"
            title="Країна виробник: Турречина"
            text="Тканина, виготовлена в Туреччині, вражає своєю вишуканістю та якістю, яка є відбитком майстерності турецьких текстильних виробників. Комбінація традиційних технологій та сучасного дизайну робить її неперевершеним вибором для вишуканих модних виробів."
          />
          <DescriptionItem
            img={img3}
            logotext="Зручний крій"
            title="Вільний крій"
            text="Колекція вільного крою пропонує зручність і стиль у щоденному гардеробі. Розміри від S до XL, кожен зможе знайти ідеально сидячу модель, яка підкреслить їхню індивідуальність."
          />
          <DescriptionItem
            img={img4}
            logotext="Приємна тканина"
            title="Щільна тепла сорочка"
            subtitle="Сезон : весна/осінь"
            text="Ця щільна тепла сорочка ідеально підходить для весняних та осінніх днів, коли потрібно трохи більше тепла, але ще не час для важких курток. Виготовлена з високоякісного матеріалу, вона забезпечує комфорт і стиль одночасно."
          />
          
        </div>
      </div>
    </div>
  );
};

export default DescriptionBlock;
