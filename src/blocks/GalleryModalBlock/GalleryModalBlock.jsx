import { memo } from "react";
import ModalWrapper from "../../wrappers/ModalWrapper/ModalWrapper";
import styles from "./style.module.scss";
import GaleryListChoose from "../../components/GaleryListChoose/GaleryListChoose";
import GalleryBox from "../../components/GalleryBox/GalleryBox";

const GalleryModalBlock = ({
  isVisibleGallery,
  setIsVisibleGallery,
  data,
  isColor,
  setIsColor,
}) => {
  const handleClose = () => {
    setIsVisibleGallery(false);
  };
  return (
    <ModalWrapper isVisible={isVisibleGallery} handleClose={handleClose}>
      <article className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>Галерея</h2>
          <GaleryListChoose
            data={data}
            isColor={isColor}
            setIsColor={setIsColor}
          />
        </div>
        {data.map(
          (el) =>
            isColor === el.color && (
              <div className={styles.list} key={el.id}>
                {el.gallery.map((e) => (
                  <GalleryBox key={e} img={e} />
                ))}
              </div>
            )
        )}
      </article>
    </ModalWrapper>
  );
};

export default memo(GalleryModalBlock);
