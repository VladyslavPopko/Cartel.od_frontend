import { memo } from "react";
import Main from "./Main";
import HomepageBlock from "../blocks/HomepageBlock/HomepageBlock";
import { DATA_SEARCH } from "../datas/data";

const HomePage = ({ data, menu, data_recomended }) => {
  return (
    <Main>
      <HomepageBlock
        database={data}
        menu={menu}
        data_recomended={data_recomended}
      />
    </Main>
  );
};

export default memo(HomePage);
