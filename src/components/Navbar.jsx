import React from "react";

function Navbar(props) {
    return  <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#757575" }}>
                {/* Adding this container <div> to contain the items within 
                        so that there can be some space from the edge */}
                <div className="container">
                    <a href="/" className="navbar-brand">June Holmberg</a>
                    <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navmenu"
                    ><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a href="#About" className="nav-link">About Me</a>
                        </li>
                        <li className="nav-item">
                        <a href="#Projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                        <a href="#Skills" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                        <a href="#Contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                    
                {/* Adding this  to contain the items within 
                        so that I can set exactly where they are positioned */}
                </nav>
            </div>;
}

export default Navbar