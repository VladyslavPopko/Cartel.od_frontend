
import heroImg1 from "../../img/_Slavs_Drop/Trousers_CP/heroImg1.png";
import heroImg2 from "../../img/_Slavs_Drop/Trousers_CP/heroImg2.png";

import Img1_galery_img1 from "../../img/_Slavs_Drop/Trousers_CP/img1_galery_img1.jpg";
import Img1_galery_img2 from "../../img/_Slavs_Drop/Trousers_CP/img1_galery_img2.jpg";
import Img1_galery_img3 from "../../img/_Slavs_Drop/Trousers_CP/img1_galery_img3.jpg";
import Img1_galery_img4 from "../../img/_Slavs_Drop/Trousers_CP/img1_galery_img4.jpg";

import Img2_galery_img1 from "../../img/_Slavs_Drop/Trousers_CP/img2_galery_img1.jpg";
import Img2_galery_img2 from "../../img/_Slavs_Drop/Trousers_CP/img2_galery_img2.jpg";
import Img2_galery_img3 from "../../img/_Slavs_Drop/Trousers_CP/img2_galery_img3.jpg";
import Img2_galery_img4 from "../../img/_Slavs_Drop/Trousers_CP/img2_galery_img4.jpg";


export const GOOGLE_SHEET =
  "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401";
export const GOOGLE_LIST = "Trousers_CP"; // Для отзывов (В гугл таблицу заходит в столбец "Название")

// Как будут показываться размеры
export const S = "S";
export const M = "M";
export const L = "L";
export const XL = "XL";
export const XXL = "XXL";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Хакі";
export const TWO = "Чорні";

const category = "Стонік"; // Категория (для фильтра на главной странице)
const name = "Худі легендарного бренду"; // Пишется в корзине товара
const main_title = "Худі SI"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Slavs Drop"; // Поставщик
const price = 1749; // цена по которой продаем
const old_price = 2269; // цена скидки
const page = "/premium/cp_company/trousers_cp"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Штани хакі CP";
const full_name2 = "Штани чорні CP";

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
  
];

export const DATA_SLAVS_DROP_Trousers_CP = DATA;  // Поменять на имя, для отображения на главной странице