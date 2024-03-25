import React from "react";
import SubmitBlock from "../blocks/SubmitBlock/SubmitBlock";

const Submit = ({
  isVisibleSubmit,
  setIsVisibleSubmit,
  setIsVisibleThankyou,
}) => {
  return (
    <div>
      <SubmitBlock
        isVisibleSubmit={isVisibleSubmit}
        setIsVisibleSubmit={setIsVisibleSubmit}
        setIsVisibleThankyou={setIsVisibleThankyou}
      />
    </div>
  );
};

export default Submit;
