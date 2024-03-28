import React from "react";
import SubmitBlock from "../blocks/SubmitBlock/SubmitBlock";

const Submit = ({
  isVisibleSubmit,
  setIsVisibleSubmit,
  setIsVisibleThankyou,
  setIsVisibleAssign,
  setIsVisiblePolitics,
  itemName,
  googleSheet,
  googleList,
  setIsLoading,
  content,
}) => {
  return (
    <div>
      <SubmitBlock
        content={content}
        itemName={itemName}
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

export default Submit;
