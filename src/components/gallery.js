import React, { Component } from 'react';

// Components
import Dish from './dish';
import Store from './store';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'dish'
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
      case 'store':
        return <Store galleryNumber={this.props.galleryNumber} />
      default:
        return null;
    }
  }

  render() {
    return (
      <div id="gallery" className="gallery">
        <h1>Gallery</h1>
        <div className="gallery-buttons">
          <button className="btn btn-secondary" onClick={() => this.setGallery('dish')}>See Our Dishes</button>
          <button className="btn btn-secondary" onClick={() => this.setGallery('store')}>See Our Restaurant</button>
        </div>
        <div>
          {this.renderGallery(this.state.selected)}
        </div>
      </div>
    )
  }
}

export default Gallery;
