import  "./style.scss";
import cn from "classnames";

const BannerTop = ({ text, style }) => {
  return <div className={cn("banner_section_img", style && style)}>{text}</div>;
};

export default BannerTop;
