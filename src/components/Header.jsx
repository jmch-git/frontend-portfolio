import React from "react";
import logo from "../components/assets/logo_skinny.png";

function Header(props) {
  return (
    <div style={{ marginTop: "58px" }}>
      <img src={logo} alt="logo..." class="logo d-none d-md-block" />
    </div>
  );
}

export default Header;
