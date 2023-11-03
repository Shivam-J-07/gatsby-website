import * as React from "react"

const GalleryItem = ({ img, index, onClick }) => {
    return (
        <div className="gallery-item" onClick={() => onClick(index)}>
            <img src={img} alt=""/>
        </div>
    );
}

export default GalleryItem;
