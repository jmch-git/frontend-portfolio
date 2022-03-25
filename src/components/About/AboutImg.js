import React from "react";
import HeadShot from "./June_Small.png";

function AboutImg() {
  return (
    <div className="about-img">
      <img
        src={HeadShot}
        alt="About Me"
        className="headshot rounded-pill border border-5"
      />
    </div>
  );
}

export default AboutImg;
