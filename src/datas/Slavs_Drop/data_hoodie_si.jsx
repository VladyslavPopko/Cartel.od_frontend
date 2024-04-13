import heroImg1 from "../../img/_Slavs_Drop/hoodie_SI/heroImg1.png";
import heroImg2 from "../../img/_Slavs_Drop/hoodie_SI/heroImg2.png";
import heroImg3 from "../../img/_Slavs_Drop/hoodie_SI/heroImg3.png";
import heroImg4 from "../../img/_Slavs_Drop/hoodie_SI/heroImg4.png";

//Сжатые

import Img1_galery_img1 from "../../img/_Slavs_Drop/hoodie_SI/img1_galery_img1.jpg";
import Img1_galery_img2 from "../../img/_Slavs_Drop/hoodie_SI/img1_galery_img2.jpg";
import Img1_galery_img3 from "../../img/_Slavs_Drop/hoodie_SI/img1_galery_img3.jpg";
import Img1_galery_img4 from "../../img/_Slavs_Drop/hoodie_SI/img1_galery_img4.jpg";

import Img2_galery_img1 from "../../img/_Slavs_Drop/hoodie_SI/img2_galery_img1.jpg";
import Img2_galery_img2 from "../../img/_Slavs_Drop/hoodie_SI/img2_galery_img2.jpg";
import Img2_galery_img3 from "../../img/_Slavs_Drop/hoodie_SI/img2_galery_img3.jpg";
import Img2_galery_img4 from "../../img/_Slavs_Drop/hoodie_SI/img2_galery_img4.jpg";

import Img3_galery_img1 from "../../img/_Slavs_Drop/hoodie_SI/img3_galery_img1.jpg";
import Img3_galery_img2 from "../../img/_Slavs_Drop/hoodie_SI/img3_galery_img2.jpg";
import Img3_galery_img3 from "../../img/_Slavs_Drop/hoodie_SI/img3_galery_img3.jpg";
import Img3_galery_img4 from "../../img/_Slavs_Drop/hoodie_SI/img3_galery_img4.jpg";

import Img4_galery_img1 from "../../img/_Slavs_Drop/hoodie_SI/img4_galery_img1.jpg";
import Img4_galery_img2 from "../../img/_Slavs_Drop/hoodie_SI/img4_galery_img2.jpg";
import Img4_galery_img3 from "../../img/_Slavs_Drop/hoodie_SI/img4_galery_img3.jpg";
import Img4_galery_img4 from "../../img/_Slavs_Drop/hoodie_SI/img4_galery_img4.jpg";

//Без сжатия

import Img1gallery1 from "../../img/_Slavs_Drop/hoodie_SI/original/img1_gallery_img1.jpg";
import Img1gallery2 from "../../img/_Slavs_Drop/hoodie_SI/original/img1_gallery_img2.jpg";
import Img1gallery3 from "../../img/_Slavs_Drop/hoodie_SI/original/img1_gallery_img3.jpg";
import Img1gallery4 from "../../img/_Slavs_Drop/hoodie_SI/original/img1_gallery_img4.jpg";

import Img2gallery1 from "../../img/_Slavs_Drop/hoodie_SI/original/img2_gallery_img1.jpg";
import Img2gallery2 from "../../img/_Slavs_Drop/hoodie_SI/original/img2_gallery_img2.jpg";
import Img2gallery3 from "../../img/_Slavs_Drop/hoodie_SI/original/img2_gallery_img3.jpg";
import Img2gallery4 from "../../img/_Slavs_Drop/hoodie_SI/original/img2_gallery_img4.jpg";

import Img3gallery1 from "../../img/_Slavs_Drop/hoodie_SI/original/img3_gallery_img1.jpg";
import Img3gallery2 from "../../img/_Slavs_Drop/hoodie_SI/original/img3_gallery_img2.jpg";
import Img3gallery3 from "../../img/_Slavs_Drop/hoodie_SI/original/img3_gallery_img3.jpg";
import Img3gallery4 from "../../img/_Slavs_Drop/hoodie_SI/original/img3_gallery_img4.jpg";

import Img4gallery1 from "../../img/_Slavs_Drop/hoodie_SI/original/img4_gallery_img1.jpg";
import Img4gallery2 from "../../img/_Slavs_Drop/hoodie_SI/original/img4_gallery_img2.jpg";
import Img4gallery3 from "../../img/_Slavs_Drop/hoodie_SI/original/img4_gallery_img3.jpg";
import Img4gallery4 from "../../img/_Slavs_Drop/hoodie_SI/original/img4_gallery_img4.jpg";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Чорний_G";
export const TWO = "Фіолетовий";
export const THREE = "Чорний";
export const FOUR = "Червоний";

const division = "Кофти та Светри";
const category = "Худі"; // Категория (для фильтра на главной странице)
const name = "Худі SI"; // Пишется в корзине товара
const main_title = "Худі SI"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Slavs Drop"; // Поставщик
const price = 2249; // цена по которой продаем
const old_price = 2999; // цена скидки
const page = "/men/hoodie/hoodie_si"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Худі чорний Black Ghost SI";
const full_name2 = "Худі фіолетовий SI";
const full_name3 = "Худі чорний SI";
const full_name4 = "Худі червоний SI";

//Артикулы
const article1 = 93;
const article2 = 94;
const article3 = 95;
const article4 = 96;

// менять разве что id
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
    banner: "",
    bannerText: "",
    gallery: [Img1gallery1, Img1gallery2, Img1gallery3, Img1gallery4],
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
    page: page,
    banner: "",
    bannerText: "",
    gallery: [Img2gallery1, Img2gallery2, Img2gallery3, Img2gallery4],
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
    page: page,
    banner: "",
    bannerText: "",
    gallery: [Img3gallery1, Img3gallery2, Img3gallery3, Img3gallery4],
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
    page: page,
    banner: "",
    bannerText: "",
    gallery: [Img4gallery1, Img4gallery2, Img4gallery3, Img4gallery4],
    division: division,
    article: article4,
    search: `${name} ${main_title} ${article4}`,
  },
];

export const DATA_SLAVS_DROP_HOODIE_SI = DATA; // Поменять на имя, для отображения на главной странице
export const INFO_SLAVS_DROP_HOODIE_SI = {
  // Как будут показываться размеры
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
  XXL: "XXL",
  GOOGLE_SHEET:
    "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401",
  GOOGLE_LIST: "Shirts", // Для отзывов (В гугл таблицу заходит в столбец "Название")
  ONE: ONE,
};
