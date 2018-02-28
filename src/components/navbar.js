import React, { Component } from 'react';
import $ from 'jquery';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(element) {
    $('html,body').animate({scrollTop: $(`#${element}`).offset().top}, 500);
  }

  render() {
    return (
      <div className="navbar">
        <ul className="top-nav">
          <a href="#about" onClick={() => this.scrollTo('about')}><li><h5>About</h5></li></a>
          <a href="#"><li><h5>Online Order</h5></li></a>
          <a href="/"><li className="logo"><h5 className="header-logo">Kasai Japanese Restaurant</h5></li></a>
          <a href="#gallery" onClick={() => this.scrollTo('gallery')}><li><h5>Gallery</h5></li></a>
          <a href="#contact" onClick={() => this.scrollTo('contact')}><li><h5>Contact</h5></li></a>
          <a href="#" className="dropdown"><li><i className="fas fa-bars fa-2x"></i></li></a>
        </ul>
      </div>
    )
  }
}

export default Navbar;
