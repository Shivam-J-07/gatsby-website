import * as React from "react"
import styles from '../styles/home.css'

const Home = () => {
    return (
        <section>
            <div class="home-page-img">
                <img src="/background.png" alt="alternate" />
            </div>
            <div class="nav flex-row">
                <div class="nav-header-container">
                    <p class="nav-header">399 Stan Bailie</p>
                </div>
                <div class="nav-link-container flex-row">
                    <span class="nav-link">About Us</span>
                    <span class="nav-link">Suites</span>
                    <span class="nav-link">Amenities</span>
                    <span class="nav-link">Gallery</span>
                    <span class="nav-link">Neighbourhood</span>
                </div>
                <div class="nav-btn-container flex-row">
                    <button class="nav-btn">Schedule a tour</button>
                    <button class="nav-btn">Apply</button>
                </div>
            </div>
        </section>
     );
}
 
export default Home;