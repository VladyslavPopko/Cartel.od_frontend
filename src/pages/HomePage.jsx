import React, { memo } from "react";
import Main from "./Main";
import HomepageBlock from "../blocks/HomepageBlock/HomepageBlock";
import { DATA_FARSH_DROP_SHIRTS } from "../datas/Farsh_Drop/data_shirts";
import { DATA_SLAVS_DROP_HOODIE_SI } from "../datas/Slavs_Drop/data_hoodie_si";
import { DATA_SLAVS_DROP_JACKET_CP } from "../datas/Slavs_Drop/data_jacket_cp";
import { DATA_SLAVS_DROP_SWEATSHIRT_SI } from "../datas/Slavs_Drop/data_sweatshirt_si";
import { DATA_SLAVS_DROP_Zipsweatshirt_SI } from "../datas/Slavs_Drop/data_zipsweatshirt_si";
import { DATA_FARSH_DROP_CostumeOverBaza } from "../datas/Farsh_Drop/data_costumeOverBaza";
import { DATA_FARSH_DROP_CostumeTech } from "../datas/Farsh_Drop/data_costumeTech";
import { DATA_FARSH_DROP_CostumeParashute } from "../datas/Farsh_Drop/data_costumeParashute";
import { DATA_FARSH_DROP_ComplectOverTrousersTshirt } from "../datas/Farsh_Drop/data_complectOverTrousersTshirt";
import { DATA_FARSH_DROP_KoftaRubchikOver } from "../datas/Farsh_Drop/data_koftaRubchikOver";
import { DATA_FARSH_DROP_TrousersZmeyka } from "../datas/Farsh_Drop/data_trousersZmeyka";
import { DATA_FARSH_DROP_TrousersKargo } from "../datas/Farsh_Drop/data_trousersKargo";
import { DATA_FARSH_DROP_TrousersCutSummer } from "../datas/Farsh_Drop/data_trousersCutSummer";
import { DATA_FARSH_DROP_ComplectOverShortsTshirt } from "../datas/Farsh_Drop/data_complectOverShortsTshirt";
import { DATA_FARSH_DROP_ComplectLampasShortsTshirt } from "../datas/Farsh_Drop/data_complectLampasShortsTshirt";
import { DATA_FARSH_DROP_ComplectSummerRubchik } from "../datas/Farsh_Drop/data_complectSummerRubchik";
import { DATA_FARSH_DROP_ComplectKant } from "../datas/Farsh_Drop/data_complectKant";
import { DATA_FARSH_DROP_ShortsKargoSummer } from "../datas/Farsh_Drop/data_shortsKargoSummer";
import { DATA_FARSH_DROP_TshirtOver } from "../datas/Farsh_Drop/data_tshirtOver";
import { DATA_FARSH_DROP_TshirtSummerLong } from "../datas/Farsh_Drop/data_TshirtSummerLong";
import { DATA_FARSH_DROP_HoodieZmeykaOver } from "../datas/Farsh_Drop/data_hoodieZmeykaOver";
import { DATA_FARSH_DROP_ShortsTrikotaj } from "../datas/Farsh_Drop/data_shortsTrikotaj";
import { DATA_FARSH_DROP_ShortsSummerClassic } from "../datas/Farsh_Drop/data_shortsSummerClassic";
import { DATA_FARSH_DROP_ShortsLyon } from "../datas/Farsh_Drop/data_ShortsLyon";
import { DATA_FARSH_DROP_ShirtLyon } from "../datas/Farsh_Drop/data_shirtLyon";
import { DATA_SLAVS_DROP_Sweatshirt_CP } from "../datas/Slavs_Drop/data_sweatshirt_cp";
import { DATA_SLAVS_DROP_Trousers_CP } from "../datas/Slavs_Drop/data_trousers_cp";
import { DATA_SLAVS_DROP_Jeans_SI } from "../datas/Slavs_Drop/data_jeans_si";
import { DATA_SLAVS_DROP_Shorts_SI } from "../datas/Slavs_Drop/data_shorts_si";
import { DATA_SLAVS_DROP_Longsliv_SI } from "../datas/Slavs_Drop/data_longsliv_si";

const HomePage = () => {
  const data = [];

  data.push(DATA_FARSH_DROP_SHIRTS);
  data.push(DATA_FARSH_DROP_ShirtLyon);

  data.push(DATA_FARSH_DROP_CostumeOverBaza);
  data.push(DATA_FARSH_DROP_CostumeTech);
  data.push(DATA_FARSH_DROP_CostumeParashute);
  data.push(DATA_FARSH_DROP_ComplectOverTrousersTshirt);

  data.push(DATA_FARSH_DROP_ComplectOverShortsTshirt);
  data.push(DATA_FARSH_DROP_ComplectLampasShortsTshirt);
  data.push(DATA_FARSH_DROP_ComplectSummerRubchik);
  data.push(DATA_FARSH_DROP_ComplectKant);

  data.push(DATA_FARSH_DROP_TshirtOver);
  data.push(DATA_FARSH_DROP_TshirtSummerLong);

  data.push(DATA_FARSH_DROP_HoodieZmeykaOver);

  data.push(DATA_FARSH_DROP_KoftaRubchikOver);

  data.push(DATA_FARSH_DROP_TrousersZmeyka);
  data.push(DATA_FARSH_DROP_TrousersKargo);
  data.push(DATA_FARSH_DROP_TrousersCutSummer);

  data.push(DATA_FARSH_DROP_ShortsKargoSummer);
  data.push(DATA_FARSH_DROP_ShortsTrikotaj);
  data.push(DATA_FARSH_DROP_ShortsSummerClassic);
  data.push(DATA_FARSH_DROP_ShortsLyon);

  data.push(DATA_SLAVS_DROP_HOODIE_SI);
  data.push(DATA_SLAVS_DROP_SWEATSHIRT_SI);
  data.push(DATA_SLAVS_DROP_Jeans_SI);
  data.push(DATA_SLAVS_DROP_Shorts_SI);
  data.push(DATA_SLAVS_DROP_Zipsweatshirt_SI);
  data.push(DATA_SLAVS_DROP_Longsliv_SI);

  data.push(DATA_SLAVS_DROP_JACKET_CP);
  data.push(DATA_SLAVS_DROP_Sweatshirt_CP);
  data.push(DATA_SLAVS_DROP_Trousers_CP);

  return (
    <Main>
      <HomepageBlock data={data} />
    </Main>
  );
};

export default memo(HomePage);
