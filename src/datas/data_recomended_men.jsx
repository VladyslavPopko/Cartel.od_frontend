import heroImg1 from "../img/_Farsh_Drop/ShortsLyon/heroImg1.png";
import heroImg2 from "../img/_Farsh_Drop/ShortsLyon/heroImg2.png";

//Какие цвета (классы для выбора цвета и в карточке товара)
export const ONE = "Молоко";
export const TWO = "Чорні";

const division = "Штани та шорти";
const category = "Шорти"; // Категория (для фильтра на главной странице)
const name = "Шорти льняні"; // Пишется в корзине товара
const main_title = "Шорти льняні"; // Пишется в фильтре на главной странице и в каталоге
const VENDOR_NAME = "Farsh Drop"; // Поставщик
const price = 799; // цена по которой продаем
const old_price = 1049; // цена скидки
const page = "/men/shorts/shorts_lyon"; // на какой странице находится товар

// Как товары называются в CRM
const full_name1 = "Шорты молоко лён";
const full_name2 = "Шорты чёрные лён";

//Артикулы
const article1 = 58;
const article2 = 59;

export const DATA_RECOMENDED_MEN = [
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

    page: page,
    banner: "",
    bannerText: "",

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

    page: page,
    banner: "",
    bannerText: "",

    division: division,
    article: article2,
    search: `${name} ${main_title} ${article2}`,
  },
];
