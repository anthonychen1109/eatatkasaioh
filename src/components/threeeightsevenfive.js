import React, { Component } from 'react';

// Components
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Gallery from './gallery';

class ThreeEightSevenFive extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="threeeightsevenfive">
        <Navbar />
        <Header />
        <About />
        <Gallery galleryNumber={this.props.storeNo}/>
      </div>
    )
  }
}

export default ThreeEightSevenFive;
