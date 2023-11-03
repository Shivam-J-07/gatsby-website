import * as React from "react"
import styles from '../styles/amenities.css'
import { amenities_content } from "../content/content";

const Amenities = () => {
    return (
        <section id="amenities-section" className="content-section flex-col">
            <h1 id="amenities-header" className="header">Amenities</h1>
            <div className="amenities-content max-width flex-col">
                <div className="amenitites-grid-container">
                    {amenities_content.map((amenity, index) => (
                        <div key={index} className="amenitites-grid-item">
                            <img src={amenity.image} alt={amenity.title}/>
                            <h2>{amenity.title}</h2>
                            <p>{amenity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="amenities-banner banner">
                <img src="/banners/amenities_banner.jpg" alt="banner-1" />
            </div>
        </section>
     );
}
 
export default Amenities;