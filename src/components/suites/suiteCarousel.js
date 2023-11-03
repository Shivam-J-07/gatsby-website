import React, { useState } from "react";
import Slider from "react-slick";
import BasicCarousel from "../common/basicCarousel";

const carousel_imgs = [
    "./carousels/1-bed/floorplan.png",
    "./carousels/1-bed/3d-floorplan.png",
    // ... other image paths
  ]

const SuiteCarousel = () => {
    return (
        <BasicCarousel images={carousel_imgs}/>
    );
};

export default SuiteCarousel;
