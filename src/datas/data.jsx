import HomePage from "../pages/HomePage";
import { DATA_MEN, MENU_MEN } from "./data_men";

export let CATALOG = [
  {
    path: "/",
    title: "Чоловікам",
    element: <HomePage data={DATA_MEN} menu={MENU_MEN} />,
    division: [MENU_MEN],
  },
  {
    path: "/",
    title: "Жінкам",
    element: <HomePage data={DATA_MEN} menu={MENU_MEN} />,
    category: [],
  },
];

export let ROUTES = [
  {
    path: "/",
    title: "Чоловікам",
    element: <HomePage data={DATA_MEN} menu={MENU_MEN} />,
    category: [],
  },
];

ROUTES.push(MENU_MEN);
ROUTES = ROUTES.flat(Infinity);

export let MENU = [];

MENU.push(MENU_MEN);
MENU = MENU.flat(Infinity);
