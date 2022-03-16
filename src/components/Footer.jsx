import React from "react";
// Images

import GitHub from "../components/assets/github-original.svg";
import Email from "../components/assets/email.svg";
import LinkedIn from "../components/assets/linkedin-original.svg";

function Footer() {
  const footerImage = {
    width: "75px",
  };

  return (
    <div id="Contact" className="pb-5 border-top">
      <div className="h2-title">Let's Chat!</div>
      <div className="container" className="row ">
        <div className="col-4 justify-content-center d-flex">
          <a href="mailto: juneholmberg@gmail.com">
            <img src={Email} style={footerImage} alt="Email" />
          </a>
        </div>
        <div className="col-4 justify-content-center d-flex">
          <a href="https://github.com/jmch-git" target="_blank">
            <img src={GitHub} style={footerImage} alt="GitHub" />
          </a>
        </div>
        <div className="col-4 justify-content-center d-flex">
          <a href="https://www.linkedin.com/in/june-holmberg/" target="_blank">
            <img src={LinkedIn} style={footerImage} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
