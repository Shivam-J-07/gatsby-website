import React, { useState } from "react";

const PrevArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const NextArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "block" }} // Add your custom styles here
            onClick={onClick}
        >
            <PrevArrowIcon /> {/* You can use an icon or an image instead of text */}
        </button>
    );
}

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "block" }} // Add your custom styles here
            onClick={onClick}
        >
            <NextArrowIcon /> {/* You can use an icon or an image instead of text */}
        </button>
    );
}

export const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);