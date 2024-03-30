import React, { memo } from "react";
import ThankyouBlock from "../blocks/ThanyouBlock/ThankyouBlock";

const Thankyou = ({ isVisibleThankyou, setIsVisibleThankyou, content }) => {
  return (
    <div>
      <ThankyouBlock
        content={content}
        isVisibleThankyou={isVisibleThankyou}
        setIsVisibleThankyou={setIsVisibleThankyou}
      />
    </div>
  );
};

export default memo(Thankyou);
