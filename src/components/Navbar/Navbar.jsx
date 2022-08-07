import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="formEx">
      <a className="navbar-home" href="#"><img src='./src/assets/Add.png' /></a>
      <a className="navbar-logo" href="#"><img src='./src/assets/Flog.png' /></a>
      <a className="navbar-profile" href="#"><img src='./src/assets/Profile Pic.png' /></a>
    </div>
  )
}
export default Navbar;