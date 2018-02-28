import React, { Component } from 'react';
import $ from 'jquery';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.scrollTo = this.scrollTo.bind(this);
    this.dropdownMenu = this.dropdownMenu.bind(this);
  }

  scrollTo(element) {
    $('html,body').animate({scrollTop: $(`#${element}`).offset().top}, 500);
  }

  dropdownMenu() {
    let x = document.getElementById('dropdownClick');
    if (x.className === 'topnav') {
      x.className = 'responsive animated slideInDown';
    } else {
      x.className = 'topnav';
    }
  }

  render() {
    return (
      <nav>
        <ul className="topnav" id="dropdownClick">
          <li className="logo"><a className="logo-red" href="/">Kasai Japanese Restaurant</a></li>
          <li><a href="#about" onClick={() => this.scrollTo('about')}>About</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#gallery" onClick={() => this.scrollTo('gallery')}>Gallery</a></li>
          <li><a href="#contact" onClick={() => this.scrollTo('contact')}>Contact</a></li>
          <li id="test" className="dropdownIcon">
            <a href="javascript:void(0);"
              onClick={this.dropdownMenu}
              >
              &#9776;
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
