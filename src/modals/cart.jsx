import { memo } from "react";
import Cartblock from "../blocks/CartBlock/Cartblock";

const Cart = ({
  isVisibleCart,
  setIsVivsibleCart,
  setIsVisibleSubmit,
  content,
}) => {
  return (
    <div>
      <Cartblock
        content={content}
        isVisibleCart={isVisibleCart}
        setIsVivsibleCart={setIsVivsibleCart}
        setIsVisibleSubmit={setIsVisibleSubmit}
      />
    </div>
  );
};

export default memo(Cart);
