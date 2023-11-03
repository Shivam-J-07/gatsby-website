import * as React from "react"
import styles from '../styles/home.css'
import ResponsiveNav from '../components/navbar/nav.js'

const Home = () => {
    return (
        <>
            <div className="home-banner banner">
                <img src="/banners/homepage_banner.jpg" alt="alternate" />
            </div>
            <ResponsiveNav />
        </>
     );
}
 
export default Home;