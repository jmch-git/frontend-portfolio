import React from "react";
import HeadShot from "./June_Small.png";

function AboutImg() {
  return (
    <div className="AboutImg">
      <img
        src={HeadShot}
        alt="About Me"
        // className="Headshot rounded-pill border border-5"
      />
    </div>
  );
}

export default AboutImg;
