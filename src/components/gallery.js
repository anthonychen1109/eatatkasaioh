import React, { Component } from 'react';

// Components
import Dish from './dish';
import Store from './store';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
    this.setGallery = this.setGallery.bind(this);
    this.renderGallery = this.renderGallery.bind(this);
  }

  setGallery(gallery) {
    this.setState({ selected: gallery})
  }

  renderGallery(gallery) {
    switch(gallery){
      case 'dish':
        return <Dish />
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="gallery">
        <h1>Gallery</h1>
        <button onClick={() => this.setGallery('dish')}>See Our Dishes</button>
        <div>
          {this.renderGallery(this.state.selected)}
        </div>
      </div>
    )
  }
}

export default Gallery;
