import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../redux/slices/colorSlice";
import { addToCart, } from "../redux/slices/cartSlice";
import { DATA } from "../constanses/data";
import HeaderBlock from "../blocks/HeaderBlock/HeaderBlock";

const Shirts = () => {
  
  const data = DATA;
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.color.selectedColor);

  const handleColor = (e) => {
    dispatch(changeColor(e.target.innerText));
  };

  const handleAddToCart = () => {
    const info = data.filter((el) => el.color === selectedColor);
    info.map((e) => dispatch(addToCart(e)));
  };


  return (
    <>
      <div className="">Color: {selectedColor}</div>
      {data.map((e) => (
        <button key={e.color} onClick={handleColor}>
          {e.color}
        </button>
      ))}
      <div className="">Add to Cart</div>
      <button onClick={handleAddToCart}>Add to Cart</button>

      <HeaderBlock />
      
      
      
    </>
  );
};

export default Shirts;
