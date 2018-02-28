import React, { Component } from 'react';
import $ from 'jquery';

// Components
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Gallery from './gallery';
import Contact from './contact';

class TwoNineFive extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.scrollTop = this.scrollTop.bind(this);
  }

  scrollTop() {
    $('html, body').animate({
        scrollTop: "0px"
    }, 500);
  }
  render() {
    return (
      <div className="twoninefive">
        <button
          onClick={this.scrollTop}
          className="btn btn-secondary toTop"
          >
          &#9650;
        </button>
        <Navbar />
        <Header />
        <About />
        <Gallery galleryNumber={this.props.storeNo}/>
        <Contact
          location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.511262559841!2d-81.73871228518084!3d41.05781582432482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830cc2ce6311a3f%3A0xa529d28e9a3207e8!2s295+Weatherstone+Dr%2C+Wadsworth%2C+OH+44281!5e0!3m2!1sen!2sus!4v1519835122523"
          />
      </div>
    )
  }
}

export default TwoNineFive;
