import cartEmptyImg from "../img/CartBlock/cart.svg";

import submitImg from "../img/SubmitBlock/img.svg";

import contentImg from "../img/ThankyouBlock/box.jpg";

export const CONTENT = {
  contentHeader: {
    title: "ВЕСНЯНИЙ РОЗПРОДАЖ до -60% ВІД СТАРОЇ ЦІНИ",
  },
  contentCart: {
    title: "Кошик",
    empty_img: cartEmptyImg,
    empty_text: "Кошик пустий.",
    empty_subtext: "Але це можна легко виправити)",
  },
  contentSubmit: {
    title_name: "Оформлення замовлення",
    content_title: "Укажіть свої контактні дані",
    content_text: "Ми зв’яжемося з вами у найближчий час",
    img: submitImg,
  },
  contentThankYou: {
    title: "Дякуємо за замовлення!",
    text: "Очікуйте на менеджера для уточнення адреси доставки та способу оплати",
    img: contentImg,
    status: "Стан замовлення: упаковується",
  },
  contentAssign: {
    title: "Користувацька угода",
    link: "cartel.od.ua",
  },
  contentPolitics: {
    title: "Політика конфіденційності",
    link: "cartel.od.ua",
  },
};
