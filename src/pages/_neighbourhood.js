import * as React from "react"
import styles from '../styles/neighbourhood.css'

const Neighbourhood = () => {
    return (
        <section id="neighbourhood-section" className="content-section flex-col">
            <h1 id="neighbourhood-header" className="header">Neighbourhood</h1>
            <div className="neighbourhood-banner banner">
                <img src="/banners/neighbourhood_banner.jpg" alt="banner-1" />
            </div>
        </section>
     );
}
 
export default Neighbourhood;