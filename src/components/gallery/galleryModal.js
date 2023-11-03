import * as React from "react"
import BasicModal from '../common/basicModal';
import BasicCarousel from '../common/basicCarousel';

const GalleryModal = ({ isOpen, onRequestClose, images, initialSlide }) => {
    return (
        <BasicModal isOpen={isOpen} onRequestClose={onRequestClose}>
            <BasicCarousel images={images} initialSlide={initialSlide} />
        </BasicModal>
    );
}

export default GalleryModal;
