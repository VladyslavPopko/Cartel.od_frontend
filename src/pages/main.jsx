import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../redux/slices/colorSlice";
import { addToCart, } from "../redux/slices/cartSlice";
import { DATA } from "../constanses/data";
import HeaderBlock from "../blocks/HeaderBlock/HeaderBlock";
import HeroBlock from "../blocks/HeroBlock/HeroBlock";
import AboutBlock from "../blocks/AboutBlock/AboutBlock";
import PriceBlock from "../blocks/PriceBlock/PriceBlock";
import DescriptionBlock from "../blocks/DescriptionBlock/DescriptionBlock";
import AboutUsBlock from "../blocks/AboutUsBlock/AboutUsBlock";
import ReviewBlock from "../blocks/ReviewBlock/ReviewBlock";
import GalleryBlock from "../blocks/GalleryBlock/GalleryBlock";
import SizetableBlock from "../blocks/SizetableBlock/SizetableBlock";
import AdvantageBlock from "../blocks/AdvantageBlock/AdvantageBlock";

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
      <HeroBlock />
      <AboutBlock />
      <DescriptionBlock />
      <AboutUsBlock />
      <ReviewBlock />
      <GalleryBlock />
      <SizetableBlock />
      <AdvantageBlock />
      <HeroBlock />
      
    </>
  );
};

export default Shirts;
