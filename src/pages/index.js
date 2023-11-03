import * as React from "react"
import Home from './_home.js'
import About from './_about.js'
import Suites from './_suites.js'
import Amenities from "./_amenities.js"
import styles from '../styles/index.css'

export default function App() {
  return (
    <div>
      <Home />
      <About />
      <Suites />
      <Amenities/>
    </div>
  )
}
