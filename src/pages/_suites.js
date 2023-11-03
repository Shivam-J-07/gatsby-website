import * as React from "react"
import styles from '../styles/suites.css'
import Tabs from '../components/suites/suiteTabs'
import { tabs_content } from '../content/content.js'

const Suites = () => {
    console.log(tabs_content)
    return (
        <section id="suites-section" className="content-section flex-col">
            <h1 id="suites-header" className="header">Suites</h1>
            <Tabs data={tabs_content} />
            <div className="suites-banner banner">
                <img src="/banners/suites_banner.jpg" alt="banner-1" />
            </div>
        </section>
     );
}
 
export default Suites;