
import React from "react";
import GalleryHover from "../../Components/GalleryHover/GalleryHover";
import GallerySlider from "../../Components/GallerySlider/GallerySlider";
import SliderVideo from "../../Components/SliderVideo/SliderVideo";
import './Gallery.css'


export default function Gallery() {
  return <div className="gallery">
    <SliderVideo />
    <GallerySlider />
    <h2 className="title">گالری ما </h2>
    <GalleryHover />

    
  </div>;
}
