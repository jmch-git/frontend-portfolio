import React from "react";

import jsLogo from "../../components/assets/javascript-original.svg";
import pyLogo from "../../components/assets/python-original.svg";
import sqlLogo from "../../components/assets/postgresql-original.svg";
import cssLogo from "../../components/assets/css3-original.svg";
import reactLogo from "../../components/assets/react-original.svg";
import djLogo from "../../components/assets/django-original.svg";
import mdbLogo from "../../components/assets/mongodb-original.svg";
import nodeLogo from "../../components/assets/nodejs-original.svg";

import Skill from "./Skill";



function SkillsList() {
  return (
    <div className="Skills" id="Skills">
        <div className="h2-title">
            Skills
        </div>    
        <div className="icon-container">
            <div className="row ">
                <Skill logo={jsLogo} altText="JavaScript"/>
                <Skill logo={nodeLogo} altText="NodeJS"/>
                <Skill logo={reactLogo} altText="React"/>
                <Skill logo={pyLogo} altText="Python"/>
            </div>
            <div className="row ">
                <Skill logo={sqlLogo} altText="JavaScript"/>
                <Skill logo={mdbLogo} altText="NodeJS"/>
                <Skill logo={cssLogo} altText="React"/>
                <Skill logo={djLogo} altText="Python"/>                
            </div>    
        </div>
    </div>
  )
}

export default SkillsList