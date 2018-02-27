import React from 'react';
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

const Store = () => {
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
  return (
    <div className="store">
      <Masonry
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {masonry}
      </Masonry>
    </div>
  )
}

export default Store;
