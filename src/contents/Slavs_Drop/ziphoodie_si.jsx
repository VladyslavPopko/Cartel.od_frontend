import description_item1_logo from "../../img/_Slavs_Drop/ziphoodie_SI/descriptionImg1.svg";
import description_item2_logo from "../../img/_Slavs_Drop/ziphoodie_SI/descriptionImg2.svg";
import description_item3_logo from "../../img/_Slavs_Drop/ziphoodie_SI/descriptionImg3.svg";
import description_item4_logo from "../../img/_Slavs_Drop/ziphoodie_SI/descriptionImg4.svg";

import table from "../../img/_Slavs_Drop/ziphoodie_SI/table.jpg";

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
    item1_logotext: "Зручний крій",
    item1_title: "Вільний крій",
    // item1_subtitle: "70% Бавовна 30% Поліестер ",
    item1_text:
      "Колекція вільного крою пропонує зручність і стиль у щоденному гардеробі. Розміри від S до XL, кожен зможе знайти ідеально сидячу модель, яка підкреслить їхню індивідуальність.",
    item2_logo: description_item2_logo,
    item2_logotext: "Якісний пошив",
    item2_title: "Найліпша якість",
    item2_text:
      "Наявні картонні та тканні бірки. Фурнітура YKK. QR код пробивається і переходить на головну сторінку certilogo. Тканина не втрачає форму та колір.",
    item3_logo: description_item3_logo,
    item3_logotext: "Матеріал бавовна",
    item3_title: "Преміум тканина :",
    item3_text:
      "Приємний матеріал найвищої якості. Без відмінностей від оригіналу. Тканина не втрачає форму та колір.",
    item4_logo: description_item4_logo,
    item4_logotext: "Приємна тканина",
    item4_title: "Неперевершена якість",
    // item4_subtitle: "Сезон : весна/осінь",
    item4_text:
      "Це худі ідеально підходить для будь-яких днів, коли потрібно трохи більше тепла. Виготовлена з високоякісного матеріалу, вона забезпечує комфорт і стиль одночасно.",
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

export const CONTENT_SLAVS_DROP_ZIPHOODIE_SI = CONTENT; // Поменять на имя, используемое для файла data
