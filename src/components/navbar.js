import React, { Component } from 'react';

// Images
import Logo from '../static/images/logo.jpg';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="top-nav">
          <a href="#about"><li><h5>About</h5></li></a>
          <a href="#"><li><h5>Online Order</h5></li></a>
          <a href="/"><li className="logo"><h5 className="header-logo">Kasai Japanese Restaurant</h5></li></a>
          <a href="#gallery"><li><h5>Gallery</h5></li></a>
          <a href="#contact"><li><h5>Contact</h5></li></a>
        </ul>
      </div>
    )
  }
}

export default Navbar;
