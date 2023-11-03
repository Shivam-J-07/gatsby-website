import * as React from "react"
import Home from './_home.js'
import About from './_about.js'
import Suites from './_suites.js'
import Amenities from "./_amenities.js"
import Gallery from "./_gallery.js"
import styles from '../styles/index.css'
import ReactModal from 'react-modal';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  ReactModal.setAppElement('#___gatsby'); // Assuming your root div has the id
  return (
    <div id="root_element">
      <Home />
      <About />
      <Suites />
      <Amenities/>
      <Gallery />
    </div>
  )
}
