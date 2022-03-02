import React from "react";
import Email from "../components/assets/email.png"
import GitHub from "../components/assets/GitHubLogo.png"
import LinkedIn from "../components/assets/LinkedIn Logo.png"

function Footer() {
    return  <div id="Contact">
                <div className="container" className="row ">
                    <hr />
                    <div className="col-lg-2 col-md-12">
                        <h3>Let's Chat!</h3>
                    </div>
                    <div className="col-lg-2 col-md-6">
                    <a href = "mailto: juneholmberg@gmail.com">
                        <img src={Email} alt="Email" />
                    </a>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <a href="https://github.com/jmch-git" target="_blank">
                            <img src={GitHub} alt="GitHub" />
                        </a>    
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <a href="https://www.linkedin.com/in/june-holmberg/" target="_blank">
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>   
                    </div>
                    <div className="col-lg-2 col-md-6">
                
                    </div>
                </div>
            </div>
}

export default Footer