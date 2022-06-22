import React from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-100 header d-flex ">
      <div className="container d-flex align-items-center">
        <div className="header__left d-flex">
          <NavLink className="Logolink" to="linkcard/">
            <p>Link Card</p>
          </NavLink>
        </div>
        <ul className="header__right nav d-flex justify-content-end list-style-none ">
              <NavLink className="navLinks fw-bold mx-4 fs-5" to="linkcard/">
                Screen 1
              </NavLink>
              <NavLink className="navLinks fw-bold mx-4 fs-5" to="linkcard/screen2">
                Screen 2
              </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
