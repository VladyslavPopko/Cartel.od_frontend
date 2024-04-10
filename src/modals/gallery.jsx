import React from "react";
import GalleryModalBlock from "../blocks/GalleryModalBlock/GalleryModalBlock";

const GalleryPage = ({
  isVisibleGallery,
  setIsVisibleGallery,
  data,
  isColor,
  setIsColor,
}) => {
  return (
    <GalleryModalBlock
      setIsVisibleGallery={setIsVisibleGallery}
      isVisibleGallery={isVisibleGallery}
      data={data}
      isColor={isColor}
      setIsColor={setIsColor}
    />
  );
};

export default GalleryPage;
