import styles from "./style.module.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import cn from "classnames";
import { memo } from "react";

const SliderHomeBox = ({ isColor, data, setIsVisibleGallery }) => {
  const handleOpenGalley = () => {
    setIsVisibleGallery(true);
  };
  return (
    <>
      {data.map(
        (el, index) =>
          isColor === el.color &&
          (el.galery_img4 ? (
            <Slide
              className={styles.section}
              key={el.index}
              transitionDuration="600"
            >
              {el.hero_img && (
                <div className={cn("each-slide-effect", styles.img_wrapper)}>
                  <img
                    onClick={handleOpenGalley}
                    draggable="false"
                    className={styles.img}
                    src={el.hero_img}
                    alt=""
                  />
                </div>
              )}
              {el.galery_img1 && (
                <div className={cn("each-slide-effect", styles.img_wrapper)}>
                  <img
                    onClick={handleOpenGalley}
                    draggable="false"
                    className={styles.img}
                    src={el.galery_img1}
                    alt=""
                  />
                </div>
              )}
              {el.galery_img2 && (
                <div className={cn("each-slide-effect", styles.img_wrapper)}>
                  <img
                    onClick={handleOpenGalley}
                    draggable="false"
                    className={styles.img}
                    src={el.galery_img2}
                    alt=""
                  />
                </div>
              )}
              {el.galery_img3 && (
                <div className={cn("each-slide-effect", styles.img_wrapper)}>
                  <img
                    onClick={handleOpenGalley}
                    draggable="false"
                    className={styles.img}
                    src={el.galery_img3}
                    alt=""
                  />
                </div>
              )}
              {el.galery_img4 && (
                <div className={cn("each-slide-effect", styles.img_wrapper)}>
                  <img
                    onClick={handleOpenGalley}
                    draggable="false"
                    className={styles.img}
                    src={el.galery_img4}
                    alt=""
                  />
                </div>
              )}
            </Slide>
          ) : (
            <Slide
              className={styles.section}
              key={el.index}
              transitionDuration="600"
            >
              {el.hero_img && (
                <div className={cn("each-slide-effect", styles.img_wrapper)}>
                  <img
                    onClick={handleOpenGalley}
                    draggable="false"
                    className={styles.img}
                    src={el.hero_img}
                    alt=""
                  />
                </div>
              )}
              {el.galery_img1 && (
                <div className={cn("each-slide-effect", styles.img_wrapper)}>
                  <img
                    onClick={handleOpenGalley}
                    draggable="false"
                    className={styles.img}
                    src={el.galery_img1}
                    alt=""
                  />
                </div>
              )}
              {el.galery_img2 && (
                <div className={cn("each-slide-effect", styles.img_wrapper)}>
                  <img
                    onClick={handleOpenGalley}
                    draggable="false"
                    className={styles.img}
                    src={el.galery_img2}
                    alt=""
                  />
                </div>
              )}
              {el.galery_img3 && (
                <div className={cn("each-slide-effect", styles.img_wrapper)}>
                  <img
                    onClick={handleOpenGalley}
                    draggable="false"
                    className={styles.img}
                    src={el.galery_img3}
                    alt=""
                  />
                </div>
              )}
            </Slide>
          ))
      )}
      {/* {data.map(
    //     (el) =>
    //       isColor === el.color && (
    //         <img 
    //           draggable="false"
    //           src={el.hero_img}
    //           key={el.id}
    //           alt=""
    //           className={styles.img}
    //         />
    //       )
    //   )} */}
    </>
  );
};

export default memo(SliderHomeBox);
