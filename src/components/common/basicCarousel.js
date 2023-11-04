import React from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "./modalIcons";

const BasicCarousel = ({ size = "large", images, initialSlide = 0 }) => {
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
        <Slider {...settings} className={`modal-carousel ${size}`}  >
            {images.map((img, index) => (
                <img src={img} alt={`slide-${index}`}/>
            ))}
        </Slider>
    );
};

export default BasicCarousel;
