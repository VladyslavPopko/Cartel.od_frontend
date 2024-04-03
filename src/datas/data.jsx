import { lazy } from "react";

const HomePageLazy = lazy(() => import("../pages/HomePage"));
const Hoodie_SILazy = lazy(() => import("../pages/Slavs_Drop/Hoodie_SI"));
const ZipHoodie_SILazy = lazy(() => import("../pages/Slavs_Drop/ZipHoodie_SI"));
const Sweatshirt_SILazy = lazy(() =>
  import("../pages/Slavs_Drop/SweatShirt_SI")
);
const Jacket_CPLazy = lazy(() => import("../pages/Slavs_Drop/Jacket_CP"));
const ZipSweatshirt_SILazy = lazy(() =>
  import("../pages/Slavs_Drop/ZipSweatshirt_SI")
);
const Jeans_SILazy = lazy(() => import("../pages/Slavs_Drop/Jeans_SI"));
const Shorts_SILazy = lazy(() => import("../pages/Slavs_Drop/Shorts_SI"));
const Longsliv_SILazy = lazy(() => import("../pages/Slavs_Drop/Longsliv_SI"));
const Sweatshirt_CPLazy = lazy(() => import("../pages/Slavs_Drop/Sweatshirt_CP"));
const Trousers_CPLazy = lazy(() => import("../pages/Slavs_Drop/Trousers_CP"));

const ShirtsLazy = lazy(() => import("../pages/Farsh_Drop/Shirts"));
const CostumeOverBazaLazy = lazy(() => import("../pages/Farsh_Drop/CostumeOverBaza"));
const CostumeTechLazy = lazy(() => import("../pages/Farsh_Drop/CostumeTech"));
const CostumeParashuteLazy = lazy(() => import("../pages/Farsh_Drop/CostumeParashute"));
const ComplectOverTrousersTshirtLazy = lazy(() => import("../pages/Farsh_Drop/ComplectOverTrousersTshirt"));
const KoftaRubchikOverLazy = lazy(() => import("../pages/Farsh_Drop/KoftaRubchikOver"));
const TrousersZmeykaLazy = lazy(() => import("../pages/Farsh_Drop/TrousersZmeyka"));
const TrousersKargoLazy = lazy(() => import("../pages/Farsh_Drop/TrousersKargo"));
const TrousersCutSummerLazy = lazy(() => import("../pages/Farsh_Drop/TrousersCutSummer"));
const ComplectOverShortsTshirtLazy = lazy(() => import("../pages/Farsh_Drop/ComplectOverShortsTshirt"));
const ComplectLampasShortsTshirtLazy = lazy(() => import("../pages/Farsh_Drop/ComplectLampasShortsTshirt"));
const ComplectSummerRubchikLazy = lazy(() => import("../pages/Farsh_Drop/ComplectSummerRubchik"));
const ComplectKantLazy = lazy(() => import("../pages/Farsh_Drop/ComplectKant"));
const ShortsKargoSummerLazy = lazy(() => import("../pages/Farsh_Drop/ShortsKargoSummer"));
const TshirtOverLazy = lazy(() => import("../pages/Farsh_Drop/TshirtOver"));
const TshirtSummerLongLazy = lazy(() => import("../pages/Farsh_Drop/TshirtSummerLong"));
const HoodieZmeykaOverLazy = lazy(() => import("../pages/Farsh_Drop/HoodieZmeykaOver"));
const ShortsTrikotajLazy = lazy(() => import("../pages/Farsh_Drop/ShortsTrikotaj"));
const ShortsSummerClassicLazy = lazy(() => import("../pages/Farsh_Drop/ShortsSummerClassic"));
const ShortsLyonLazy = lazy(() => import("../pages/Farsh_Drop/ShortsLyon"));
const ShirtLyonLazy = lazy(() => import("../pages/Farsh_Drop/ShirtLyon"));

export const MENU = [
  {
    path: "/",
    title: "Premium Бренди",
    element: <HomePageLazy />,
    category: [
      {
        path: "",
        title: "Стонік",
        element: "",
        products: [
          {
            path: "/premium/hoodie_si",
            title: "Худі SI",
            element: <Hoodie_SILazy />,
          },
          {
            path: "/premium/ziphoodie_si",
            title: "Зіп Худі SI",
            element: <ZipHoodie_SILazy />,
          },
          {
            path: "/premium/sweatshirt_si",
            title: "Світшот SI",
            element: <Sweatshirt_SILazy />,
          },

          {
            path: "/premium/zipsweatshirt",
            title: "Зіп Світшот SI",
            element: <ZipSweatshirt_SILazy />,
          },
          {
            path: "/premium/jeans_si",
            title: "Jeans_SI",
            element: <Jeans_SILazy />,
          },
          {
            path: "/premium/shorts_si",
            title: "Shorts_SI",
            element: <Shorts_SILazy />,
          },
          {
            path: "/premium/longsliv_si",
            title: "Longsliv_SI",
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
            path: "/premium/jackect_cp",
            title: "Куртка CP",
            element: <Jacket_CPLazy />,
          },
          {
            path: "/premium/sweatshirt_cp",
            title: "Sweatshirt_CP",
            element: <Sweatshirt_CPLazy />,
          },
          {
            path: "/premium/trousers_cp",
            title: "Trousers_CP",
            element: <Trousers_CPLazy />,
          },
        ],
      },
    ],
  },
  {
    path: "",
    title: "Чоловікам",
    element: "",
    category: [
      {
        path: "",
        title: "Сорочки",
        element: "",
        products: [
          {
            path: "/sorochki/shirts",
            title: "Весняни сорочки",
            element: <ShirtsLazy />,
          },
          {
            path: "/sorochki/shirt_lyon",
            title: "ShirtLyon",
            element: <ShirtLyonLazy />,
          },
        ],
      },
      {
        path: "",
        title: "Шорти",
        element: "",
        products: [
          {
            path: "/shorts/shorts_trikotaj",
            title: "ShortsTrikotaj",
            element: <ShortsTrikotajLazy />,
          },
          {
            path: "/shorts/shorts_summer_classic",
            title: "ShortsSummerClassic",
            element: <ShortsSummerClassicLazy />,
          },
          {
            path: "/shorts/shorts_lyon",
            title: "ShortsLyon",
            element: <ShortsLyonLazy />,
          },
        ],
      },
      {
        path: "",
        title: "Худі",
        element: "",
        products: [
          {
            path: "/hoodie/hoodie_zmeyka",
            title: "HoodieZmeykaOver",
            element: <HoodieZmeykaOverLazy />,
          },
        ],
      },
      {
        path: "",
        title: "Штани",
        element: "",
        products: [
          {
            path: "/trousers/trousers_zmeyka",
            title: "TrousersZmeyka",
            element: <TrousersZmeykaLazy />,
          },
          {
            path: "/trousers/trousers_kargo",
            title: "TrousersKargo",
            element: <TrousersKargoLazy />,
          },
          {
            path: "/trousers/trouser_cut_summer",
            title: "TrousersCutSummer",
            element: <TrousersCutSummerLazy />,
          },
        ],
      },
      {
        path: "",
        title: "Лонгсліви",
        element: "",
        products: [
          {
            path: "/longsliv/kofta_rubchik_over",
            title: "KoftaRubchikOver",
            element: <KoftaRubchikOverLazy />,
          },
        ],
      },
      {
        path: "",
        title: "Футболки",
        element: "",
        products: [
          {
            path: "/tshirts/tshirt_over",
            title: "TshirtOver",
            element: <TshirtOverLazy />,
          },
          {
            path: "/tshirts/tshirt_summer_long",
            title: "TshirtSummerLong",
            element: <TshirtSummerLongLazy />,
          },
        ],
      },
      {
        path: "",
        title: "Літні комплекти",
        element: "",
        products: [
          {
            path: "/summercomplects/complect_over_shorts_tshirt",
            title: "ComplectOverShortsTshirt",
            element: <ComplectOverShortsTshirtLazy />,
          },
          {
            path: "/summercomplects/complect_lampas_shorts_tshirt",
            title: "ComplectLampasShortsTshirt",
            element: <ComplectLampasShortsTshirtLazy />,
          },
          {
            path: "/summercomplects/complect_summer_rubchik",
            title: "ComplectSummerRubchik",
            element: <ComplectSummerRubchikLazy />,
          },
          {
            path: "/summercomplects/complect_kant",
            title: "ComplectKant",
            element: <ComplectKantLazy />,
          },
          {
            path: "/summercomplects/short_kargo_summer",
            title: "ShortsKargoSummer",
            element: <ShortsKargoSummerLazy />,
          },
        ],
      },
      {
        path: "",
        title: "Спортивні костюми",
        element: "",
        products: [
          {
            path: "/sportcomplects/costume_over_baza",
            title: "CostumeOverBaza",
            element: <CostumeOverBazaLazy />,
          },
          {
            path: "/sportcomplects/costume_tech",
            title: "CostumeTech",
            element: <CostumeTechLazy />,
          },
          {
            path: "/sportcomplects/costume_parashute",
            title: "CostumeParashute",
            element: <CostumeParashuteLazy />,
          },
          {
            path: "/sportcomplects/complect_over_trousers_tshirt",
            title: "ComplectOverTrousersTshirt",
            element: <ComplectOverTrousersTshirtLazy />,
          },

        ],
      },
    ],
  },
];
