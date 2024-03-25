import Cartblock from "../blocks/CartBlock/Cartblock";

const Cart = ({ isVisibleCart , setIsVivsibleCart, setIsVisibleSubmit }) => {
  return (
    <div>
      <Cartblock isVisibleCart={isVisibleCart} setIsVivsibleCart={setIsVivsibleCart} setIsVisibleSubmit={setIsVisibleSubmit} />
    </div>
  );
};

export default Cart;
