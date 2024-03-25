export const ONE_SHIRT = "Коричневий";
export const TWO_SHIRT = "Чорно-білий";
export const THREE_SHIRT = "Жовто-чорний";

import img1 from "../img/shirts/img1.jpg"
import img2 from "../img/shirts/img1.jpg"
import img3 from "../img/shirts/img1.jpg"

const category = "shirts";
const name = "Весняна сорочка в клітинку";

export const DATA_SHIRTS = [
    {
      category: category,
      name: name,
      id: 1,
      color: ONE_SHIRT,
      price: 999,
      old_price: 1599,
      img: img1,
    },
    {
      category: category,
      name: name,
      id: 2,
      color: TWO_SHIRT,
      price: 999,
      old_price: 1599,
      img: img2,
    },
    {
      category: category,
      name: name,
      id: 3,
      color: THREE_SHIRT,
      price: 999,
      old_price: 1599,
      img: img3,
    },
  ];