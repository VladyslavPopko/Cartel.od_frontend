import { memo, useState } from "react";
import Cart from "../modals/cart";
import Submit from "../modals/submit";
import Thankyou from "../modals/thankyou";
import Assign from "../modals/assign";
import Politics from "../modals/politics";
import HeaderBlock from "../blocks/HeaderBlock/HeaderBlock";
import { CONTENT } from "../contents/main";
import LoadingBox from "../components/LoadingBox/LoadingBox";
import { GOOGLE_LIST, GOOGLE_SHEET } from "../constanses/constanses";
import MenuBox from "../components/MenuBox/MenuBox";
import Search from "../modals/search";
import { useDispatch } from "react-redux";
import { refreshCart } from "../redux/slices/cartSlice";
import FooterBlock from "../blocks/FooterBlock/FooterBlock";
import styles from "../style/styleformain.module.scss";

const Main = ({ children }) => {
  const [isVisibleCart, setIsVivsibleCart] = useState(false); // Cart Modal
  const [isVisibleSubmit, setIsVisibleSubmit] = useState(false); // Submit Modal
  const [isVisibleThankyou, setIsVisibleThankyou] = useState(false); // Thankyou Modal
  const [isVisibleAssign, setIsVisibleAssign] = useState(false); // Assign Modal
  const [isVisiblePolitics, setIsVisiblePolitics] = useState(false); // Politics Modal
  // const [isVisibleSearch, setIsVisibleSearch] = useState(false); // Search Modal

  const [isLoading, setIsLoading] = useState(false); // loading
  const [isMenu, setIsMenu] = useState(false); // menu Open

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };
  const handleCloseMenu = () => {
    setIsMenu(false);
  };

  const {
    contentHeader,
    contentCart,
    contentSubmit,
    contentThankYou,
    contentAssign,
    contentPolitics,
  } = CONTENT;

  return (
    <div>
      {/* <MenuBox isMenu={isMenu} setIsMenu={setIsMenu} /> */}
      {isLoading && <LoadingBox type="bars" color="red" />}
      <div className={styles.section}>
        <div>
          <HeaderBlock
            isMenu={isMenu}
            handleMenu={handleMenu}
            content={contentHeader}
            setIsVivsibleCart={setIsVivsibleCart}
          />
          <div onClick={handleCloseMenu}>{children}</div>
        </div>
        <div>
          <FooterBlock
            isVisibleAssign={isVisibleAssign}
            isVisiblePolitics={isVisiblePolitics}
            setIsVisibleAssign={setIsVisibleAssign}
            setIsVisiblePolitics={setIsVisiblePolitics}
          />
        </div>
      </div>

      <Cart
        content={contentCart}
        isVisibleCart={isVisibleCart}
        setIsVivsibleCart={setIsVivsibleCart}
        setIsVisibleSubmit={setIsVisibleSubmit}
      />
      <Submit
        content={contentSubmit}
        googleSheet={GOOGLE_SHEET}
        googleList={GOOGLE_LIST}
        setIsLoading={setIsLoading}
        isVisibleSubmit={isVisibleSubmit}
        setIsVisibleSubmit={setIsVisibleSubmit}
        setIsVisibleThankyou={setIsVisibleThankyou}
        setIsVisibleAssign={setIsVisibleAssign}
        setIsVisiblePolitics={setIsVisiblePolitics}
      />
      <Thankyou
        content={contentThankYou}
        isVisibleThankyou={isVisibleThankyou}
        setIsVisibleThankyou={setIsVisibleThankyou}
      />
      <Assign
        content={contentAssign}
        isVisibleAssign={isVisibleAssign}
        setIsVisibleAssign={setIsVisibleAssign}
      />
      <Politics
        content={contentPolitics}
        isVisiblePolitics={isVisiblePolitics}
        setIsVisiblePolitics={setIsVisiblePolitics}
      />
      {/* <Search
        isVisibleSearch={isVisibleSearch}
        setIsVisibleSearch={setIsVisibleSearch}
      /> */}
    </div>
  );
};

export default memo(Main);
