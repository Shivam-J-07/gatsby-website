import * as React from "react"
import styles from '../styles/gallery.css'
import { gallery_content } from "../content/content";

const Gallery = () => {
    return (
        <section id="gallery-section" className="content-section flex-col">
            <h1 id="gallery-header" className="header">gallery</h1>
            <div className="flex-row gallery">
                <div className="flex-col gallery-main-col">
                    <div className="flex-row gallery-sub-row">
                        <div className="gallery-item">
                            <img src={gallery_content[0].img} alt=""/>
                        </div>
                        <div className="gallery-item">
                            <img src={gallery_content[1].img} alt=""/>
                        </div>
                    </div>
                    <div className="flex-col gallery-sub-row">
                        <div className="gallery-item">
                            <img src={gallery_content[2].img} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="flex-row gallery-main-col">
                    <div className="flex-col gallery-sub-col">
                        <div className="gallery-item">
                            <img src={gallery_content[3].img} alt=""/>
                        </div>
                    </div>
                    <div className="flex-col gallery-sub-col">
                        <div className="gallery-item">
                            <img src={gallery_content[4].img} alt=""/>
                        </div>
                        <div className="gallery-item">
                            <img src={gallery_content[5].img} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;