import React from "react";
import GalleryHover from "../../Components/GalleryHover/GalleryHover";
import './Gallery.css'


export default function Gallery() {
  return <div className="gallery">
    <h2 className="title">گالری ما </h2>

    <GalleryHover />
  </div>;
}
