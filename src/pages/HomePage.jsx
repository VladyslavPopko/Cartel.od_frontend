import React, { Suspense, memo } from "react";
import Main from "./Main";
import HomepageBlock from "../blocks/HomepageBlock/HomepageBlock";



const HomePage = () => {
  


  return (
    <Main>
      <HomepageBlock />
    </Main>
  );
};

export default memo(HomePage);
