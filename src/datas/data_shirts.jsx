export const ONE = "Коричневий";
export const TWO = "Чорно-білий";
export const THREE = "Жовто-чорний";

import img1 from "../img/shirts/img1.jpg";
import img2 from "../img/shirts/img2.jpg";
import img3 from "../img/shirts/img3.jpg";

import heroImg1 from "../img/shirts/heroImg1.png";
import heroImg2 from "../img/shirts/heroImg2.png";
import heroImg3 from "../img/shirts/heroImg3.png";

import Img1_galery_img1 from "../img/shirts/img1_galery_img1.jpg"
import Img1_galery_img2 from "../img/shirts/img1_galery_img2.jpg"
import Img1_galery_img3 from "../img/shirts/img1_galery_img3.jpg"
import Img1_galery_img4 from "../img/shirts/img1_galery_img4.jpg"

import Img2_galery_img1 from "../img/shirts/img2_galery_img1.jpg"
import Img2_galery_img2 from "../img/shirts/img2_galery_img2.jpg"
import Img2_galery_img3 from "../img/shirts/img2_galery_img3.jpg"
import Img2_galery_img4 from "../img/shirts/img2_galery_img4.jpg"

import Img3_galery_img1 from "../img/shirts/img3_galery_img1.jpg"
import Img3_galery_img2 from "../img/shirts/img3_galery_img2.jpg"
import Img3_galery_img3 from "../img/shirts/img3_galery_img3.jpg"
import Img3_galery_img4 from "../img/shirts/img3_galery_img4.jpg"

const category = "shirts";
const name = "Весняна сорочка в клітинку";

export const DATA_SHIRTS = [
  {
    category: category,
    name: name,
    id: 1,
    color: ONE,
    price: 999,
    old_price: 1599,
    img: img1,
    hero_img: heroImg1,
    galery_img1 : Img1_galery_img1,
    galery_img2 : Img1_galery_img2,
    galery_img3 : Img1_galery_img3,
    galery_img4 : Img1_galery_img4,
  },
  {
    category: category,
    name: name,
    id: 2,
    color: TWO,
    price: 999,
    old_price: 1599,
    img: img2,
    hero_img: heroImg2,
    galery_img1 : Img2_galery_img1,
    galery_img2 : Img2_galery_img2,
    galery_img3 : Img2_galery_img3,
    galery_img4 : Img2_galery_img4,
  },
  {
    category: category,
    name: name,
    id: 3,
    color: THREE,
    price: 999,
    old_price: 1599,
    img: img3,
    hero_img: heroImg3,
    galery_img1 : Img3_galery_img1,
    galery_img2 : Img3_galery_img2,
    galery_img3 : Img3_galery_img3,
    galery_img4 : Img3_galery_img4,
  },
];
