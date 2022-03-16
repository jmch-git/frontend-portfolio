import React from 'react'

const Skill = ({logo, altText}) => {
  return (
    <div className="col-lg-3 col-md-6 d-flex justify-content-center my-2 skill-image" >
                    <img src={logo} alt={altText} />
    </div>
  )
}

export default Skill

