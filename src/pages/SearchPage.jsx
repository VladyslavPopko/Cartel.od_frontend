import { memo } from "react";
import Main from "./Main";
import HomepageBlock from "../blocks/HomepageBlock/HomepageBlock";
import { DATA_SEARCH } from "../datas/data";
import SearchpageBlock from "../blocks/SearchpageBlock/SearchpageBlock";

const SearchPage = ({ data, data_recomended }) => {
  return (
    <Main>
      <SearchpageBlock data_recomended={data_recomended} database={data} />
    </Main>
  );
};

export default memo(SearchPage);
