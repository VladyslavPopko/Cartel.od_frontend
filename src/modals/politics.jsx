import React from "react";
import PoliticsBlock from "../blocks/PoliticsBlock/PoliticsBlock";

const Politics = ({isVisiblePolitics, setIsVisiblePolitics}) => {
  return (
    <>
      <PoliticsBlock
        isVisiblePolitics={isVisiblePolitics}
        setIsVisiblePolitics={setIsVisiblePolitics}
      />
    </>
  );
};

export default Politics;
