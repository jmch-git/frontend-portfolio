import React from 'react'
import img1 from "../assets/JavaScript.png";

const Card = (props) => {
  return (
    <div className="card text-center">
        <div className="overflow">
            <img src={img1} alt="Image 1" />
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text text-secondary">
                
            </p>
        </div>
    </div>
  )
}

export default Card;

