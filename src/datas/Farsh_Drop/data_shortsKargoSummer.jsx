// import img1 from "../../img/_Farsh_Drop/ShortsKargoSummer/img1.jpg";
// import img2 from "../../img/_Farsh_Drop/ShortsKargoSummer/img2.jpg";
// import img3 from "../../img/_Farsh_Drop/ShortsKargoSummer/img3.jpg";

import heroImg1 from "../../img/_Farsh_Drop/ShortsKargoSummer/heroImg1.png";
import heroImg2 from "../../img/_Farsh_Drop/ShortsKargoSummer/heroImg2.png";
import heroImg3 from "../../img/_Farsh_Drop/ShortsKargoSummer/heroImg3.png";

import Img1_galery_img1 from "../../img/_Farsh_Drop/ShortsKargoSummer/img1_galery_img1.jpg";
import Img1_galery_img2 from "../../img/_Farsh_Drop/ShortsKargoSummer/img1_galery_img2.jpg";
import Img1_galery_img3 from "../../img/_Farsh_Drop/ShortsKargoSummer/img1_galery_img3.jpg";
import Img1_galery_img4 from "../../img/_Farsh_Drop/ShortsKargoSummer/img1_galery_img4.jpg";

import Img2_galery_img1 from "../../img/_Farsh_Drop/ShortsKargoSummer/img2_galery_img1.jpg";
import Img2_galery_img2 from "../../img/_Farsh_Drop/ShortsKargoSummer/img2_galery_img2.jpg";
import Img2_galery_img3 from "../../img/_Farsh_Drop/ShortsKargoSummer/img2_galery_img3.jpg";
import Img2_galery_img4 from "../../img/_Farsh_Drop/ShortsKargoSummer/img2_galery_img4.jpg";

import Img3_galery_img1 from "../../img/_Farsh_Drop/ShortsKargoSummer/img3_galery_img1.jpg";
import Img3_galery_img2 from "../../img/_Farsh_Drop/ShortsKargoSummer/img3_galery_img2.jpg";
import Img3_galery_img3 from "../../img/_Farsh_Drop/ShortsKargoSummer/img3_galery_img3.jpg";
import Img3_galery_img4 from "../../img/_Farsh_Drop/ShortsKargoSummer/img3_galery_img4.jpg";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Хакі";
export const TWO = "Молоко";
export const THREE = "Чорні";

const category = "Шорти"; // Категория (для фильтра на главной странице)
const name = "Шорти карго"; // Пишется в корзине товара
const main_title = "Шорти карго"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Farsh Drop"; // Поставщик
const price = 649; // цена по которой продаем
const old_price = 849; // цена скидки
const page = "/men/shorts/short_kargo_summer"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Шорти карго хакі";
const full_name2 = "Шорти карго молоко";
const full_name3 = "Шорти карго чорні";

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
    page: page,
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
    page: page,
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
    page: page,
  },
];

export const DATA_FARSH_DROP_ShortsKargoSummer = DATA; // Поменять на имя, для отображения на главной странице
export const INFO_FARSH_DROP_ShortsKargoSummer = {
  // Как будут показываться размеры
  S: "С",
  M: "М",
  L: "Л",
  XL: "ХЛ",
  XXL: "ХХЛ",
  GOOGLE_SHEET:
    "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401",
  GOOGLE_LIST: "ShortsKargoSummer", // Для отзывов (В гугл таблицу заходит в столбец "Название")
  ONE: ONE,
};
