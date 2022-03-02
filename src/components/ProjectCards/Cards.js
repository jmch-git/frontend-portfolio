import React, {Component} from "react";
import Card from "./CardUI";
import msbImg from "../assets/msb.png";
import gigImg from "../assets/gigapp.png";
import coinImg from "../assets/coin_base.png";
import harryImg from "../assets/harry_potter.png";

class Cards extends Component {
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card 
                            imgsrc={msbImg} 
                            title="My Sustainable Brands" 
                            href="https://my-sustainable-brands.netlify.app/" 
                            desc="This community app allows people to recommend sustainable brands they know and trust - as well as see other's recommendations and learn tips and tricks to further sustainability."
                        />
                    </div>
                    <div className="col-md-3">
                        <Card 
                            imgsrc={gigImg} 
                            title="Gig App" 
                            href="https://gig-app-jmch.herokuapp.com/"
                            desc="Bands and band managers need a way to organize their gig schedules and keep track of venue contact information. Gig App allows users to create bands, venues and gigs. The band detail view shows gigs with their venue and dates sorted in date order."
                        />
                    </div>
                    <div className="col-md-3">
                        <Card 
                            imgsrc={coinImg} 
                            title="Coin Base" 
                            href="https://coin-case.herokuapp.com/buys" 
                            desc="An application that stores and displays personal crypto currency buy data."
                        />
                    </div>
                    <div className="col-md-3">
                        <Card 
                            imgsrc={harryImg} 
                            title="Who's Who in the Wizarding World" 
                            href="https://romantic-mcclintock-4037d1.netlify.app/" 
                            desc="An application that returns information about Harry Potter characters when a user inputs a character name."
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards