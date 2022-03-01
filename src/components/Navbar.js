import React from "react";


function Navbar(props) {
    return  <div>
                <nav class="navbar navbar-expand-lg bg-dark navbar-light">
                {/* Adding this container <div> to contain the items within 
                        so that there can be some space from the edge */}
                <div class="container">
                    <a href="#" class="navbar-brand">June Holmberg</a>
                    <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navmenu"
                    >
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navmenu">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                        <a href="#About" class="nav-link">About Me</a>
                        </li>
                        <li class="nav-item">
                        <a href="#Portfolio" class="nav-link">Portfolio</a>
                        </li>
                        <li class="nav-item">
                        <a href="#Contact" class="nav-link">Contact</a>
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