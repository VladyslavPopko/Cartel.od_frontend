// import img1 from "../../img/_Farsh_Drop/ComplectKant/img1.jpg";
// import img2 from "../../img/_Farsh_Drop/ComplectKant/img2.jpg";
// import img3 from "../../img/_Farsh_Drop/ComplectKant/img3.jpg";

import heroImg1 from "../../img/_Farsh_Drop/ComplectKant/heroImg1.png";
import heroImg2 from "../../img/_Farsh_Drop/ComplectKant/heroImg2.png";
import heroImg3 from "../../img/_Farsh_Drop/ComplectKant/heroImg3.png";
import heroImg4 from "../../img/_Farsh_Drop/ComplectKant/heroImg4.png";

// Сжатые
//Сжатые

import Img1_galery_img1 from "../../img/_Farsh_Drop/ComplectKant/img1_galery_img1.jpg";
import Img1_galery_img2 from "../../img/_Farsh_Drop/ComplectKant/img1_galery_img2.jpg";
import Img1_galery_img3 from "../../img/_Farsh_Drop/ComplectKant/img1_galery_img3.jpg";
import Img1_galery_img4 from "../../img/_Farsh_Drop/ComplectKant/img1_galery_img4.jpg";

import Img2_galery_img1 from "../../img/_Farsh_Drop/ComplectKant/img2_galery_img1.jpg";
import Img2_galery_img2 from "../../img/_Farsh_Drop/ComplectKant/img2_galery_img2.jpg";
import Img2_galery_img3 from "../../img/_Farsh_Drop/ComplectKant/img2_galery_img3.jpg";
import Img2_galery_img4 from "../../img/_Farsh_Drop/ComplectKant/img2_galery_img4.jpg";

import Img3_galery_img1 from "../../img/_Farsh_Drop/ComplectKant/img3_galery_img1.jpg";
import Img3_galery_img2 from "../../img/_Farsh_Drop/ComplectKant/img3_galery_img2.jpg";
import Img3_galery_img3 from "../../img/_Farsh_Drop/ComplectKant/img3_galery_img3.jpg";
import Img3_galery_img4 from "../../img/_Farsh_Drop/ComplectKant/img3_galery_img4.jpg";

import Img4_galery_img1 from "../../img/_Farsh_Drop/ComplectKant/img4_galery_img1.jpg";
import Img4_galery_img2 from "../../img/_Farsh_Drop/ComplectKant/img4_galery_img2.jpg";
import Img4_galery_img3 from "../../img/_Farsh_Drop/ComplectKant/img4_galery_img3.jpg";
import Img4_galery_img4 from "../../img/_Farsh_Drop/ComplectKant/img4_galery_img4.jpg";

// Без сжатия
import Img1gallery1 from "../../img/_Farsh_Drop/ComplectKant/original/img1_gallery_img1.jpg";
import Img1gallery2 from "../../img/_Farsh_Drop/ComplectKant/original/img1_gallery_img2.jpg";
import Img1gallery3 from "../../img/_Farsh_Drop/ComplectKant/original/img1_gallery_img3.jpg";
import Img1gallery4 from "../../img/_Farsh_Drop/ComplectKant/original/img1_gallery_img4.jpg";

import Img2gallery1 from "../../img/_Farsh_Drop/ComplectKant/original/img2_gallery_img1.jpg";
import Img2gallery2 from "../../img/_Farsh_Drop/ComplectKant/original/img2_gallery_img2.jpg";
import Img2gallery3 from "../../img/_Farsh_Drop/ComplectKant/original/img2_gallery_img3.jpg";
import Img2gallery4 from "../../img/_Farsh_Drop/ComplectKant/original/img2_gallery_img4.jpg";

import Img3gallery1 from "../../img/_Farsh_Drop/ComplectKant/original/img3_gallery_img1.jpg";
import Img3gallery2 from "../../img/_Farsh_Drop/ComplectKant/original/img3_gallery_img2.jpg";
import Img3gallery3 from "../../img/_Farsh_Drop/ComplectKant/original/img3_gallery_img3.jpg";
import Img3gallery4 from "../../img/_Farsh_Drop/ComplectKant/original/img3_gallery_img4.jpg";

import Img4gallery1 from "../../img/_Farsh_Drop/ComplectKant/original/img4_gallery_img1.jpg";
import Img4gallery2 from "../../img/_Farsh_Drop/ComplectKant/original/img4_gallery_img2.jpg";
import Img4gallery3 from "../../img/_Farsh_Drop/ComplectKant/original/img4_gallery_img3.jpg";
import Img4gallery4 from "../../img/_Farsh_Drop/ComplectKant/original/img4_gallery_img4.jpg";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Хакі";
export const TWO = "Графіт";
export const THREE = "Молоко";
export const FOUR = "Чорний";

const division = "Комплекти";
const category = "Літні комплекти"; // Категория (для фильтра на главной странице)
const name = "Комплект літній KANT"; // Пишется в корзине товара
const main_title = "Комплект KANT"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Farsh Drop"; // Поставщик
const price = 749; // цена по которой продаем
const old_price = Math.round(price / 0.6); // цена скидки
const page = "/men/summercomplects/complect_kant"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Комплект лето кант хаки";
const full_name2 = "Комплект лето кант графит";
const full_name3 = "Комплект лето кант молоко";
const full_name4 = "Комплект лето кант черный";

//Артикулы
const article1 = 1;
const article2 = 2;
const article3 = 3;
const article4 = 4;

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
    galery_img1: Img1_galery_img1,
    galery_img2: Img1_galery_img2,
    galery_img3: Img1_galery_img3,
    galery_img4: Img1_galery_img4,
    gallery: [Img1gallery1,Img1gallery2, Img1gallery3, Img1gallery4],
    //
    page: page,
    banner: "",
    bannerText: "",
    division: division,
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
    galery_img1: Img2_galery_img1,
    galery_img2: Img2_galery_img2,
    galery_img3: Img2_galery_img3,
    galery_img4: Img2_galery_img4,
    gallery: [Img2gallery1, Img2gallery2, Img2gallery3, Img2gallery4],
    page: page,
    banner: "",
    bannerText: "",
    division: division,
    article: article2,
    search: `${name} ${main_title} ${article2}`,
  },
  {
    category: category,
    main_title: main_title,
    name: name,
    vendor: VENDOR_NAME,
    full_name: full_name3,
    id: 3,
    color: THREE,
    price: price,
    price_const: price,
    old_price: old_price,
    img: heroImg3,
    hero_img: heroImg3,
    galery_img1: Img3_galery_img1,
    galery_img2: Img3_galery_img2,
    galery_img3: Img3_galery_img3,
    galery_img4: Img3_galery_img4,
    gallery: [Img3gallery1, Img3gallery2, Img3gallery3, Img3gallery4],
    page: page,
    banner: "",
    bannerText: "",
    division: division,
    article: article3,
    search: `${name} ${main_title} ${article3}`,
  },
  {
    category: category,
    main_title: main_title,
    name: name,
    vendor: VENDOR_NAME,
    full_name: full_name4,
    id: 4,
    color: FOUR,
    price: price,
    price_const: price,
    old_price: old_price,
    img: heroImg4,
    hero_img: heroImg4,
    galery_img1: Img4_galery_img1,
    galery_img2: Img4_galery_img2,
    galery_img3: Img4_galery_img3,
    galery_img4: Img4_galery_img4,
    gallery: [Img4gallery1, Img4gallery2, Img4gallery3, Img4gallery4],
    page: page,
    banner: "",
    bannerText: "",
    division: division,
    article: article4,
    search: `${name} ${main_title} ${article4}`,
  },
];

export const DATA_FARSH_DROP_ComplectKant = DATA; // Поменять на имя, для отображения на главной странице
export const INFO__FARSH_DROP_ComplectKant = {
  // Как будут показываться размеры
  S: "С",
  M: "М",
  L: "Л",
  XL: "ХЛ",
  XXL: "ХХЛ",
  GOOGLE_SHEET:
    "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401",
  GOOGLE_LIST: "ComplectKant", // Для отзывов (В гугл таблицу заходит в столбец "Название")
  ONE: ONE,
};
