import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import GalleryModal from './modal';

// Images
import images from './images';

const imagelist = [
  images.green1,
  images.green2,
  images.green3,
  images.green4,
  images.green5,
  images.green6,
  images.green7,
  images.green8,
  images.green9,
  images.green10,
  images.green11
]

const imagelist2 = [
  images.wadsworth1,
  images.wadsworth2,
  images.wadsworth3,
  images.wadsworth4,
  images.wadsworth5,
  images.wadsworth6,
  images.wadsworth7
]

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryNumber: this.props.galleryNumber
    };
  }
  render () {
    var masonryOptions = {
      transitionDuration: 0
    };

    const masonry = imagelist.map((item, index) => {
      return (
        <div key={item+index} className="grid-item">
          <GalleryModal image={item}/>
        </div>
      )
    })

    const masonry2 = imagelist2.map((item, index) => {
      return (
        <div key={item+index} className="grid-item">
          <GalleryModal image={item}/>
        </div>
      )
    })

    return (
      <div className="store">
        <Masonry
          elementType={'div'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
        {this.state.galleryNumber === '1' ?
          imagelist.map((item, index) => {
            return (
              <div key={item+index} className="grid-item">
                <GalleryModal image={item}/>
              </div>
            )
          })
          :
          imagelist2.map((item, index) => {
            return (
              <div key={item+index} className="grid-item">
                <GalleryModal image={item}/>
              </div>
            )
          })
        }
        </Masonry>
      </div>
    )
  }
}

export default Store;
