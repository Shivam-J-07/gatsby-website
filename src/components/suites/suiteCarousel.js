// CarouselComponent.js

import React, { useState } from "react";
import Slider from "react-slick";

const SuiteCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className="suite-modal-carousel">
            <div><img src="./carousels/1-bed/floorplan.png" alt="1" /></div>
            <div><img src="./carousels/1-bed/3d-floorplan.png" alt="2" /></div>
            {/* More slides */}
        </Slider>
    );
};

export default SuiteCarousel;
