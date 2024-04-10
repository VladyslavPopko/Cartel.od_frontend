// import img1 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img1.jpg";
// import img2 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img2.jpg";
// import img3 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img3.jpg";

import heroImg1 from "../../img/_Farsh_Drop/HoodieZmeykaOver/heroImg1.png";
import heroImg2 from "../../img/_Farsh_Drop/HoodieZmeykaOver/heroImg2.png";
import heroImg3 from "../../img/_Farsh_Drop/HoodieZmeykaOver/heroImg3.png";

//Сжатые

import Img1_galery_img1 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img1_galery_img1.jpg";
import Img1_galery_img2 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img1_galery_img2.jpg";
import Img1_galery_img3 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img1_galery_img3.jpg";
import Img1_galery_img4 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img1_galery_img4.jpg";

import Img2_galery_img1 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img2_galery_img1.jpg";
import Img2_galery_img2 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img2_galery_img2.jpg";
import Img2_galery_img3 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img2_galery_img3.jpg";
import Img2_galery_img4 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img2_galery_img4.jpg";

import Img3_galery_img1 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img3_galery_img1.jpg";
import Img3_galery_img2 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img3_galery_img2.jpg";
import Img3_galery_img3 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img3_galery_img3.jpg";
import Img3_galery_img4 from "../../img/_Farsh_Drop/HoodieZmeykaOver/img3_galery_img4.jpg";

//Без сжатия

import Img1gallery1 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img1_gallery_img1.jpg";
import Img1gallery2 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img1_gallery_img2.jpg";
import Img1gallery3 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img1_gallery_img3.jpg";
import Img1gallery4 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img1_gallery_img4.jpg";

import Img2gallery1 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img2_gallery_img1.jpg";
import Img2gallery2 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img2_gallery_img2.jpg";
import Img2gallery3 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img2_gallery_img3.jpg";
import Img2gallery4 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img2_gallery_img4.jpg";

import Img3gallery1 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img3_gallery_img1.jpg";
import Img3gallery2 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img3_gallery_img2.jpg";
import Img3gallery3 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img3_gallery_img3.jpg";
import Img3gallery4 from "../../img/_Farsh_Drop/HoodieZmeykaOver/original/img3_gallery_img4.jpg";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Графіт";
export const TWO = "Зелений";
export const THREE = "Чорний";

const category = "Худі"; // Категория (для фильтра на главной странице)
const name = "Худі на блискавці оверсайз"; // Пишется в корзине товара
const main_title = "Худі на блискавці оверсайз"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Farsh Drop"; // Поставщик
const price = 949; // цена по которой продаем
const old_price = 1499; // цена скидки
const page = "/men/hoodie/hoodie_zmeyka"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Худі на змійці оверсайз графіт";
const full_name2 = "Худі на змійці оверсайз бутилка";
const full_name3 = "Худі на змійці оверсайз чорний";

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
    gallery: [Img1gallery1, Img1gallery2, Img1gallery3, Img1gallery4],
    article: 42,
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
    gallery: [Img2gallery1, Img2gallery2, Img2gallery3, Img2gallery4],
    article: 43,
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
    gallery: [Img3gallery1, Img3gallery2, Img3gallery3, Img3gallery4],
    article: 44,
  },
];

export const DATA_FARSH_DROP_HoodieZmeykaOver = DATA; // Поменять на имя, для отображения на главной странице
export const INFO_FARSH_DROP_HoodieZmeykaOver = {
  // Как будут показываться размеры
  S: "С",
  M: "М",
  L: "Л",
  XL: "ХЛ",
  XXL: "ХХЛ",
  GOOGLE_SHEET:
    "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401",
  GOOGLE_LIST: "HoodieZmeykaOver", // Для отзывов (В гугл таблицу заходит в столбец "Название")
  ONE: ONE,
};
