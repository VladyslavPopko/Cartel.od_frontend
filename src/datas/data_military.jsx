import { DATA_LANDLIZ_DROP } from "./Landliz_Drop/_data_landliz_drop";

const data = [];

data.push(DATA_LANDLIZ_DROP);

export const DATA_MILITARY = data.flat(Infinity);

export const MENU_MILITARY = [
  {
    path: "",
    title: "Верхній одяг",
    element: "",
    category: [
      {
        path: "",
        title: "Куртки",
        element: "",
        products: [
          // {
          //   path: "/men/jacket/jackect_cp",
          //   title: "Куртка CP",
          //   element: (
          //     <ProductPage__WithoutAbout
          //       data={DATA_SLAVS_DROP_JACKET_CP}
          //       info={INFO_SLAVS_DROP_JACKET_CP}
          //       content={CONTENT_SLAVS_DROP_JACKET_CP}
          //     />
          //   ),
          // },
        ],
      },
    ],
  },
  {
    path: "",
    title: "Плаття",
    element: "",
    category: [
      // {
      //   path: "",
      //   title: "Куртки",
      //   element: "",
      //   products: [
      //   ],
      // },
    ],
  },
  {
    path: "",
    title: "Спідниці",
    element: "",
    category: [],
  },
 
];

