import React from "react";
import "./Navbar.css";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <a className="navbar-home">
          <FaRegPlusSquare />
        </a>
      </Link>
      <Link to="/add-activities">
        <a className="navbar-logo" href="#">
          <img src="./src/assets/Flog.png" />
        </a>
      </Link>
      <Link to="/">
        <a className="navbar-profile" href="#">
          <img src="./src/assets/Profile Pic.png" />
        </a>
      </Link>
    </div>
  );
}


export default Navbar;
