import { lazy } from "react";

const HomePageLazy = lazy(() => import("../pages/HomePage"));
const ShirtsLazy = lazy(() => import("../pages/Farsh_Drop/Shirts"));
const Hoodie_SILazy = lazy(() => import("../pages/Slavs_Drop/Hoodie_SI"));
const ZipHoodie_SILazy = lazy(() => import("../pages/Slavs_Drop/ZipHoodie_SI"));
const Sweatshirt_SILazy = lazy(() =>
  import("../pages/Slavs_Drop/SweatShirt_SI")
);
const Jacket_CPLazy = lazy(() => import("../pages/Slavs_Drop/Jacket_CP"));
const ZipSweatshirt_SILazy = lazy(() =>
  import("../pages/Slavs_Drop/ZipSweatshirt_SI")
);

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
        path: "/sorochki/shirts",
        title: "Сорочка",
        element: <ShirtsLazy />,
        products: [
          // {
          //   path: "",
          //   title: "Сорочки",
          //   element: ,
          // },
        ],
      },
    ],
  },
];
