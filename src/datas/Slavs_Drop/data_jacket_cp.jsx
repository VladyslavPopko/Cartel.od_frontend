import heroImg1 from "../../img/_Slavs_Drop/jacket_CP/heroImg1.png";
import heroImg2 from "../../img/_Slavs_Drop/jacket_CP/heroImg2.png";
import heroImg3 from "../../img/_Slavs_Drop/jacket_CP/heroImg3.png";
import heroImg4 from "../../img/_Slavs_Drop/jacket_CP/heroImg4.png";
import heroImg5 from "../../img/_Slavs_Drop/jacket_CP/heroImg5.png";
import heroImg6 from "../../img/_Slavs_Drop/jacket_CP/heroImg6.png";

import Img1_galery_img1 from "../../img/_Slavs_Drop/jacket_CP/img1_galery_img1.jpg";
import Img1_galery_img2 from "../../img/_Slavs_Drop/jacket_CP/img1_galery_img2.jpg";
import Img1_galery_img3 from "../../img/_Slavs_Drop/jacket_CP/img1_galery_img3.jpg";
import Img1_galery_img4 from "../../img/_Slavs_Drop/jacket_CP/img1_galery_img4.jpg";

import Img2_galery_img1 from "../../img/_Slavs_Drop/jacket_CP/img2_galery_img1.jpg";
import Img2_galery_img2 from "../../img/_Slavs_Drop/jacket_CP/img2_galery_img2.jpg";
import Img2_galery_img3 from "../../img/_Slavs_Drop/jacket_CP/img2_galery_img3.jpg";
import Img2_galery_img4 from "../../img/_Slavs_Drop/jacket_CP/img2_galery_img4.jpg";

import Img3_galery_img1 from "../../img/_Slavs_Drop/jacket_CP/img3_galery_img1.jpg";
import Img3_galery_img2 from "../../img/_Slavs_Drop/jacket_CP/img3_galery_img2.jpg";
import Img3_galery_img3 from "../../img/_Slavs_Drop/jacket_CP/img3_galery_img3.jpg";
import Img3_galery_img4 from "../../img/_Slavs_Drop/jacket_CP/img3_galery_img4.jpg";

import Img4_galery_img1 from "../../img/_Slavs_Drop/jacket_CP/img4_galery_img1.jpg";
import Img4_galery_img2 from "../../img/_Slavs_Drop/jacket_CP/img4_galery_img2.jpg";
import Img4_galery_img3 from "../../img/_Slavs_Drop/jacket_CP/img4_galery_img3.jpg";
import Img4_galery_img4 from "../../img/_Slavs_Drop/jacket_CP/img4_galery_img4.jpg";

import Img5_galery_img1 from "../../img/_Slavs_Drop/jacket_CP/img5_galery_img1.jpg";
import Img5_galery_img2 from "../../img/_Slavs_Drop/jacket_CP/img5_galery_img2.jpg";
import Img5_galery_img3 from "../../img/_Slavs_Drop/jacket_CP/img5_galery_img3.jpg";
import Img5_galery_img4 from "../../img/_Slavs_Drop/jacket_CP/img5_galery_img4.jpg";

import Img6_galery_img1 from "../../img/_Slavs_Drop/jacket_CP/img6_galery_img1.jpg";
import Img6_galery_img2 from "../../img/_Slavs_Drop/jacket_CP/img6_galery_img2.jpg";
import Img6_galery_img3 from "../../img/_Slavs_Drop/jacket_CP/img6_galery_img3.jpg";
import Img6_galery_img4 from "../../img/_Slavs_Drop/jacket_CP/img6_galery_img4.jpg";

export const GOOGLE_SHEET =
  "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401";
export const GOOGLE_LIST = "Jacket_CP"; // Для отзывов (В гугл таблицу заходит в столбец "Название")

// Как будут показываться размеры
export const S = "S";
export const M = "M";
export const L = "L";
export const XL = "XL";
export const XXL = "XXL";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Хакі";
export const TWO = "Пісочна";
export const THREE = "Блакитна";
export const FOUR = "Темно-синій";
export const FIVE = "Бордо";
export const SIX = "Чорна";

const category = "CP Компани"; // Категория (для фильтра на главной странице)
const name = "Куртка легендарного бренду"; // Пишется в корзине товара
const main_title = "Куртка CP"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Slavs Drop"; // Поставщик
const price = 2499; // цена по которой продаем
const old_price = 3499; // цена скидки
const page = "/premium/jackect_cp"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Куртка хакі soft-shell CP";
const full_name2 = "Куртка пісочна soft-shell CP";
const full_name3 = "Куртка блакитна soft-shell CP";
const full_name4 = "Куртка темно-синій soft-shell CP";
const full_name5 = "Куртка бордо soft-shell CP";
const full_name6 = "Куртка чорна soft-shell CP";

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
];

export const DATA_SLAVS_DROP_JACKET_CP = DATA;