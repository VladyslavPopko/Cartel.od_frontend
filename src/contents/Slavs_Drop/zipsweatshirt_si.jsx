import description_item1_logo from "../../img/_Slavs_Drop/Zipsweatshirt_SI/descriptionImg1.svg";
import description_item2_logo from "../../img/_Slavs_Drop/Zipsweatshirt_SI/descriptionImg2.svg";
import description_item3_logo from "../../img/_Slavs_Drop/Zipsweatshirt_SI/descriptionImg3.svg";
import description_item4_logo from "../../img/_Slavs_Drop/Zipsweatshirt_SI/descriptionImg4.svg";

import table from "../../img/_Slavs_Drop/Zipsweatshirt_SI/table.jpg";

const price = 2399; // необходимо для формулы высчета скидки за несколько товаров

export const CONTENT = {
  sizeArray: [
    { id: 1, value: "S", active: true },
    { id: 2, value: "M", active: true },
    { id: 3, value: "L", active: true },
    { id: 4, value: "XL", active: true },
  ],

  contentDesciption: {
    title: "Опис товару",
    item1_logo: description_item1_logo,
    item1_logotext: "Стійкість до прання",
    item1_title: "Максимальний комфорт у кожному виробі",
    // item1_subtitle: "70% Бавовна 30% Поліестер ",
    item1_text:
      "Наша колекція одягу вражає високою стійкістю до прання, що робить її ідеальним вибором для активного способу життя. Ви можете бути впевнені, що навіть після безлічі прань ваша футболка, сорочка чи штани залишаться непошкодженими та яскравими.",
    item2_logo: description_item2_logo,
    item2_logotext: "Увага до деталей",
    item2_title: "Професійна увага до кожної деталі",
    item2_text:
      "Кожен виріб відповідає найвищим стандартам якості, завдяки увазі до деталей. Наявні картонні та тканинні бірки, патчі та ґудзики.",
    item3_logo: description_item3_logo,
    item3_logotext: "Преміум тканина",
    item3_title: "Лише найкращі матеріали для вашого комфорту",
    item3_text:
      "Наші вироби виготовлені з використанням тільки найкращих матеріалів, що гарантує їх преміум якість та тривалу службу. Якісна тканина, яка не втрачає форму та колір, дозволить вам насолоджуватися стильним та комфортним одягом протягом багатьох сезонів.",
    item4_logo: description_item4_logo,
    item4_logotext: "Якісний пошив",
    item4_title: "М'якість і ніжність",
    // item4_subtitle: "Сезон : весна/осінь",
    item4_text:
      "Наші вироби мають бездоганний пошив, який забезпечує надійність та комфорт під час носіння. Кожен шов і деталь оброблені з уважністю та майстерністю, щоб забезпечити максимальну якість та задоволення від нашого одягу.",
  },

  contentGallery: {
    title: "Галерея",
  },
  contentSizeTable: {
    title: "Таблиця розмірів",
    img: table,
  },

  contentReviewModal: {
    title: "Залиште ваш відгук",
  },
  contentReviewThankYou: {
    text: "Дякуємо за відгук!",
  },
  contentModalSizeTable: {
    title: "Таблиця розмірів",
    img: table,
  },
};

export const CONTENT_SLAVS_DROP_Zipsweatshirt_SI = CONTENT; // Поменять на имя, используемое для файла data
