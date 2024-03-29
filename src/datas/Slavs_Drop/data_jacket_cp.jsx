import img1 from "../../img/_Slavs_Drop/jacket_CP/img1.jpg";
import img2 from "../../img/_Slavs_Drop/jacket_CP/img2.jpg";
import img3 from "../../img/_Slavs_Drop/jacket_CP/img3.jpg";

import heroImg1 from "../../img/_Slavs_Drop/jacket_CP/heroImg1.png";
import heroImg2 from "../../img/_Slavs_Drop/jacket_CP/heroImg2.png";
import heroImg3 from "../../img/_Slavs_Drop/jacket_CP/heroImg3.png";

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

export const GOOGLE_SHEET =
  "https://docs.google.com/spreadsheets/d/1k6vP3hBiJpiy1wFQyvtL5LSyQsvd1qfhiUKJvh4S_YI/edit#gid=578840401";
export const GOOGLE_LIST = "Shirts";


export const S = "S";
export const M = "M";
export const L = "L";
export const XL = "XL";
export const XXL = "XXL";

export const ONE = "Коричневий";
export const TWO = "Чорно-білий";
export const THREE = "Жовто-чорний";
export const FOUR = "";
export const FIVE = "";

const category = "jacket_cp";
const name = "Куртка легендарного бренду";
const VENDOR_NAME = "Slavs Drop";
const price = 2499;
const old_price = 3499;

export const DATA_SHIRTS = [
  {
    category: category,
    name: name,
    vendor: VENDOR_NAME,
    full_name: "Тепла сорочка коричнева",
    id: 1,
    color: ONE,
    price: price,
    price_const: price,
    old_price: old_price,
    img: img1,
    hero_img: heroImg1,
    galery_img1: Img1_galery_img1,
    galery_img2: Img1_galery_img2,
    galery_img3: Img1_galery_img3,
    galery_img4: Img1_galery_img4,
  },
  {
    category: category,
    name: name,
    vendor: VENDOR_NAME,
    full_name: "Тепла сорочка чорно біла",
    id: 2,
    color: TWO,
    price: price,
    price_const: price,
    old_price: old_price,
    img: img2,
    hero_img: heroImg2,
    galery_img1: Img2_galery_img1,
    galery_img2: Img2_galery_img2,
    galery_img3: Img2_galery_img3,
    galery_img4: Img2_galery_img4,
  },
  {
    category: category,
    name: name,
    vendor: VENDOR_NAME,
    full_name: "Тепла сорочка жовто чорна",
    id: 3,
    color: THREE,
    price: price,
    price_const: price,
    old_price: old_price,
    img: img3,
    hero_img: heroImg3,
    galery_img1: Img3_galery_img1,
    galery_img2: Img3_galery_img2,
    galery_img3: Img3_galery_img3,
    galery_img4: Img3_galery_img4,
  },
];
