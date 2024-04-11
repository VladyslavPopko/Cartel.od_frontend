import { DATA_SLAVS_DROP_HOODIE_SI } from "./data_hoodie_si";
import { DATA_SLAVS_DROP_JACKET_CP } from "./data_jacket_cp";
import { DATA_SLAVS_DROP_SWEATSHIRT_SI } from "./data_sweatshirt_si";
import { DATA_SLAVS_DROP_Zipsweatshirt_SI } from "./data_zipsweatshirt_si";
import { DATA_SLAVS_DROP_Sweatshirt_CP } from "./data_sweatshirt_cp";
import { DATA_SLAVS_DROP_Trousers_CP } from "./data_trousers_cp";
import { DATA_SLAVS_DROP_Jeans_SI } from "./data_jeans_si";
import { DATA_SLAVS_DROP_Shorts_SI } from "./data_shorts_si";
import { DATA_SLAVS_DROP_Longsliv_SI } from "./data_longsliv_si";
import { DATA_SLAVS_DROP_ZIPHOODIE_SI } from "./data_ziphoodie_si";
import { DATA_SLAVS_DROP_ClassicSweatshirt_SI } from "./data_classicsweatshirt_SI";




const data = [];

data.push(DATA_SLAVS_DROP_HOODIE_SI);
data.push(DATA_SLAVS_DROP_ZIPHOODIE_SI);
data.push(DATA_SLAVS_DROP_SWEATSHIRT_SI);
data.push(DATA_SLAVS_DROP_ClassicSweatshirt_SI);
data.push(DATA_SLAVS_DROP_Jeans_SI);
data.push(DATA_SLAVS_DROP_Shorts_SI);
data.push(DATA_SLAVS_DROP_Zipsweatshirt_SI);
data.push(DATA_SLAVS_DROP_Longsliv_SI);

data.push(DATA_SLAVS_DROP_JACKET_CP);
data.push(DATA_SLAVS_DROP_Sweatshirt_CP);
data.push(DATA_SLAVS_DROP_Trousers_CP);


export const DATA_SLAVS_DROP = data.flat(Infinity);