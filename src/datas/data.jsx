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
    title: "Premium одяг",
    element: <HomePageLazy />,
    category: [
      {
        path: "/premium/",
        title: "Стонік",
        element: <Hoodie_SILazy />,
        products: [
          {
            path: "/premium/hoodie_si",
            title: "Hoodie SI",
            element: <Hoodie_SILazy />,
          },
          {
            path: "/premium/ziphoodie_si",
            title: "Ziphoodie SI",
            element: <ZipHoodie_SILazy />,
          },
          {
            path: "/premium/sweatshirt_si",
            title: "Sweathshirt SI",
            element: <Sweatshirt_SILazy />,
          },
          
          {
            path: "/premium/zipsweatshirt",
            title: "Zipsweatshirt SI",
            element: <ZipSweatshirt_SILazy />,
          },
        ],
      },
      {
        path: "/premium/",
        title: "CP Компани",
        element: <Hoodie_SILazy />,
        products: [
          {
            path: "/premium/jackect_cp",
            title: "Jacket CP",
            element: <Jacket_CPLazy />,
          },
        ]
      },
    ],
  },
  {
    path: "/sorochki",
    title: "Сорочки",
    element: "",
    category: [
      {
        path: "/sorochki/shirts",
        title: "Весна",
        element: <ShirtsLazy />,
        products: [
          {
            path: "/sorochki/shirts",
            title: "Shirts",
            element: <ShirtsLazy />,
          },
        ]
      },
      
    ],
  },
];
