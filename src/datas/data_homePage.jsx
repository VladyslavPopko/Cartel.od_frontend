import { DATA_FARSH_DROP } from "./Farsh_Drop/_data_Farsh_Drop";
import { DATA_SLAVS_DROP } from "./Slavs_Drop/_data_Slavs_Drop";




const data = [];

data.push(DATA_FARSH_DROP);
data.push(DATA_SLAVS_DROP);




export const DATA_HOMEPAGE = data.flat(Infinity);