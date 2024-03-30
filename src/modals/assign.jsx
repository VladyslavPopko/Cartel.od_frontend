import React, { memo } from "react";
import AssignBlock from "../blocks/AssignBlock/AssignBlock";

const Assign = ({ isVisibleAssign, setIsVisibleAssign, content }) => {
  return (
    <>
      <AssignBlock
        content={content}
        isVisibleAssign={isVisibleAssign}
        setIsVisibleAssign={setIsVisibleAssign}
      />
    </>
  );
};

export default memo(Assign);
