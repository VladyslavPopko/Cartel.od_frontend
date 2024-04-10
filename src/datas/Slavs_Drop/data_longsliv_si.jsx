import heroImg1 from "../../img/_Slavs_Drop/Longsliv_SI/heroImg1.png";
import heroImg2 from "../../img/_Slavs_Drop/Longsliv_SI/heroImg2.png";

//Сжатые

import Img1_galery_img1 from "../../img/_Slavs_Drop/Longsliv_SI/img1_galery_img1.jpg";
import Img1_galery_img2 from "../../img/_Slavs_Drop/Longsliv_SI/img1_galery_img2.jpg";
import Img1_galery_img3 from "../../img/_Slavs_Drop/Longsliv_SI/img1_galery_img3.jpg";
import Img1_galery_img4 from "../../img/_Slavs_Drop/Longsliv_SI/img1_galery_img4.jpg";

import Img2_galery_img1 from "../../img/_Slavs_Drop/Longsliv_SI/img2_galery_img1.jpg";
import Img2_galery_img2 from "../../img/_Slavs_Drop/Longsliv_SI/img2_galery_img2.jpg";
import Img2_galery_img3 from "../../img/_Slavs_Drop/Longsliv_SI/img2_galery_img3.jpg";
import Img2_galery_img4 from "../../img/_Slavs_Drop/Longsliv_SI/img2_galery_img4.jpg";

//Без сжатия

import Img1gallery1 from "../../img/_Slavs_Drop/Longsliv_SI/original/img1_gallery_img1.jpg";
import Img1gallery2 from "../../img/_Slavs_Drop/Longsliv_SI/original/img1_gallery_img2.jpg";
import Img1gallery3 from "../../img/_Slavs_Drop/Longsliv_SI/original/img1_gallery_img3.jpg";
import Img1gallery4 from "../../img/_Slavs_Drop/Longsliv_SI/original/img1_gallery_img4.jpg";

import Img2gallery1 from "../../img/_Slavs_Drop/Longsliv_SI/original/img2_gallery_img1.jpg";
import Img2gallery2 from "../../img/_Slavs_Drop/Longsliv_SI/original/img2_gallery_img2.jpg";
import Img2gallery3 from "../../img/_Slavs_Drop/Longsliv_SI/original/img2_gallery_img3.jpg";
import Img2gallery4 from "../../img/_Slavs_Drop/Longsliv_SI/original/img2_gallery_img4.jpg";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Синій";
export const TWO = "Чорний";

const category = "Стонік"; // Категория (для фильтра на главной странице)
const name = "Лонгслів SI"; // Пишется в корзине товара
const main_title = "Лонгслів SI"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Slavs Drop"; // Поставщик
const price = 1949; // цена по которой продаем
const old_price = 2399; // цена скидки
const page = "/premium/stonik/longsliv_si"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Лонгслів синій SI";
const full_name2 = "Лонгслів чорний SI";

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
    gallery: [Img1gallery1, Img1gallery2, Img1gallery3, Img1gallery4],
    article: 105,
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
    article: 106,
  },
];

export const DATA_SLAVS_DROP_Longsliv_SI = DATA; // Поменять на имя, для отображения на главной странице

export const INFO_SLAVS_DROP_Longsliv_SI = {
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
