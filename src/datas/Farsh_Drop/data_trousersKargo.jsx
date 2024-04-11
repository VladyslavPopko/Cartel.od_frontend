// import img1 from "../../img/_Farsh_Drop/TrousersKargo/img1.jpg";
// import img2 from "../../img/_Farsh_Drop/TrousersKargo/img2.jpg";
// import img3 from "../../img/_Farsh_Drop/TrousersKargo/img3.jpg";

import heroImg1 from "../../img/_Farsh_Drop/TrousersKargo/heroImg1.png";
import heroImg2 from "../../img/_Farsh_Drop/TrousersKargo/heroImg2.png";

// //Сжатые

// import Img1_galery_img1 from "../../img/_Farsh_Drop/TrousersKargo/img1_galery_img1.jpg";
// import Img1_galery_img2 from "../../img/_Farsh_Drop/TrousersKargo/img1_galery_img2.jpg";
// import Img1_galery_img3 from "../../img/_Farsh_Drop/TrousersKargo/img1_galery_img3.jpg";
// import Img1_galery_img4 from "../../img/_Farsh_Drop/TrousersKargo/img1_galery_img4.jpg";

// import Img2_galery_img1 from "../../img/_Farsh_Drop/TrousersKargo/img2_galery_img1.jpg";
// import Img2_galery_img2 from "../../img/_Farsh_Drop/TrousersKargo/img2_galery_img2.jpg";
// import Img2_galery_img3 from "../../img/_Farsh_Drop/TrousersKargo/img2_galery_img3.jpg";
// import Img2_galery_img4 from "../../img/_Farsh_Drop/TrousersKargo/img2_galery_img4.jpg";

// import Img3_galery_img1 from "../../img/_Farsh_Drop/TrousersKargo/img3_galery_img1.jpg";
// import Img3_galery_img2 from "../../img/_Farsh_Drop/TrousersKargo/img3_galery_img2.jpg";
// import Img3_galery_img3 from "../../img/_Farsh_Drop/TrousersKargo/img3_galery_img3.jpg";
// import Img3_galery_img4 from "../../img/_Farsh_Drop/TrousersKargo/img3_galery_img4.jpg";

//Без сжатия

import Img1gallery1 from "../../img/_Farsh_Drop/TrousersKargo/original/img1_gallery_img1.jpg";
// import Img1gallery2 from "../../img/_Farsh_Drop/TrousersKargo/original/img1_gallery_img2.jpg";
// import Img1gallery3 from "../../img/_Farsh_Drop/TrousersKargo/original/img1_gallery_img3.jpg";
// import Img1gallery4 from "../../img/_Farsh_Drop/TrousersKargo/original/img1_gallery_img4.jpg";

import Img2gallery1 from "../../img/_Farsh_Drop/TrousersKargo/original/img2_gallery_img1.jpg";
// import Img2gallery2 from "../../img/_Farsh_Drop/TrousersKargo/original/img2_gallery_img2.jpg";
// import Img2gallery3 from "../../img/_Farsh_Drop/TrousersKargo/original/img2_gallery_img3.jpg";
// import Img2gallery4 from "../../img/_Farsh_Drop/TrousersKargo/original/img2_gallery_img4.jpg";


//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Хакі";
export const TWO = "Чорні";

const category = "Штани"; // Категория (для фильтра на главной странице)
const name = "Штани карго"; // Пишется в корзине товара
const main_title = "Штани карго"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Farsh Drop"; // Поставщик
const price = 999; // цена по которой продаем
const old_price = 1299; // цена скидки
const page = "/men/trousers/trousers_kargo"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Карго Хаки";
const full_name2 = "Карго Черные";

//Артикулы
const article1 = 75;
const article2 = 76;


export const DATA = [
  {
    category: category,
    main_title: main_title,
    name: name,
    vendor: VENDOR_NAME,
    full_name: full_name1,
    id: 1,
    color: ONE,
    price: price,
    price_const: price,
    old_price: old_price,
    img: heroImg1,
    hero_img: heroImg1,
    // galery_img1: Img1_galery_img1,
    // galery_img2: Img1_galery_img2,
    // galery_img3: Img1_galery_img3,
    // galery_img4: Img1_galery_img4,
    page: page,
    gallery: [Img1gallery1],
    article: article1,
    search: `${name} ${main_title} ${article1}`,
  },
  {
    category: category,
    main_title: main_title,
    name: name,
    vendor: VENDOR_NAME,
    full_name: full_name2,
    id: 2,
    color: TWO,
    price: price,
    price_const: price,
    old_price: old_price,
    img: heroImg2,
    hero_img: heroImg2,
    // galery_img1: Img2_galery_img1,
    // galery_img2: Img2_galery_img2,
    // galery_img3: Img2_galery_img3,
    // galery_img4: Img2_galery_img4,
    page: page,
    gallery: [Img2gallery1],
    article: article2,
    search: `${name} ${main_title} ${article2}`,
  },
];

export const DATA_FARSH_DROP_TrousersKargo = DATA; // Поменять на имя, для отображения на главной странице
export const INFO_FARSH_DROP_TrousersKargo = {
  // Как будут показываться размеры
  S: "С",
  M: "М",
  L: "Л",
  XL: "ХЛ",
  XXL: "ХХЛ",
  GOOGLE_SHEET:
    "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401",
  GOOGLE_LIST: "TrousersKargo", // Для отзывов (В гугл таблицу заходит в столбец "Название")
  ONE: ONE,
};
