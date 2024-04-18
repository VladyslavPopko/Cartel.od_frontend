import description_item1_logo from "../../img/_Farsh_Drop/shirts/descriptionImg1.svg";
import description_item2_logo from "../../img/_Farsh_Drop/shirts/descriptionImg2.svg";
import description_item3_logo from "../../img/_Farsh_Drop/shirts/descriptionImg3.svg";
import description_item4_logo from "../../img/_Farsh_Drop/shirts/descriptionImg4.svg";

import table from "../../img/_Farsh_Drop/shirts/table.jpg";

export const CONTENT = {
  sizeArray: [
    { id: 1, value: "С", active: true },
    { id: 2, value: "М", active: true },
    { id: 3, value: "Л", active: true },
    { id: 4, value: "ХЛ", active: true },
  ],

  contentDesciption: {
    title: "Опис товару",
    item1_logo: description_item1_logo,
    item1_logotext: "Матеріал бавовна",
    item1_title: "Преміум тканина :",
    item1_subtitle: "70% Бавовна 30% Поліестер ",
    item1_text:
      "Тканина твід - це витончений та вишуканий матеріал, що поєднує в собі класичну елегантність і комфорт сучасності. Її м'яка текстура дарує відчуття приємності при контакті з шкірою, а також забезпечує відмінну вентиляцію та зносостійкість.",
    item2_logo: description_item2_logo,
    item2_logotext: "Якісний пошив",
    item2_title: "Країна виробник: Турречина",
    item2_text:
      "Тканина, виготовлена в Туреччині, вражає своєю вишуканістю та якістю, яка є відбитком майстерності турецьких текстильних виробників. Комбінація традиційних технологій та сучасного дизайну робить її неперевершеним вибором для вишуканих модних виробів.",
    item3_logo: description_item3_logo,
    item3_logotext: "Зручний крій",
    item3_title: "Вільний крій",
    item3_text:
      "Колекція вільного крою пропонує зручність і стиль у щоденному гардеробі. Розміри від S до XL, кожен зможе знайти ідеально сидячу модель, яка підкреслить їхню індивідуальність.",
    item4_logo: description_item4_logo,
    item4_logotext: "Приємна тканина",
    item4_title: "Щільна тепла сорочка",
    item4_subtitle: "Сезон : весна/осінь",
    item4_text:
      "Ця щільна тепла сорочка ідеально підходить для весняних та осінніх днів, коли потрібно трохи більше тепла, але ще не час для важких курток. Виготовлена з високоякісного матеріалу, вона забезпечує комфорт і стиль одночасно.",
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

export const CONTENT_FARSH_DROP_SHIRTS = CONTENT; // Поменять на имя, используемое для файла data
