// import img1 from "../../img/_Farsh_Drop/CostumeOverBaza/img1.jpg";
// import img2 from "../../img/_Farsh_Drop/CostumeOverBaza/img2.jpg";
// import img3 from "../../img/_Farsh_Drop/CostumeOverBaza/img3.jpg";

import heroImg1 from "../../img/_Farsh_Drop/CostumeOverBaza/heroImg1.png";
import heroImg2 from "../../img/_Farsh_Drop/CostumeOverBaza/heroImg2.png";
import heroImg3 from "../../img/_Farsh_Drop/CostumeOverBaza/heroImg3.png";

import Img1_galery_img1 from "../../img/_Farsh_Drop/CostumeOverBaza/img1_galery_img1.jpg";
import Img1_galery_img2 from "../../img/_Farsh_Drop/CostumeOverBaza/img1_galery_img2.jpg";
import Img1_galery_img3 from "../../img/_Farsh_Drop/CostumeOverBaza/img1_galery_img3.jpg";
// import Img1_galery_img4 from "../../img/_Farsh_Drop/CostumeOverBaza/img1_galery_img4.jpg";

import Img2_galery_img1 from "../../img/_Farsh_Drop/CostumeOverBaza/img2_galery_img1.jpg";
import Img2_galery_img2 from "../../img/_Farsh_Drop/CostumeOverBaza/img2_galery_img2.jpg";
import Img2_galery_img3 from "../../img/_Farsh_Drop/CostumeOverBaza/img2_galery_img3.jpg";
// import Img2_galery_img4 from "../../img/_Farsh_Drop/CostumeOverBaza/img2_galery_img4.jpg";

import Img3_galery_img1 from "../../img/_Farsh_Drop/CostumeOverBaza/img3_galery_img1.jpg";
import Img3_galery_img2 from "../../img/_Farsh_Drop/CostumeOverBaza/img3_galery_img2.jpg";
import Img3_galery_img3 from "../../img/_Farsh_Drop/CostumeOverBaza/img3_galery_img3.jpg";
// import Img3_galery_img4 from "../../img/_Farsh_Drop/CostumeOverBaza/img3_galery_img4.jpg";

export const GOOGLE_SHEET =
  "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401";
export const GOOGLE_LIST = "CostumeOverBaza"; // Для отзывов (В гугл таблицу заходит в столбец "Название")

// Как будут показываться размеры
export const S = "S";
export const M = "M";
export const L = "L";
export const XL = "XL";
export const XXL = "XXL";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Чорний";
export const TWO = "Мокко";
export const THREE = "Графіт";

const category = "Спортивні костюми"; // Категория (для фильтра на главной странице)
const name = "Весняна сорочка в клітинку"; // Пишется в корзине товара
const main_title = "Весняни сорочки"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Farsh Drop"; // Поставщик
const price = 999; // цена по которой продаем
const old_price = 1599; // цена скидки
const page = "/men/sportcomplects/costume_over_baza"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Костюм Овер база чорний";
const full_name2 = "Костюм Овер база мокко";
const full_name3 = "Костюм Овер база графіт";

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
    // galery_img4: Img1_galery_img4,
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
    // galery_img4: Img2_galery_img4,
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
    // galery_img4: Img3_galery_img4,
    page: page,
  },
];

export const DATA_FARSH_DROP_CostumeOverBaza = DATA;  // Поменять на имя, для отображения на главной странице