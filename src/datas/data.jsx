import { lazy } from "react";

const HomePageLazy = lazy(() => import("../pages/HomePage"));
const Hoodie_SILazy = lazy(() => import("../pages/Slavs_Drop/Hoodie_SI"));
const ZipHoodie_SILazy = lazy(() => import("../pages/Slavs_Drop/ZipHoodie_SI"));
const Sweatshirt_SILazy = lazy(() =>
  import("../pages/Slavs_Drop/SweatShirt_SI")
);
const ClassicSweatshirt_SILazy = lazy(() =>
  import("../pages/Slavs_Drop/ClassicSweatshirt_SI")
);
const Jacket_CPLazy = lazy(() => import("../pages/Slavs_Drop/Jacket_CP"));
const ZipSweatshirt_SILazy = lazy(() =>
  import("../pages/Slavs_Drop/ZipSweatshirt_SI")
);
const Jeans_SILazy = lazy(() => import("../pages/Slavs_Drop/Jeans_SI"));
const Shorts_SILazy = lazy(() => import("../pages/Slavs_Drop/Shorts_SI"));
const Longsliv_SILazy = lazy(() => import("../pages/Slavs_Drop/Longsliv_SI"));
const Sweatshirt_CPLazy = lazy(() =>
  import("../pages/Slavs_Drop/Sweatshirt_CP")
);
const Trousers_CPLazy = lazy(() => import("../pages/Slavs_Drop/Trousers_CP"));

const ShirtsLazy = lazy(() => import("../pages/Farsh_Drop/Shirts"));
const CostumeOverBazaLazy = lazy(() =>
  import("../pages/Farsh_Drop/CostumeOverBaza")
);
const CostumeZamshLazy = lazy(() => import("../pages/Farsh_Drop/CostumeZamsh"));
const CostumeTechLazy = lazy(() => import("../pages/Farsh_Drop/CostumeTech"));
const CostumeParashuteLazy = lazy(() =>
  import("../pages/Farsh_Drop/CostumeParashute")
);
const ComplectOverTrousersTshirtLazy = lazy(() =>
  import("../pages/Farsh_Drop/ComplectOverTrousersTshirt")
);
const KoftaRubchikOverLazy = lazy(() =>
  import("../pages/Farsh_Drop/KoftaRubchikOver")
);
const TrousersZmeykaLazy = lazy(() =>
  import("../pages/Farsh_Drop/TrousersZmeyka")
);
const TrousersKargoLazy = lazy(() =>
  import("../pages/Farsh_Drop/TrousersKargo")
);
const TrousersCutSummerLazy = lazy(() =>
  import("../pages/Farsh_Drop/TrousersCutSummer")
);
const ComplectOverShortsTshirtLazy = lazy(() =>
  import("../pages/Farsh_Drop/ComplectOverShortsTshirt")
);
const ComplectLampasShortsTshirtLazy = lazy(() =>
  import("../pages/Farsh_Drop/ComplectLampasShortsTshirt")
);
const ComplectSummerRubchikLazy = lazy(() =>
  import("../pages/Farsh_Drop/ComplectSummerRubchik")
);
const ComplectKantLazy = lazy(() => import("../pages/Farsh_Drop/ComplectKant"));
const ShortsKargoSummerLazy = lazy(() =>
  import("../pages/Farsh_Drop/ShortsKargoSummer")
);
const TshirtOverLazy = lazy(() => import("../pages/Farsh_Drop/TshirtOver"));
const TshirtSummerLongLazy = lazy(() =>
  import("../pages/Farsh_Drop/TshirtSummerLong")
);
const HoodieZmeykaOverLazy = lazy(() =>
  import("../pages/Farsh_Drop/HoodieZmeykaOver")
);
const ShortsTrikotajLazy = lazy(() =>
  import("../pages/Farsh_Drop/ShortsTrikotaj")
);
const ShortsSummerClassicLazy = lazy(() =>
  import("../pages/Farsh_Drop/ShortsSummerClassic")
);
const ShortsLyonLazy = lazy(() => import("../pages/Farsh_Drop/ShortsLyon"));
const ShirtLyonLazy = lazy(() => import("../pages/Farsh_Drop/ShirtLyon"));

export const MENU = [
  {
    path: "/",
    title: "Чоловікам",
    element: <HomePageLazy />,
    category: [
      {
        path: "",
        title: "Сорочки",
        element: "",
        products: [
          {
            path: "/men/sorochki/shirts",
            title: "Весняна сорочка",
            element: <ShirtsLazy />,
          },
          {
            path: "/men/sorochki/shirt_lyon",
            title: "Сорочка льняна",
            element: <ShirtLyonLazy />,
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
            element: <CostumeOverBazaLazy />,
          },
          {
            path: "/men/sportcomplects/costume_zamsh",
            title: "Костюм Замш",
            element: <CostumeZamshLazy />,
          },
          {
            path: "/men/sportcomplects/costume_tech",
            title: "Костюм TECH",
            element: <CostumeTechLazy />,
          },
          {
            path: "/men/sportcomplects/costume_parashute",
            title: "Костюм парашют",
            element: <CostumeParashuteLazy />,
          },
          {
            path: "/men/sportcomplects/complect_over_trousers_tshirt",
            title: "Комплект штани + футболка",
            element: <ComplectOverTrousersTshirtLazy />,
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
            element: <ComplectOverShortsTshirtLazy />,
          },
          {
            path: "/men/summercomplects/complect_lampas_shorts_tshirt",
            title: "Комплект лампас",
            element: <ComplectLampasShortsTshirtLazy />,
          },
          {
            path: "/men/summercomplects/complect_summer_rubchik",
            title: "Комплект рубчик",
            element: <ComplectSummerRubchikLazy />,
          },
          {
            path: "/men/summercomplects/complect_kant",
            title: "Комплект KANT",
            element: <ComplectKantLazy />,
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
            element: <TshirtOverLazy />,
          },
          {
            path: "/men/tshirts/tshirt_summer_long",
            title: "Футболка LONG",
            element: <TshirtSummerLongLazy />,
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
            element: <HoodieZmeykaOverLazy />,
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
            element: <KoftaRubchikOverLazy />,
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
            element: <TrousersZmeykaLazy />,
          },
          {
            path: "/men/trousers/trousers_kargo",
            title: "Штани карго",
            element: <TrousersKargoLazy />,
          },
          {
            path: "/men/trousers/trouser_cut_summer",
            title: "Штани укорочені",
            element: <TrousersCutSummerLazy />,
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
            element: <ShortsTrikotajLazy />,
          },
          {
            path: "/men/shorts/shorts_summer_classic",
            title: "Шорти класичні",
            element: <ShortsSummerClassicLazy />,
          },
          {
            path: "/men/shorts/shorts_lyon",
            title: "Шорти льняні",
            element: <ShortsLyonLazy />,
          },
          {
            path: "/men/shorts/short_kargo_summer",
            title: "Шорти карго",
            element: <ShortsKargoSummerLazy />,
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
            element: <Hoodie_SILazy />,
          },
          {
            path: "/premium/stonik/ziphoodie_si",
            title: "Зіп Худі SI",
            element: <ZipHoodie_SILazy />,
          },
          {
            path: "/premium/stonik/sweatshirt_si",
            title: "Світшот SI",
            element: <Sweatshirt_SILazy />,
          },

          {
            path: "/premium/stonik/classic_sweatshirt_si",
            title: "Класичний Світшот SI",
            element: <ClassicSweatshirt_SILazy />,
          },
          {
            path: "/premium/stonik/zipsweatshirt",
            title: "Зіп Світшот SI",
            element: <ZipSweatshirt_SILazy />,
          },
          {
            path: "/premium/stonik/jeans_si",
            title: "Джинси SI",
            element: <Jeans_SILazy />,
          },
          {
            path: "/premium/stonik/shorts_si",
            title: "Шорти SI",
            element: <Shorts_SILazy />,
          },
          {
            path: "/premium/stonik/longsliv_si",
            title: "Лонгслів SI",
            element: <Longsliv_SILazy />,
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
            element: <Jacket_CPLazy />,
          },
          {
            path: "/premium/cp_company/sweatshirt_cp",
            title: "Світшот CP",
            element: <Sweatshirt_CPLazy />,
          },
          {
            path: "/premium/cp_company/trousers_cp",
            title: "Штани CP",
            element: <Trousers_CPLazy />,
          },
        ],
      },
    ],
  },
];
