import React, { Component } from "react";
import Project from "./Project";
import msbImg from "../assets/msb.png";
import gigImg from "../assets/gigapp.png";
import coinImg from "../assets/coin_base.png";
import harryImg from "../assets/harry_potter.png";

import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects">
        <p> </p><br />
        <div className="h2-title">Projects</div>
        <div className="container-fluid d-grid p-0 justify-content-center">
          <div className="row">
            <Project
              imgsrc={msbImg}
              title="My Sustainable Brands"
              href="https://my-sustainable-brands.netlify.app/"
              desc="This community app allows people to recommend sustainable brands they know and trust - as well as see other's recommendations and learn tips and tricks to further sustainability."
            />
            <Project
              imgsrc={gigImg}
              title="Gig App"
              href="https://gigapp-jmch.herokuapp.com/"
              desc="Bands and band managers need a way to organize their gig schedules and keep track of venue contact information. Gig App allows users to create bands, venues and gigs. The band detail view shows gigs with their venue and dates sorted in date order."
            />
            {/* <Project
              imgsrc={coinImg}
              title="Coin Case"
              href="https://coin-case.herokuapp.com/buys"
              desc="An application that stores and displays personal crypto currency buy data."
            /> */}
            {/* <Project
              imgsrc={harryImg}
              title="Who's Who in the Wizarding World"
              href="https://romantic-mcclintock-4037d1.netlify.app/"
              desc="An application that returns information about Harry Potter characters when a user inputs a character name."
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
