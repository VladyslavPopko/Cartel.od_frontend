import React from "react";
import PoliticsBlock from "../blocks/PoliticsBlock/PoliticsBlock";

const Politics = ({ isVisiblePolitics, setIsVisiblePolitics, content }) => {
  return (
    <>
      <PoliticsBlock
        content={content}
        isVisiblePolitics={isVisiblePolitics}
        setIsVisiblePolitics={setIsVisiblePolitics}
      />
    </>
  );
};

export default Politics;
