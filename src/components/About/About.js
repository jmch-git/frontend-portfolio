import React from "react"
import AboutImg from "./AboutImg";
import AboutIm from "./AboutIm";
import AboutList from "./AboutList"
import AboutSE from "./AboutSE"
import AboutText from "./AboutText";

const About = () => {
  return (
    <div id="About">
      <div className="container" className="row">
        <div className="col-md-3" >
          <AboutImg />
        </div>
        <div className="col-md-8">
          <div className="row">
            <AboutIm />
          </div>
          <div className="row">
            <AboutList />   
          </div>
          <div className="row">
            <AboutSE />
          </div>
          <div className="row">
          <AboutText />
          </div>
        </div>
        {/* <div className="col" style={{border:' 1px solid rgba(255,64,129)'}}>
          <AboutList />
        </div>
        <div className="col" style={{border:' 1px solid rgba(255,64,129)'}}>
         
        </div>
        <div className="col" style={{border:' 1px solid rgba(255,64,129)'}}>
          
        </div> */}
      </div>  
    </div>
  )
}

export default About