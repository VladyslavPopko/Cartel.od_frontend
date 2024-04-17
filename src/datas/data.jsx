import { DATA_RECOMENDED_MEN } from "./data_recomended_men";
import { DATA_MEN, MENU_MEN } from "./data_men";
import { DATA_WOMEN, MENU_WOMEN } from "./data_women";
import { DATA_MILITARY, MENU_MILITARY } from "./data_military";
import { DATA_RECOMENDED_WOMEN } from "./data_recomended_women";
import { DATA_RECOMENDED_MILITARY } from "./data_recomended_military";
import { DATA_FARSH_DROP } from "./Farsh_Drop/_data_Farsh_Drop";
import { DATA_LANDLIZ_DROP } from "./Landliz_Drop/_data_landliz_drop";
import { DATA_SLAVS_DROP } from "./Slavs_Drop/_data_Slavs_Drop";
import { lazy } from "react";


const HomePageLazy = lazy(() => import("../pages/HomePage"));
const SearchPageLazy = lazy(() => import("../pages/SearchPage"));
const ProNasPageLazy = lazy(() => import("../pages/ProNasPage"));

export let DATA_SEARCH = [];
DATA_SEARCH.push(DATA_FARSH_DROP);
DATA_SEARCH.push(DATA_LANDLIZ_DROP);
DATA_SEARCH.push(DATA_SLAVS_DROP);
DATA_SEARCH = DATA_SEARCH.flat(Infinity);

export let CATALOG = [
  {
    path: "/",
    title: "Чоловікам",
    element: (
      <HomePageLazy
        data={DATA_MEN}
        menu={MENU_MEN}
        data_recomended={DATA_RECOMENDED_MEN}
      />
    ),
    division: [MENU_MEN],
  },
  {
    path: "/women",
    title: "Жінкам",
    element: (
      <HomePageLazy
        data={DATA_MEN}
        menu={MENU_WOMEN}
        data_recomended={DATA_RECOMENDED_WOMEN}
      />
    ),
    division: [MENU_WOMEN],
  },
  {
    path: "/military",
    title: "Military",
    element: (
      <HomePageLazy
        data={DATA_MILITARY}
        menu={MENU_MILITARY}
        data_recomended={DATA_RECOMENDED_MILITARY}
      />
    ),
    division: [MENU_MILITARY],
  },
  {
    path: "/search",
    title: "Search",
    element: (
      <SearchPageLazy data={DATA_SEARCH} data_recomended={DATA_RECOMENDED_MEN} />
    ),
    division: [],
  },
  {
    path: "/about_us",
    title: "Про нас",
    element: <ProNasPageLazy />,
    division: [],
  },
];

export let ROUTES = [
  {
    path: "/",
    title: "Чоловікам",
    element: (
      <HomePageLazy
        data={DATA_MEN}
        menu={MENU_MEN}
        data_recomended={DATA_RECOMENDED_MEN}
      />
    ),
    category: [],
  },
  {
    path: "/women",
    title: "Жінкам",
    element: (
      <HomePageLazy
        data={DATA_WOMEN}
        menu={MENU_WOMEN}
        data_recomended={DATA_RECOMENDED_WOMEN}
      />
    ),
    category: [],
  },
  {
    path: "/military",
    title: "Military",
    element: (
      <HomePageLazy
        data={DATA_MILITARY}
        menu={MENU_MILITARY}
        data_recomended={DATA_RECOMENDED_MILITARY}
      />
    ),
    category: [],
  },
  {
    path: "/search",
    title: "Search",
    element: (
      <SearchPageLazy data={DATA_SEARCH} data_recomended={DATA_RECOMENDED_MEN} />
    ),
    category: [],
  },
  {
    path: "/about_us",
    title: "Про нас",
    element: <ProNasPageLazy />,
    category: [],
  },
];

ROUTES.push(MENU_MEN);
ROUTES.push(MENU_WOMEN);
ROUTES.push(MENU_MILITARY);
ROUTES = ROUTES.flat(Infinity);

// export let MENU = [];

// MENU.push(MENU_MEN);
// MENU.push(MENU_WOMEN);
// MENU.push(MENU_MILITARY);
// MENU = MENU.flat(Infinity);
