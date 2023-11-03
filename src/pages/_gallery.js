import * as React from "react"
import styles from '../styles/gallery.css'
import { gallery_content } from "../content/content";
import GalleryItem from '../components/gallery/galleryItem';
import GalleryModal from '../components/gallery/galleryModal';

const Gallery = () => {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [initialSlide, setInitialSlide] = React.useState(0);

    const handleImageClick = (index) => {
        setInitialSlide(index);
        setModalOpen(true);
    };

    return (
        <section id="gallery-section" className="content-section flex-col">
            <h1 id="gallery-header" className="header">gallery</h1>
            <div className="flex-row gallery">
                <div className="flex-col gallery-main-col">
                    <div className="flex-row gallery-sub-row">
                        <GalleryItem img={gallery_content[0].img} index={0} onClick={handleImageClick} />
                        <GalleryItem img={gallery_content[1].img} index={1} onClick={handleImageClick} />
                    </div>
                    <div className="flex-col gallery-sub-row">
                        <GalleryItem img={gallery_content[2].img} index={2} onClick={handleImageClick} />
                    </div>
                </div>
                <div className="flex-row gallery-main-col">
                    <div className="flex-col gallery-sub-col">
                        <GalleryItem img={gallery_content[3].img} index={3} onClick={handleImageClick} />
                    </div>
                    <div className="flex-col gallery-sub-col">
                        <GalleryItem img={gallery_content[4].img} index={4} onClick={handleImageClick} />
                        <GalleryItem img={gallery_content[5].img} index={5} onClick={handleImageClick} />
                    </div>
                </div>
            </div>
            <GalleryModal 
                isOpen={isModalOpen} 
                onRequestClose={() => setModalOpen(false)} 
                images={gallery_content.map(item => item.img)}
                initialSlide={initialSlide}
            />
        </section>
    );
}

export default Gallery;
