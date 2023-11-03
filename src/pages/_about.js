import * as React from "react"
import styles from '../styles/about.css'

const About = () => {
    return (
        <section id="about-section" className="content-section flex-col">
            <h1 id="about-header" className="header">About Us</h1>
            <div className="about-content flex-col">
                <p>With its prime location in Toronto's vibrant east end, 1602-1604 Queen Street East offers the perfect blend of convenience and charm. Nestled between the trendy neighborhoods of Leslieville and the Beach, this boutique apartment building is a haven for those seeking a dynamic and lively atmosphere.</p>
                
                <p>What sets 1602-1604 Queen Street East apart is its innovative design as Toronto's first mass-timber apartment building. Built to Passive House standards, this eco-friendly structure not only reduces its environmental impact but also provides comfortable and energy-efficient living space for its residents.</p>

                <p>Whether your a student, young professional or a small family, this apartment building caters to your needs. The thoughtfully designed units offer a range of layouts to suit different lifestyles. From cozy studios to spacious two-bedroom apartments, each unit is meticulously crafted to create a welcoming and functional living space.</p>

                <p>Step inside your dream apartment and be greeted by an abundance of natural light streaming through the large windows. The open concept layouts seamlessly connect the living, dining, and kitchen areas, creating a spacious and airy feel. The high-quality finishes and modern appliances add a touch of luxury to your everyday life.</p>

                <p>At 1602-1604 Queen Street East, we strive to provide you with more than just an apartment. We aim to create a community where you can thrive and feel at home. Come and experience the perfect blend of modern living, sustainability, and convenience at your dream apartment on Queen Street East.</p>
            </div>
            <div className="about-banner banner">
                <img src="/banners/about_banner.jpg" alt="banner-1" />
            </div>
        </section>
     );
}
 
export default About;