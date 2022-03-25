import React from "react";

import flower from "../assets/flower.svg";

function AboutList() {
  return (
    <div className="about-list">
      &nbsp;Musician&nbsp;
      <img src={flower} alt="" />
      &nbsp;Meditator&nbsp;
      <img src={flower} alt="" />
      &nbsp;Traveler&nbsp;
      <img src={flower} alt="" />
      &nbsp;Thrifter&nbsp;
      <img src={flower} alt="" />
    </div>
  );
}

export default AboutList;
