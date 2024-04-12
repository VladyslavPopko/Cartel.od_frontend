import { memo } from "react";
import Main from "./Main";
import HomepageBlock from "../blocks/HomepageBlock/HomepageBlock";

const HomePage = ({ data, menu }) => {
  return (
    <Main>
      <HomepageBlock database={data} menu={menu} />
    </Main>
  );
};

export default memo(HomePage);
