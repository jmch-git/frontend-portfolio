import React from "react"
import AboutImg from "./AboutImg";
import AboutIm from "./AboutIm";
import AboutList from "./AboutList"
import AboutSE from "./AboutSE"
import AboutText from "./AboutText";

const About = () => {
  return (
    <div id="About" className="About">
      <AboutImg />
      <AboutIm />
      <AboutList />   
      <AboutSE />
      <AboutText />
    </div>
  )
}

export default About