import { lazy } from "react";
import {
  DATA_FARSH_DROP_SHIRTS,
  INFO_FARSH_DROP_SHIRTS,
} from "./Farsh_Drop/data_shirts";
import ProductPage from "../pages/ProductPage";
import { CONTENT_FARSH_DROP_SHIRTS } from "../contents/Farsh_Drop/shirts";
import {
  DATA_FARSH_DROP_ShirtLyon,
  INFO_FARSH_DROP_ShirtLyon,
} from "./Farsh_Drop/data_shirtLyon";
import { CONTENT_FARSH_DROP_ShirtLyon } from "../contents/Farsh_Drop/ShirtLyon";
import {
  DATA_SLAVS_DROP_HOODIE_SI,
  INFO_SLAVS_DROP_HOODIE_SI,
} from "./Slavs_Drop/data_hoodie_si";
import { CONTENT_SLAVS_DROP_HOODIE_SI } from "../contents/Slavs_Drop/hoodie_si";
import {
  DATA_SLAVS_DROP_ZIPHOODIE_SI,
  INFO_SLAVS_DROP_ZIPHOODIE_SI,
} from "./Slavs_Drop/data_ziphoodie_si";
import {
  DATA_SLAVS_DROP_SWEATSHIRT_SI,
  INFO_SLAVS_DROP_SWEATSHIRT_SI,
} from "./Slavs_Drop/data_sweatshirt_si";
import { CONTENT_SLAVS_DROP_SWEATSHIRT_SI } from "../contents/Slavs_Drop/sweatshirt_si";
import {
  DATA_FARSH_DROP_CostumeOverBaza,
  INFO_FARSH_DROP_CostumeOverBaza,
} from "./Farsh_Drop/data_costumeOverBaza";
import { CONTENT_FARSH_DROP_CostumeOverBaza } from "../contents/Farsh_Drop/CostumeOverBaza";
import {
  DATA_FARSH_DROP_CostumeZamsh,
  INFO_FARSH_DROP_CostumeZamsh,
} from "./Farsh_Drop/data_costumeZamsh";
import { CONTENT_FARSH_DROP_CostumeZamsh } from "../contents/Farsh_Drop/CostumeZamsh";
import {
  DATA_FARSH_DROP_CostumeTech,
  INFO_FARSH_DROP_CostumeTech,
} from "./Farsh_Drop/data_costumeTech";
import { CONTENT_FARSH_DROP_CostumeTech } from "../contents/Farsh_Drop/CostumeTech";
import {
  DATA_FARSH_DROP_CostumeParashute,
  INFO_FARSH_DROP_CostumeParashute,
} from "./Farsh_Drop/data_costumeParashute";
import { CONTENT_FARSH_DROP_CostumeParashute } from "../contents/Farsh_Drop/CostumeParashute";
import {
  DATA_FARSH_DROP_ComplectOverTrousersTshirt,
  INFO_FARSH_DROP_ComplectOverTrousersTshirt,
} from "./Farsh_Drop/data_complectOverTrousersTshirt";
import { CONTENT_FARSH_DROP_ComplectOverTrousersTshirt } from "../contents/Farsh_Drop/ComplectOverTrousersTshirt";
import {
  DATA_FARSH_DROP_ComplectOverShortsTshirt,
  INFO_FARSH_DROP_ComplectOverShortsTshirt,
} from "./Farsh_Drop/data_complectOverShortsTshirt";
import { CONTENT_FARSH_DROP_ComplectOverShortsTshirt } from "../contents/Farsh_Drop/ComplectOverShortsTshirt";
import {
  DATA_FARSH_DROP_ComplectLampasShortsTshirt,
  INFO_FARSH_DROP_ComplectLampasShortsTshirt,
} from "./Farsh_Drop/data_complectLampasShortsTshirt";
import { CONTENT_FARSH_DROP_ComplectLampasShortsTshirt } from "../contents/Farsh_Drop/ComplectLampasShortsTshirt";
import {
  DATA_FARSH_DROP_ComplectSummerRubchik,
  INFO_FARSH_DROP_ComplectSummerRubchik,
} from "./Farsh_Drop/data_complectSummerRubchik";
import { CONTENT_FARSH_DROP_ComplectSummerRubchik } from "../contents/Farsh_Drop/ComplectSummerRubchik";
import {
  DATA_FARSH_DROP_ComplectKant,
  INFO__FARSH_DROP_ComplectKant,
} from "./Farsh_Drop/data_complectKant";
import { CONTENT_FARSH_DROP_ComplectKant } from "../contents/Farsh_Drop/ComplectKant";
import {
  DATA_FARSH_DROP_TshirtOver,
  INFO_FARSH_DROP_TshirtOver,
} from "./Farsh_Drop/data_tshirtOver";
import { CONTENT_FARSH_DROP_TshirtOver } from "../contents/Farsh_Drop/TshirtOver";
import {
  DATA_FARSH_DROP_TshirtSummerLong,
  INFO_FARSH_DROP_TshirtSummerLong,
} from "./Farsh_Drop/data_TshirtSummerLong";
import { CONTENT_FARSH_DROP_TshirtSummerLong } from "../contents/Farsh_Drop/TshirtSummerLong";
import {
  DATA_FARSH_DROP_HoodieZmeykaOver,
  INFO_FARSH_DROP_HoodieZmeykaOver,
} from "./Farsh_Drop/data_hoodieZmeykaOver";
import { CONTENT_FARSH_DROP_HoodieZmeykaOver } from "../contents/Farsh_Drop/HoodieZmeykaOver";
import {
  DATA_FARSH_DROP_KoftaRubchikOver,
  INFO_FARSH_DROP_KoftaRubchikOver,
} from "./Farsh_Drop/data_koftaRubchikOver";
import { CONTENT_FARSH_DROP_KoftaRubchikOver } from "../contents/Farsh_Drop/KoftaRubchikOver";
import {
  DATA_FARSH_DROP_TrousersZmeyka,
  INFO_FARSH_DROP_TrousersZmeyka,
} from "./Farsh_Drop/data_trousersZmeyka";
import { CONTENT_FARSH_DROP_TrousersZmeyka } from "../contents/Farsh_Drop/TrousersZmeyka";
import {
  DATA_FARSH_DROP_TrousersKargo,
  INFO_FARSH_DROP_TrousersKargo,
} from "./Farsh_Drop/data_trousersKargo";
import { CONTENT_FARSH_DROP_TrousersKargo } from "../contents/Farsh_Drop/TrousersKargo";
import {
  DATA_FARSH_DROP_TrousersCutSummer,
  INFO_FARSH_DROP_TrousersCutSummer,
} from "./Farsh_Drop/data_trousersCutSummer";
import { CONTENT_FARSH_DROP_TrousersCutSummer } from "../contents/Farsh_Drop/TrousersCutSummer";
import {
  DATA_FARSH_DROP_ShortsTrikotaj,
  INFO_FARSH_DROP_ShortsTrikotaj,
} from "./Farsh_Drop/data_shortsTrikotaj";
import { CONTENT_FARSH_DROP_ShortsTrikotaj } from "../contents/Farsh_Drop/ShortsTrikotaj";
import {
  DATA_FARSH_DROP_ShortsSummerClassic,
  INFO_FARSH_DROP_ShortsSummerClassic,
} from "./Farsh_Drop/data_shortsSummerClassic";
import { CONTENT_FARSH_DROP_ShortsSummerClassic } from "../contents/Farsh_Drop/ShortsSummerClassic";
import {
  DATA_FARSH_DROP_ShortsLyon,
  INFO_FARSH_DROP_ShortsLyon,
} from "./Farsh_Drop/data_ShortsLyon";
import { CONTENT_FARSH_DROP_ShortsLyon } from "../contents/Farsh_Drop/ShortsLyon";
import {
  DATA_FARSH_DROP_ShortsKargoSummer,
  INFO_FARSH_DROP_ShortsKargoSummer,
} from "./Farsh_Drop/data_shortsKargoSummer";
import { CONTENT_FARSH_DROP_ShortsKargoSummer } from "../contents/Farsh_Drop/ShortsKargoSummer";
import { CONTENT_SLAVS_DROP_ZIPHOODIE_SI } from "../contents/Slavs_Drop/ziphoodie_si";
import {
  DATA_SLAVS_DROP_ClassicSweatshirt_SI,
  INFO_SLAVS_DROP_ClassicSweatshirt_SI,
} from "./Slavs_Drop/data_classicsweatshirt_SI";
import { CONTENT_SLAVS_DROP_ClassicSweatshirt_SI } from "../contents/Slavs_Drop/classicsweatshirt_SI";
import {
  DATA_SLAVS_DROP_Zipsweatshirt_SI,
  INFO_SLAVS_DROP_Zipsweatshirt_SI,
} from "./Slavs_Drop/data_zipsweatshirt_si";
import { CONTENT_SLAVS_DROP_Zipsweatshirt_SI } from "../contents/Slavs_Drop/Zipsweatshirt_SI";
import {
  DATA_SLAVS_DROP_Jeans_SI,
  INFO_SLAVS_DROP_Jeans_SI,
} from "./Slavs_Drop/data_jeans_si";
import { CONTENT_SLAVS_DROP_Jeans_SI } from "../contents/Slavs_Drop/Jeans_SI";
import {
  DATA_SLAVS_DROP_Shorts_SI,
  INFO_SLAVS_DROP_Shorts_SI,
} from "./Slavs_Drop/data_shorts_si";
import { CONTENT_SLAVS_DROP_Shorts_SI } from "../contents/Slavs_Drop/Shorts_SI";
import {
  DATA_SLAVS_DROP_Longsliv_SI,
  INFO_SLAVS_DROP_Longsliv_SI,
} from "./Slavs_Drop/data_longsliv_si";
import { CONTENT_SLAVS_DROP_Longsliv_SI } from "../contents/Slavs_Drop/Longsliv_SI";
import {
  DATA_SLAVS_DROP_JACKET_CP,
  INFO_SLAVS_DROP_JACKET_CP,
} from "./Slavs_Drop/data_jacket_cp";
import { CONTENT_SLAVS_DROP_JACKET_CP } from "../contents/Slavs_Drop/jacket_cp";
import {
  DATA_SLAVS_DROP_Sweatshirt_CP,
  INFO_SLAVS_DROP_Sweatshirt_CP,
} from "./Slavs_Drop/data_sweatshirt_cp";
import { CONTENT_SLAVS_DROP_Sweatshirt_CP } from "../contents/Slavs_Drop/Sweatshirt_CP";
import {
  DATA_SLAVS_DROP_Trousers_CP,
  INFO_SLAVS_DROP_Trousers_CP,
} from "./Slavs_Drop/data_trousers_cp";
import { CONTENT_SLAVS_DROP_Trousers_CP } from "../contents/Slavs_Drop/Trousers_CP";
import ProductPage__WithoutAbout from "../pages/ProductPage__WithoutAbout";
import { DATA_HOMEPAGE } from "../datas/data_homePage";
import HomePage from "../pages/HomePage";


export const MENU = [
  {
    path: "/",
    title: "Чоловікам",
    element: <HomePage data={DATA_HOMEPAGE} />,
    category: [
      {
        path: "",
        title: "Сорочки",
        element: "",
        products: [
          {
            path: "/men/sorochki/shirts",
            title: "Весняна сорочка",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_SHIRTS}
                info={INFO_FARSH_DROP_SHIRTS}
                content={CONTENT_FARSH_DROP_SHIRTS}
              />
            ),
          },
          {
            path: "/men/sorochki/shirt_lyon",
            title: "Сорочка льняна",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_ShirtLyon}
                info={INFO_FARSH_DROP_ShirtLyon}
                content={CONTENT_FARSH_DROP_ShirtLyon}
              />
            ),
          },
        ],
      },
      {
        path: "",
        title: "Спортивні костюми",
        element: "",
        products: [
          {
            path: "/men/sportcomplects/costume_over_baza",
            title: "Костюм оверсайз BASE",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_CostumeOverBaza}
                info={INFO_FARSH_DROP_CostumeOverBaza}
                content={CONTENT_FARSH_DROP_CostumeOverBaza}
              />
            ),
          },
          {
            path: "/men/sportcomplects/costume_zamsh",
            title: "Костюм Замш",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_CostumeZamsh}
                info={INFO_FARSH_DROP_CostumeZamsh}
                content={CONTENT_FARSH_DROP_CostumeZamsh}
              />
            ),
          },
          {
            path: "/men/sportcomplects/costume_tech",
            title: "Костюм TECH",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_CostumeTech}
                info={INFO_FARSH_DROP_CostumeTech}
                content={CONTENT_FARSH_DROP_CostumeTech}
              />
            ),
          },
          {
            path: "/men/sportcomplects/costume_parashute",
            title: "Костюм парашют",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_CostumeParashute}
                info={INFO_FARSH_DROP_CostumeParashute}
                content={CONTENT_FARSH_DROP_CostumeParashute}
              />
            ),
          },
          {
            path: "/men/sportcomplects/complect_over_trousers_tshirt",
            title: "Комплект штани + футболка",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_ComplectOverTrousersTshirt}
                info={INFO_FARSH_DROP_ComplectOverTrousersTshirt}
                content={CONTENT_FARSH_DROP_ComplectOverTrousersTshirt}
              />
            ),
          },
        ],
      },
      {
        path: "",
        title: "Літні комплекти",
        element: "",
        products: [
          {
            path: "/men/summercomplects/complect_over_shorts_tshirt",
            title: "Комплект оверсайз",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_ComplectOverShortsTshirt}
                info={INFO_FARSH_DROP_ComplectOverShortsTshirt}
                content={CONTENT_FARSH_DROP_ComplectOverShortsTshirt}
              />
            ),
          },
          {
            path: "/men/summercomplects/complect_lampas_shorts_tshirt",
            title: "Комплект лампас",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_ComplectLampasShortsTshirt}
                info={INFO_FARSH_DROP_ComplectLampasShortsTshirt}
                content={CONTENT_FARSH_DROP_ComplectLampasShortsTshirt}
              />
            ),
          },
          {
            path: "/men/summercomplects/complect_summer_rubchik",
            title: "Комплект рубчик",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_ComplectSummerRubchik}
                info={INFO_FARSH_DROP_ComplectSummerRubchik}
                content={CONTENT_FARSH_DROP_ComplectSummerRubchik}
              />
            ),
          },
          {
            path: "/men/summercomplects/complect_kant",
            title: "Комплект KANT",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_ComplectKant}
                info={INFO__FARSH_DROP_ComplectKant}
                content={CONTENT_FARSH_DROP_ComplectKant}
              />
            ),
          },
        ],
      },
      {
        path: "",
        title: "Футболки",
        element: "",
        products: [
          {
            path: "/men/tshirts/tshirt_over",
            title: "Футболка оверсайз BASE",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_TshirtOver}
                info={INFO_FARSH_DROP_TshirtOver}
                content={CONTENT_FARSH_DROP_TshirtOver}
              />
            ),
          },
          {
            path: "/men/tshirts/tshirt_summer_long",
            title: "Футболка LONG",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_TshirtSummerLong}
                info={INFO_FARSH_DROP_TshirtSummerLong}
                content={CONTENT_FARSH_DROP_TshirtSummerLong}
              />
            ),
          },
        ],
      },
      {
        path: "",
        title: "Худі",
        element: "",
        products: [
          {
            path: "/men/hoodie/hoodie_zmeyka",
            title: "Худі на блискавці оверсайз",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_HoodieZmeykaOver}
                info={INFO_FARSH_DROP_HoodieZmeykaOver}
                content={CONTENT_FARSH_DROP_HoodieZmeykaOver}
              />
            ),
          },
        ],
      },
      {
        path: "",
        title: "Лонгсліви",
        element: "",
        products: [
          {
            path: "/men/longsliv/kofta_rubchik_over",
            title: "Кофта рубчик оверсайз",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_KoftaRubchikOver}
                info={INFO_FARSH_DROP_KoftaRubchikOver}
                content={CONTENT_FARSH_DROP_KoftaRubchikOver}
              />
            ),
          },
        ],
      },

      {
        path: "",
        title: "Штани",
        element: "",
        products: [
          {
            path: "/men/trousers/trousers_zmeyka",
            title: "Штани завужені",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_TrousersZmeyka}
                info={INFO_FARSH_DROP_TrousersZmeyka}
                content={CONTENT_FARSH_DROP_TrousersZmeyka}
              />
            ),
          },
          {
            path: "/men/trousers/trousers_kargo",
            title: "Штани карго",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_TrousersKargo}
                info={INFO_FARSH_DROP_TrousersKargo}
                content={CONTENT_FARSH_DROP_TrousersKargo}
              />
            ),
          },
          {
            path: "/men/trousers/trouser_cut_summer",
            title: "Штани укорочені",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_TrousersCutSummer}
                info={INFO_FARSH_DROP_TrousersCutSummer}
                content={CONTENT_FARSH_DROP_TrousersCutSummer}
              />
            ),
          },
        ],
      },
      {
        path: "",
        title: "Шорти",
        element: "",
        products: [
          {
            path: "/men/shorts/shorts_trikotaj",
            title: "Шорти трикотажні",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_ShortsTrikotaj}
                info={INFO_FARSH_DROP_ShortsTrikotaj}
                content={CONTENT_FARSH_DROP_ShortsTrikotaj}
              />
            ),
          },
          {
            path: "/men/shorts/shorts_summer_classic",
            title: "Шорти класичні",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_ShortsSummerClassic}
                info={INFO_FARSH_DROP_ShortsSummerClassic}
                content={CONTENT_FARSH_DROP_ShortsSummerClassic}
              />
            ),
          },
          {
            path: "/men/shorts/shorts_lyon",
            title: "Шорти льняні",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_ShortsLyon}
                info={INFO_FARSH_DROP_ShortsLyon}
                content={CONTENT_FARSH_DROP_ShortsLyon}
              />
            ),
          },
          {
            path: "/men/shorts/short_kargo_summer",
            title: "Шорти карго",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_FARSH_DROP_ShortsKargoSummer}
                info={INFO_FARSH_DROP_ShortsKargoSummer}
                content={CONTENT_FARSH_DROP_ShortsKargoSummer}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    path: "",
    title: "Premium Бренди",
    element: "",
    category: [
      {
        path: "",
        title: "Стонік",
        element: "",
        products: [
          {
            path: "/premium/stonik/hoodie_si",
            title: "Худі SI",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_HOODIE_SI}
                info={INFO_SLAVS_DROP_HOODIE_SI}
                content={CONTENT_SLAVS_DROP_HOODIE_SI}
              />
            ),
          },
          {
            path: "/premium/stonik/ziphoodie_si",
            title: "Зіп Худі SI",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_ZIPHOODIE_SI}
                info={INFO_SLAVS_DROP_ZIPHOODIE_SI}
                content={CONTENT_SLAVS_DROP_ZIPHOODIE_SI}
              />
            ),
          },
          {
            path: "/premium/stonik/sweatshirt_si",
            title: "Світшот SI",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_SWEATSHIRT_SI}
                info={INFO_SLAVS_DROP_SWEATSHIRT_SI}
                content={CONTENT_SLAVS_DROP_SWEATSHIRT_SI}
              />
            ),
          },

          {
            path: "/premium/stonik/classic_sweatshirt_si",
            title: "Класичний Світшот SI",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_ClassicSweatshirt_SI}
                info={INFO_SLAVS_DROP_ClassicSweatshirt_SI}
                content={CONTENT_SLAVS_DROP_ClassicSweatshirt_SI}
              />
            ),
          },
          {
            path: "/premium/stonik/zipsweatshirt",
            title: "Зіп Світшот SI",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_Zipsweatshirt_SI}
                info={INFO_SLAVS_DROP_Zipsweatshirt_SI}
                content={CONTENT_SLAVS_DROP_Zipsweatshirt_SI}
              />
            ),
          },
          {
            path: "/premium/stonik/jeans_si",
            title: "Джинси SI",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_Jeans_SI}
                info={INFO_SLAVS_DROP_Jeans_SI}
                content={CONTENT_SLAVS_DROP_Jeans_SI}
              />
            ),
          },
          {
            path: "/premium/stonik/shorts_si",
            title: "Шорти SI",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_Shorts_SI}
                info={INFO_SLAVS_DROP_Shorts_SI}
                content={CONTENT_SLAVS_DROP_Shorts_SI}
              />
            ),
          },
          {
            path: "/premium/stonik/longsliv_si",
            title: "Лонгслів SI",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_Longsliv_SI}
                info={INFO_SLAVS_DROP_Longsliv_SI}
                content={CONTENT_SLAVS_DROP_Longsliv_SI}
              />
            ),
          },
        ],
      },
      {
        path: "",
        title: "CP Компани",
        element: "",
        products: [
          {
            path: "/premium/cp_company/jackect_cp",
            title: "Куртка CP",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_JACKET_CP}
                info={INFO_SLAVS_DROP_JACKET_CP}
                content={CONTENT_SLAVS_DROP_JACKET_CP}
              />
            ),
          },
          {
            path: "/premium/cp_company/sweatshirt_cp",
            title: "Світшот CP",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_Sweatshirt_CP}
                info={INFO_SLAVS_DROP_Sweatshirt_CP}
                content={CONTENT_SLAVS_DROP_Sweatshirt_CP}
              />
            ),
          },
          {
            path: "/premium/cp_company/trousers_cp",
            title: "Штани CP",
            element: (
              <ProductPage__WithoutAbout
                data={DATA_SLAVS_DROP_Trousers_CP}
                info={INFO_SLAVS_DROP_Trousers_CP}
                content={CONTENT_SLAVS_DROP_Trousers_CP}
              />
            ),
          },
        ],
      },
    ],
  },
];
