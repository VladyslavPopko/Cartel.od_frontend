// import img1 from "../../img/_Farsh_Drop/TrousersZmeyka/img1.jpg";
// import img2 from "../../img/_Farsh_Drop/TrousersZmeyka/img2.jpg";
// import img3 from "../../img/_Farsh_Drop/TrousersZmeyka/img3.jpg";

import heroImg1 from "../../img/_Farsh_Drop/TrousersZmeyka/heroImg1.png";
import heroImg2 from "../../img/_Farsh_Drop/TrousersZmeyka/heroImg2.png";
import heroImg3 from "../../img/_Farsh_Drop/TrousersZmeyka/heroImg3.png";
import heroImg4 from "../../img/_Farsh_Drop/TrousersZmeyka/heroImg4.png";
import heroImg5 from "../../img/_Farsh_Drop/TrousersZmeyka/heroImg5.png";
import heroImg6 from "../../img/_Farsh_Drop/TrousersZmeyka/heroImg6.png";
import heroImg7 from "../../img/_Farsh_Drop/TrousersZmeyka/heroImg7.png";

import Img1_galery_img1 from "../../img/_Farsh_Drop/TrousersZmeyka/img1_galery_img1.jpg";
import Img1_galery_img2 from "../../img/_Farsh_Drop/TrousersZmeyka/img1_galery_img2.jpg";
import Img1_galery_img3 from "../../img/_Farsh_Drop/TrousersZmeyka/img1_galery_img3.jpg";
import Img1_galery_img4 from "../../img/_Farsh_Drop/TrousersZmeyka/img1_galery_img4.jpg";

import Img2_galery_img1 from "../../img/_Farsh_Drop/TrousersZmeyka/img2_galery_img1.jpg";
import Img2_galery_img2 from "../../img/_Farsh_Drop/TrousersZmeyka/img2_galery_img2.jpg";
import Img2_galery_img3 from "../../img/_Farsh_Drop/TrousersZmeyka/img2_galery_img3.jpg";
import Img2_galery_img4 from "../../img/_Farsh_Drop/TrousersZmeyka/img2_galery_img4.jpg";

import Img3_galery_img1 from "../../img/_Farsh_Drop/TrousersZmeyka/img3_galery_img1.jpg";
import Img3_galery_img2 from "../../img/_Farsh_Drop/TrousersZmeyka/img3_galery_img2.jpg";
import Img3_galery_img3 from "../../img/_Farsh_Drop/TrousersZmeyka/img3_galery_img3.jpg";
import Img3_galery_img4 from "../../img/_Farsh_Drop/TrousersZmeyka/img3_galery_img4.jpg";

import Img4_galery_img1 from "../../img/_Farsh_Drop/TrousersZmeyka/img4_galery_img1.jpg";
import Img4_galery_img2 from "../../img/_Farsh_Drop/TrousersZmeyka/img4_galery_img2.jpg";
import Img4_galery_img3 from "../../img/_Farsh_Drop/TrousersZmeyka/img4_galery_img3.jpg";
import Img4_galery_img4 from "../../img/_Farsh_Drop/TrousersZmeyka/img4_galery_img4.jpg";

import Img5_galery_img1 from "../../img/_Farsh_Drop/TrousersZmeyka/img5_galery_img1.jpg";
import Img5_galery_img2 from "../../img/_Farsh_Drop/TrousersZmeyka/img5_galery_img2.jpg";
import Img5_galery_img3 from "../../img/_Farsh_Drop/TrousersZmeyka/img5_galery_img3.jpg";
import Img5_galery_img4 from "../../img/_Farsh_Drop/TrousersZmeyka/img5_galery_img4.jpg";

import Img6_galery_img1 from "../../img/_Farsh_Drop/TrousersZmeyka/img6_galery_img1.jpg";
import Img6_galery_img2 from "../../img/_Farsh_Drop/TrousersZmeyka/img6_galery_img2.jpg";
import Img6_galery_img3 from "../../img/_Farsh_Drop/TrousersZmeyka/img6_galery_img3.jpg";
import Img6_galery_img4 from "../../img/_Farsh_Drop/TrousersZmeyka/img6_galery_img4.jpg";

import Img7_galery_img1 from "../../img/_Farsh_Drop/TrousersZmeyka/img7_galery_img1.jpg";
import Img7_galery_img2 from "../../img/_Farsh_Drop/TrousersZmeyka/img7_galery_img2.jpg";
import Img7_galery_img3 from "../../img/_Farsh_Drop/TrousersZmeyka/img7_galery_img3.jpg";
import Img7_galery_img4 from "../../img/_Farsh_Drop/TrousersZmeyka/img7_galery_img4.jpg";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Хакі";
export const TWO = "Чорні";
export const THREE = "Сірі";
export const FOUR = "Сині";
export const FIVE = "Смужка";
export const SIX = "Клітина";
export const SEVEN = "Лапка";

const category = "Штани"; // Категория (для фильтра на главной странице)
const name = "Штани завужені"; // Пишется в корзине товара
const main_title = "Штани завужені"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Farsh Drop"; // Поставщик
const price = 899; // цена по которой продаем
const old_price = 1299; // цена скидки
const page = "/men/trousers/trousers_zmeyka"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Штаны Хаки";
const full_name2 = "Штаны Черные";
const full_name3 = "Штаны Серые";
const full_name4 = "Штаны Синие";
const full_name5 = "Штаны Полоска";
const full_name6 = "Штаны Клетка";
const full_name7 = "Штаны Лапка";

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
    page: page,
  },
  {
    category: category,
    main_title: main_title,
    name: name,
    vendor: VENDOR_NAME,
    full_name: full_name5,
    id: 5,
    color: FIVE,
    price: price,
    price_const: price,
    old_price: old_price,
    img: heroImg5,
    hero_img: heroImg5,
    galery_img1: Img5_galery_img1,
    galery_img2: Img5_galery_img2,
    galery_img3: Img5_galery_img3,
    galery_img4: Img5_galery_img4,
    page: page,
  },
  {
    category: category,
    main_title: main_title,
    name: name,
    vendor: VENDOR_NAME,
    full_name: full_name6,
    id: 6,
    color: SIX,
    price: price,
    price_const: price,
    old_price: old_price,
    img: heroImg6,
    hero_img: heroImg6,
    galery_img1: Img6_galery_img1,
    galery_img2: Img6_galery_img2,
    galery_img3: Img6_galery_img3,
    galery_img4: Img6_galery_img4,
    page: page,
  },
  {
    category: category,
    main_title: main_title,
    name: name,
    vendor: VENDOR_NAME,
    full_name: full_name7,
    id: 7,
    color: SEVEN,
    price: price,
    price_const: price,
    old_price: old_price,
    img: heroImg7,
    hero_img: heroImg7,
    galery_img1: Img7_galery_img1,
    galery_img2: Img7_galery_img2,
    galery_img3: Img7_galery_img3,
    galery_img4: Img7_galery_img4,
    page: page,
  },
];

export const DATA_FARSH_DROP_TrousersZmeyka = DATA; // Поменять на имя, для отображения на главной странице
export const INFO_FARSH_DROP_TrousersZmeyka = {
  // Как будут показываться размеры
  S: "С",
  M: "М",
  L: "Л",
  XL: "ХЛ",
  XXL: "ХХЛ",
  GOOGLE_SHEET:
    "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401",
  GOOGLE_LIST: "TrousersZmeyka", // Для отзывов (В гугл таблицу заходит в столбец "Название")
  ONE: ONE,
};
