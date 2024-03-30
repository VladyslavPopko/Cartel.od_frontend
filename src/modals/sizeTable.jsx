import React, { memo } from "react";
import SizetableModalBlock from "../blocks/SizetableModalBlock/SizetableModalBlock";

const SizeTable = ({ isVisibleSizetable, setIsVisibleSizetable, content }) => {
  return (
    <>
      <SizetableModalBlock
        content={content}
        isVisibleSizetable={isVisibleSizetable}
        setIsVisibleSizetable={setIsVisibleSizetable}
      />
    </>
  );
};

export default memo(SizeTable);
