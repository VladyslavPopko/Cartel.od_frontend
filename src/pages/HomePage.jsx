import { memo } from "react";
import Main from "./Main";
import HomepageBlock from "../blocks/HomepageBlock/HomepageBlock";

const HomePage = ({ data }) => {
  return (
    <Main>
      <HomepageBlock database={data} />
    </Main>
  );
};

export default memo(HomePage);
