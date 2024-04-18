import description_item1_logo from "../../img/_Slavs_Drop/jacket_CP/descriptionImg1.svg";
import description_item2_logo from "../../img/_Slavs_Drop/jacket_CP/descriptionImg2.svg";
import description_item3_logo from "../../img/_Slavs_Drop/jacket_CP/descriptionImg3.svg";
import description_item4_logo from "../../img/_Slavs_Drop/jacket_CP/descriptionImg4.svg";

import table from "../../img/_Slavs_Drop/jacket_CP/table.jpg";

export const CONTENT = {
  sizeArray: [
    { id: 1, value: "S", active: true },
    { id: 2, value: "M", active: true },
    { id: 3, value: "L", active: true },
    { id: 4, value: "XL", active: true },
    { id: 5, value: "XXL", active: true },
  ],

  contentDesciption: {
    title: "Опис товару",
    item1_logo: description_item1_logo,
    item1_logotext: "Зручний крій",
    item1_title: "Вільний крій",
    // item1_subtitle: "",
    item1_text:
      "Колекція вільного крою пропонує зручність і стиль у щоденному гардеробі. Розміри від S до XL, кожен зможе знайти ідеально сидячу модель, яка підкреслить вашу індивідуальність.",
    item2_logo: description_item2_logo,
    item2_logotext: "Матеріал бавовна",
    item2_title: "Преміум тканина :  ",
    item2_text:
      "Водонепронекний матеріал, утеплений флісом. Без відмінностей від оригіналу. Тканина не втрачає форму та колір.",
    item3_logo: description_item3_logo,
    item3_logotext: "Якісний пошив",
    item3_title: "Найліпша якість",
    item3_text:
      "Дуже якісне виконання, фурнітура YKK. Оригінальні бірки та кодилінзи на капюшоні. QR код пробивається і переходить на головну сторінку certilogo.",
    item4_logo: description_item4_logo,
    item4_logotext: "Приємна тканина",
    item4_title: "Щільна куртка",
    item4_subtitle: "Сезон : весна/осінь",
    item4_text:
      "Ця щільна тепла водонепроникна куртка ідеально підходить для весняних та осінніх днів, коли потрібно трохи більше тепла, але ще не час для важких курток. Виготовлена з високоякісного матеріалу, вона забезпечує комфорт і стиль одночасно.",
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

export const CONTENT_SLAVS_DROP_JACKET_CP = CONTENT; // Поменять на имя, используемое для файла data
