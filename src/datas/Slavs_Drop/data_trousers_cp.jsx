import heroImg1 from "../../img/_Slavs_Drop/Trousers_CP/heroImg1.png";
import heroImg2 from "../../img/_Slavs_Drop/Trousers_CP/heroImg2.png";

//Сжатые

import Img1_galery_img1 from "../../img/_Slavs_Drop/Trousers_CP/img1_galery_img1.jpg";
import Img1_galery_img2 from "../../img/_Slavs_Drop/Trousers_CP/img1_galery_img2.jpg";
import Img1_galery_img3 from "../../img/_Slavs_Drop/Trousers_CP/img1_galery_img3.jpg";
import Img1_galery_img4 from "../../img/_Slavs_Drop/Trousers_CP/img1_galery_img4.jpg";

import Img2_galery_img1 from "../../img/_Slavs_Drop/Trousers_CP/img2_galery_img1.jpg";
import Img2_galery_img2 from "../../img/_Slavs_Drop/Trousers_CP/img2_galery_img2.jpg";
import Img2_galery_img3 from "../../img/_Slavs_Drop/Trousers_CP/img2_galery_img3.jpg";
import Img2_galery_img4 from "../../img/_Slavs_Drop/Trousers_CP/img2_galery_img4.jpg";

//Без сжатия

import Img1gallery1 from "../../img/_Slavs_Drop/Trousers_CP/original/img1_gallery_img1.jpg";
import Img1gallery2 from "../../img/_Slavs_Drop/Trousers_CP/original/img1_gallery_img2.jpg";
import Img1gallery3 from "../../img/_Slavs_Drop/Trousers_CP/original/img1_gallery_img3.jpg";
import Img1gallery4 from "../../img/_Slavs_Drop/Trousers_CP/original/img1_gallery_img4.jpg";

import Img2gallery1 from "../../img/_Slavs_Drop/Trousers_CP/original/img2_gallery_img1.jpg";
import Img2gallery2 from "../../img/_Slavs_Drop/Trousers_CP/original/img2_gallery_img2.jpg";
import Img2gallery3 from "../../img/_Slavs_Drop/Trousers_CP/original/img2_gallery_img3.jpg";
import Img2gallery4 from "../../img/_Slavs_Drop/Trousers_CP/original/img2_gallery_img4.jpg";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Хакі";
export const TWO = "Чорні";

const category = "CP Компани"; // Категория (для фильтра на главной странице)
const name = "Штани CP"; // Пишется в корзине товара
const main_title = "Штани CP"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Slavs Drop"; // Поставщик
const price = 2699; // цена по которой продаем
const old_price = 3299; // цена скидки
const page = "/premium/cp_company/trousers_cp"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Штани хакі CP";
const full_name2 = "Штани  чорні CP";

//Артикулы
const article1 = 132;
const article2 = 133;

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
    gallery: [Img2gallery1, Img2gallery2, Img2gallery3, Img2gallery4],
    article: article2,
    search: `${name} ${main_title} ${article2}`,
  },
];

export const DATA_SLAVS_DROP_Trousers_CP = DATA; // Поменять на имя, для отображения на главной странице
export const INFO_SLAVS_DROP_Trousers_CP = {
  // Как будут показываться размеры
  XS: "30",
  S: "31",
  M: "32",
  L: "33",
  XL: "34",
  XXL: "36",
  XXXL: "38",
  GOOGLE_SHEET:
    "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401",
  GOOGLE_LIST: "Shirts", // Для отзывов (В гугл таблицу заходит в столбец "Название")
  ONE: ONE,
};
