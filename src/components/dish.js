import React from 'react';
import Masonry from 'react-masonry-component';
import GalleryModal from './modal';

import images from './images';

const imagelist = [
  images.dish1,
  images.dish2,
  images.dish3,
  images.dish4,
  images.dish5,
  images.dish6,
  images.dish7,
  images.dish8,
  images.dish9,
  images.dish10,
  images.dish11,
  images.dish12,
  images.dish13,
  images.dish14,
  images.dish15,
  images.dish16,
  images.dish17,
  images.dish18,
  images.dish19,
  images.dish20,
  images.dish21,
  images.dish22,
  images.dish23,
  images.dish24,
  images.dish25,
  images.dish26,
  images.dish27,
  images.dish28,
  images.dish29,
  images.dish30,
  images.dish31,
  images.dish32,
  images.dish33,
  images.dish34,
  images.dish35
]

  const Dish = () => {
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
    <div className='dish'>
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

export default Dish;
