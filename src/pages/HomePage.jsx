import React, { memo } from "react";
import Main from "./Main";
import HomepageBlock from "../blocks/HomepageBlock/HomepageBlock";
import { DATA_FARSH_DROP_SHIRTS } from "../datas/Farsh_Drop/data_shirts";
import { DATA_SLAVS_DROP_HOODIE_SI } from "../datas/Slavs_Drop/data_hoodie_si";
import { DATA_SLAVS_DROP_JACKET_CP } from "../datas/Slavs_Drop/data_jacket_cp";
import { DATA_SLAVS_DROP_SWEATSHIRT_SI } from "../datas/Slavs_Drop/data_sweatshirt_si";
import { DATA_SLAVS_DROP_ZIPHOODIE_SI } from "../datas/Slavs_Drop/data_ziphoodie_si";
import { DATA_SLAVS_DROP_ZIPSWEATSHIRT_SI } from "../datas/Slavs_Drop/data_zipsweatshirt_si";

const HomePage = () => {
  const data = [];
  data.push(DATA_FARSH_DROP_SHIRTS);
  data.push(DATA_SLAVS_DROP_HOODIE_SI);
  data.push(DATA_SLAVS_DROP_JACKET_CP);
  data.push(DATA_SLAVS_DROP_SWEATSHIRT_SI);
  data.push(DATA_SLAVS_DROP_ZIPHOODIE_SI);
  data.push(DATA_SLAVS_DROP_ZIPSWEATSHIRT_SI);


  return (
    <Main>
      <HomepageBlock data={data}/>
    </Main>
  );
};

export default memo(HomePage);
