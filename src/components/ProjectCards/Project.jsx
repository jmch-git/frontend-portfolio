import React from 'react'

const Card = (props) => {
  return (
    <div className="col-md-6">
      <div className="card text-center">
          <div className="overflow">
              <img src={props.imgsrc} alt="" className="card-img-top"/>
          </div>
          <div className="card-body text-dark">
              <h4 className="card-title">{props.title}</h4>
              <p className="card-text text-secondary">
                {props.desc}
              </p>
              <a href={props.href} className="btn btn-outline-success" target="_blank">Launch App</a>
          </div>
      </div>
  </div>
  )
}

export default Card;

