import description_item1_logo from "../../img/_Landliz_Drop/Landliz_Drop71/descriptionImg1.svg";
import description_item2_logo from "../../img/_Landliz_Drop/Landliz_Drop71/descriptionImg2.svg";
import description_item3_logo from "../../img/_Landliz_Drop/Landliz_Drop71/descriptionImg3.svg";
import description_item4_logo from "../../img/_Landliz_Drop/Landliz_Drop71/descriptionImg4.svg";

//import aboutusItem1Img from "../../img/_Landliz_Drop/Landliz_Drop71/aboutUsImg1.svg";
//import aboutusItem2Img from "../../img/_Landliz_Drop/Landliz_Drop71/aboutUsImg2.svg";

import reviewItem1Img from "../../img/_Landliz_Drop/Landliz_Drop71/reviewImg1.png";
import reviewItem2Img from "../../img/_Landliz_Drop/Landliz_Drop71/reviewImg2.png";
import reviewItem3Img from "../../img/_Landliz_Drop/Landliz_Drop71/reviewImg3.png";

// import advantageItem1Img from "../../img/_Landliz_Drop/Landliz_Drop71/advantageImg1.svg";
// import advantageItem2Img from "../../img/_Landliz_Drop/Landliz_Drop71/advantageImg2.svg";
// import advantageItem3Img from "../../img/_Landliz_Drop/Landliz_Drop71/advantageImg3.svg";
// import advantageItem4Img from "../../img/_Landliz_Drop/Landliz_Drop71/advantageImg4.svg";
// import advantageItem5Img from "../../img/_Landliz_Drop/Landliz_Drop71/advantageImg5.svg";
// import advantageItem6Img from "../../img/_Landliz_Drop/Landliz_Drop71/advantageImg6.svg";

//import table from "../../img/_Landliz_Drop/Landliz_Drop71/table.jpg";

const price = 999; // необходимо для формулы высчета скидки за несколько товаров

export const CONTENT = {
  sizeArray: [
    { id: 1, value: "S" },
    { id: 2, value: "M" },
    { id: 3, value: "L" },
    { id: 4, value: "XL" },
  ],
  contentHero: {
    price: "999",
    old_price: "1 299",
    title: "Комплект KANT",
    // subtitle: "",
    footer_text: "втілення якості та стилю",
  },
  contentAbout: {
    // title: "Замовляй комплекти",
    // second_title: "СОРОЧОК з додатковою знижкою",
    // subtitle_first_img: aboutImg1,
    // subtitle_second_img: aboutImg2,
    // subtitle_first_text1: "пРИ ЗАМОЛВЕННІ ",
    // subtitle_first_text2: "2 СОРОЧОК",
    // subtitle_first_text3: " ЗНИЖКА:",
    // subtitle_first_old_price: "1 998 ₴",
    // subtitle_first_price: "1 699 ₴",
    subtitle_first_value: "-10%",
    // subtitle_second_text1: "пРИ ЗАМОЛВЕННІ ",
    // subtitle_second_text2: "3 СОРОЧОК",
    // subtitle_second_text3: " ЗНИЖКА:",
    // subtitle_second_old_price: "2 997 ₴",
    // subtitle_second_price: "2 399 ₴",
    subtitle_second_value: "-15%",
    radio_first: `1 комлпект ${price} ₴`,
    radio_second_1: "2 комлпекта ",
    radio_second_2: Math.round(price * 2 * 0.9),
    radio_second_3: " ₴ (економія ",
    radio_second_4: Math.round(price * 2) - Math.round(price * 2 * 0.9),
    radio_second_5: " ₴)",
    radio_third_1: "3 комлпекта ",
    radio_third_2: Math.round(price * 3 * 0.85),
    radio_third_3: " ₴ (економія ",
    radio_third_4: Math.round(price * 3) - Math.round(price * 3 * 0.85),
    radio_third_5: " ₴)",
  },
  contentDesciption: {
    title: "Опис товару",
    item1_logo: description_item1_logo,
    item1_logotext: "Зручний крій",
    item1_title: "Максимальний комфорт у кожному виробі",
    // item1_subtitle: "70% Бавовна 30% Поліестер ",
    item1_text:
      "Наша колекція одягу дозволяє вам насолоджуватися активним способом життя, не відчуваючи дискомфорту. Зручний крій ідеально підлаштовується під ваші форми, надаючи повну свободу рухів під час будь-якої активності.",
    item2_logo: description_item2_logo,
    item2_logotext: "Якісний пошив",
    item2_title: "Професійна увага до кожної деталі",
    item2_text:
      "Наша команда професіоналів забезпечує бездоганний пошив кожного виробу. Кожен шов, кожен відріз тканини ретельно обробляються, щоб забезпечити максимальну міцність та довговічність.",
    item3_logo: description_item3_logo,
    item3_logotext: "Матеріал бавовна",
    item3_title: "Лише найкращі матеріали для вашого комфорту",
    item3_text:
      "Ми використовуємо тільки найпрестижніші тканини, які надають нашому одягу особливий шар елегантності та комфорту. Вони м'які на дотик, дихають і забезпечують оптимальну вентиляцію під час активних занять.",
    item4_logo: description_item4_logo,
    item4_logotext: "Приємна тканина",
    item4_title: "М'якість і ніжність",
    // item4_subtitle: "Сезон : весна/осінь",
    item4_text:
      "Наші вироби виготовлені з тканин, які дбайливо обрані для їх м'якості та приємної текстури. Це дозволяє вам відчувати себе комфортно та зручно в будь-якій ситуації.",
  },
  contentAboutUs: {
    //item1_img1: aboutusItem1Img,
    item1_title: "1000",
    item1_text: "Замовлень",
    item2_title: "300",
    item2_text: "Відгуків",
   // item2_img1: aboutusItem2Img,
  },
  contentReview: {
    title: "Відгуки:",
    item1_img1: reviewItem1Img,
    item2_img1: reviewItem2Img,
    item3_img1: reviewItem3Img,
    item1_name: "Олег",
    item1_text: "Гарний, комфортний комплект,",
    item2_name: "Влад",
    item2_text: "Тканина дихає, не жарко",
    item3_name: "Кирило",
    item3_text: "Якісний матеріал.",
  },
  contentGallery: {
    title: "Галерея",
  },
  contentSizeTable: {
    title: "Таблиця розмірів",
    //img: table,
  },
  contentAdvantage: {
    title: "Наші переваги:",
   // item1_img1: advantageItem1Img,
    //item2_img1: advantageItem2Img,
    //item3_img1: advantageItem3Img,
    //item4_img1: advantageItem4Img,
    //item5_img1: advantageItem5Img,
    //item6_img1: advantageItem6Img,
    item1_title: "Зручність",
    item1_text:
      "Весь одяг створюється з використанням високоякісних матеріалів, що робить його надзвичайно м'яким та еластичним.",
    item2_title: "Якість",
    item2_text:
      "Під час виготовлення одягу використовуються тільки найвищої якості матеріали і тканини. Виробництво проходить строгий контроль.",
    item3_title: "Практичність",
    item3_text:
      "Тканина витримує багаторазові прання, зберігаючи свою початкову якість, насичений колір і не втрачає свою барвистість.",
    item4_title: "Швидка доставка",
    item4_text: "Строк доставки не перевищує 1-2 днів з моменту замовлення.",
    item5_title: "Захист покупців",
    item5_text:
      "Ви маєте право повернути придбаний товар протягом 14 днів з дати покупки.",
    item6_title: "Ніяких передплат",
    item6_text:
      "Оплата за замовлення проводиться після отримання та перевірки товару.",
  },

  contentReviewModal: {
    title: "Залиште ваш відгук",
  },
  contentReviewThankYou: {
    text: "Дякуємо за відгук!",
  },
  contentModalSizeTable: {
    title: "Таблиця розмірів",
    //img: table,
  },
};
export const CONTENT_LANDLIZ_DROP_71 = CONTENT; // Поменять на имя, используемое для файла data
