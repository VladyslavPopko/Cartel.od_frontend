import React from "react";
import SubmitBlock from "../blocks/SubmitBlock/SubmitBlock";

const Submit = ({
  isVisibleSubmit,
  setIsVisibleSubmit,
  setIsVisibleThankyou,
  setIsVisibleAssign,
  setIsVisiblePolitics
  
}) => {
  return (
    <div>
      <SubmitBlock
        isVisibleSubmit={isVisibleSubmit}
        setIsVisibleSubmit={setIsVisibleSubmit}
        setIsVisibleThankyou={setIsVisibleThankyou}
        setIsVisibleAssign ={setIsVisibleAssign}
        setIsVisiblePolitics={setIsVisiblePolitics}
      />
    </div>
  );
};

export default Submit;
