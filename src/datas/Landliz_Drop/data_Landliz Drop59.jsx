

import heroImg1 from "../../img/_Landliz_Drop/Landliz_Drop59/img1.jpg";

// Сжатые
//Сжатые

import Img1_galery_img1 from "../../img/_Landliz_Drop/Landliz_Drop59/img1_gallery_img1.jpg";
//import Img1_galery_img2 from "../../img/_Landliz_Drop/Landliz_Drop59/img1_gallery_img2.jpg";
//import Img1_galery_img3 from "../../img/_Landliz_Drop/Landliz_Drop59/img1_gallery_img3.jpg";
// from "../../img/_Landliz_Drop/Landliz_Drop59/img1_gallery_img4.jpg";


// Без сжатия
import Img1gallery1 from "../../img/_Landliz_Drop/Landliz_Drop59/original/img1_gallery_img1.jpg";
//import Img1gallery2 from "../../img/_Landliz_Drop/Landliz_Drop59/original/img1_gallery_img2.jpg";
//import Img1gallery3 from "../../img/_Landliz_Drop/Landliz_Drop59/original/img1_gallery_img3.jpg";
//import Img1gallery4 from "../../img/_Landliz_Drop/Landliz_Drop59/original/img1_gallery_img4.jpg";


//Какие цвета (классы для выбора цвета и в карточке товара)
// export const ONE = "Хакі";
// export const TWO = "Графіт";
// export const THREE = "Молоко";
// export const FOUR = "Чорний";

const division = "Дощовики";
const category = "Дощовики"; // Категория (для фильтра на главной странице)
const name = "Костюм дощовик маскувальний мультикам"; // Пишется в корзине товара
const main_title = "Костюм дощовик маскувальний мультикам"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Landliz Drop"; // Поставщик
const price = 999; // цена по которой продаем
const old_price = 1299; // цена скидки
const page = "/military/rain_boots/rain_boots/3"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = 'Костюм дощовик маскувальний мультикам';


//Артикулы
const article1 = 211;



export const DATA = [
  {
    category: category,
    main_title: main_title,
    name: name,
    vendor: VENDOR_NAME,
    full_name: full_name1,
    id: 1,
    // color: ONE,
    price: price,
    price_const: price,
    old_price: old_price,
    img: heroImg1,
    hero_img: heroImg1,
    galery_img1: Img1_galery_img1,
    //galery_img2: Img1_galery_img2,
   // galery_img3: Img1_galery_img3,
    //galery_img4: Img1_galery_img4,
    gallery: [Img1gallery1, ],
//Img1gallery2, Img1gallery3, Img1gallery4
    page: page,
    banner: "",
    bannerText: "",
    division: division,
    article: article1,
    search: `${name} ${main_title} ${article1}`,
    
  },
 
];

export const DATA_LANDLIZ_DROP_59 = DATA; // Поменять на имя, для отображения на главной странице
export const INFO_LANDLIZ_DROP_59 = {
  // Как будут показываться размеры
  S: "С",
  M: "М",
  L: "Л",
  XL: "ХЛ",
  XXL: "ХХЛ",
  GOOGLE_SHEET:
    "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401",
  GOOGLE_LIST: "Landliz_Drop59", // Для отзывов (В гугл таблицу заходит в столбец "Название")
//   ONE: ONE,
};
