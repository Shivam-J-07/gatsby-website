import React from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../common/modalIcons";

const BasicCarousel = ({ images, initialSlide = 0 }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: initialSlide,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Slider {...settings} className="modal-carousel">
            {images.map((img, index) => (
                <div key={index}><img src={img} alt={`slide-${index}`} /></div>
            ))}
        </Slider>
    );
};

export default BasicCarousel;
