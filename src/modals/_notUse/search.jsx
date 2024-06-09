import { memo } from "react";
import SearchModalBlock from "../blocks/SearchModalBlock/SearchModalBlock";

const Search = ({ isVisibleSearch, setIsVisibleSearch }) => {
  return (
    <SearchModalBlock
      isVisibleSearch={isVisibleSearch}
      setIsVisibleSearch={setIsVisibleSearch}
    />
  );
};

export default memo(Search);
