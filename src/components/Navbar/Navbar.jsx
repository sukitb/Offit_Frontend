import React from 'react'
import './Navbar.css'
import { FaRegPlusSquare } from "react-icons/fa"

function Navbar() {
  return (
    <div className="navbar">
      <a className="navbar-home" href="#"><FaRegPlusSquare /></a>
      <a className="navbar-logo" href="#"><img src='./src/assets/Flog.png' /></a>
      <a className="navbar-profile" href="#"><img src='./src/assets/Profile Pic.png' /></a>
    </div>
  )
}
export default Navbar;