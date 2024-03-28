import React from "react";
import AssignBlock from "../blocks/AssignBlock/AssignBlock";

const Assign = ({ isVisibleAssign, setIsVisibleAssign }) => {
  return (
    <>
      <AssignBlock
        isVisibleAssign={isVisibleAssign}
        setIsVisibleAssign={setIsVisibleAssign}
      />
    </>
  );
};

export default Assign;
