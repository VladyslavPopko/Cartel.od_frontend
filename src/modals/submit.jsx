import React, { memo } from "react";
import SubmitBlock from "../blocks/SubmitBlock/SubmitBlock";

const Submit = ({
  isVisibleSubmit,
  setIsVisibleSubmit,
  setIsVisibleThankyou,
  setIsVisibleAssign,
  setIsVisiblePolitics,
  googleSheet,
  googleList,
  setIsLoading,
  content,
}) => {
  return (
    <div>
      <SubmitBlock
        content={content}
        googleSheet={googleSheet}
        googleList={googleList}
        setIsLoading={setIsLoading}
        isVisibleSubmit={isVisibleSubmit}
        setIsVisibleSubmit={setIsVisibleSubmit}
        setIsVisibleThankyou={setIsVisibleThankyou}
        setIsVisibleAssign={setIsVisibleAssign}
        setIsVisiblePolitics={setIsVisiblePolitics}
      />
    </div>
  );
};

export default memo(Submit);
