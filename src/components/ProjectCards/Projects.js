import React from "react"
import msbImg from "../assets/msb.png"
import gigImg from "../assets/gigapp.png"
import coinImg from "../assets/coin_base.png"
import harryImg from "../assets/harry_potter.png"


function Projects() {
  return (
    <div className="Projects" id="Projects">
        <div className="H2-Title">
            Projects
        </div>
        <div class="card">
            <img class="card-img-top" src={msbImg} alt="" />
            <div class="card-body">
                <a href="https://my-sustainable-brands.netlify.app/">
                    <h4 class="card-title">My Sustainable Brands</h4>
                </a>
                <p class="card-text">This community app allows people to recommend sustainable brands they know and trust - as well as see other's recommendations and learn tips and tricks to further sustainability.</p>
            </div>
        </div>   
        <div class="card">
            <img class="card-img-top" src={gigImg} alt="" />
            <div class="card-body">
                <a href="https://gig-app-jmch.herokuapp.com/">
                    <h4 class="card-title">Gig App</h4>
                </a>
                <p class="card-text">Bands and band managers need a way to organize their gig schedules and keep track of venue contact information. Gig App allows users to create bands, venues and gigs. The band detail view shows gigs with their venue and dates sorted in date order.</p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={coinImg} alt="" />
            <div class="card-body">
                <a href="https://coin-case.herokuapp.com/buys">
                    <h4 class="card-title">Coin Base</h4>
                </a>
                <p class="card-text">An application that stores and displays personal crypto currency buy data.</p>
            </div>
        </div>    
        <div class="card">
            <img class="card-img-top" src={harryImg} alt="" />
            <div class="card-body">
                <a href="https://romantic-mcclintock-4037d1.netlify.app/">
                    <h4 class="card-title">Wizarding World Who's Who</h4>
                </a>
                <p class="card-text">An application that returns information about Harry Potter characters when a user inputs a character name.</p>
            </div>
        </div>   
    </div>
  )
}

export default Projects