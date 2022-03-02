import React from "react";
import htmlLogo from "../components/assets/HTML.png";
import jsLogo from "../components/assets/JSlogo.png";
import pyLogo from "../components/assets/python.png";
import sqlLogo from "../components/assets/PostgreSQL.png";
import cssLogo from "../components/assets/CSS.png";
import reactLogo from "../components/assets/React_black.png";
import djLogo from "../components/assets/Django.png";
import mdbLogo from "../components/assets/MongoDB.png";
import nodeLogo from "../components/assets/NodeJS.jpeg";
import bsLogo from "../components/assets/Bootstrap.png";


function Skills() {
  return (
    <div className="Skills" id="Skills">
        <div className="H2-Title">
            Skills
        </div>    
        <div class="icon-container">
            <div class="row ">
                <div class="col-lg-2 col-md-6">
                    <img src={jsLogo} alt="JavaScript" />
                </div>
                <div class="col-lg-2 col-md-6">
                    <img src={nodeLogo} alt="NodeJS.png" />
                </div>
                <div class="col-lg-2 col-md-6">
                    <img src={reactLogo} alt="React_black.png" />
                </div>           
                <div class="col-lg-2 col-md-6">
                    <img src={pyLogo} alt="python.png" />
                </div>
                <div class="col-lg-2 col-md-6">
                    <img src={djLogo} alt="Django.png" />
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-2 col-md-6">
                    <img src={sqlLogo} alt="PostgreSQL.png" />
                </div>
                <div class="col-lg-2 col-md-6">
                    <img src={mdbLogo} alt="MongoDB.png" />
                </div>
                <div class="col-lg-2 col-md-6">
                    <img src={cssLogo} alt="CSS.png" />
                </div>
                <div class="col-lg-2 col-md-6">
                    <img src={bsLogo}  alt="Bootstrap.png"/>
                </div>
                <div class="col-lg-2 col-md-6">
                    <img src={htmlLogo} alt="HTML" />
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Skills