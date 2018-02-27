import React from 'react';

// Images
import Img1 from '../static/images/dish/30.jpg';
import Img2 from '../static/images/dish/32.jpg';
import Img3 from '../static/images/dish/33.jpg';

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active"
            style={{backgroundImage: "url(" + Img1 + ")", backgroundSize: "cover", backgroundPosition: "center"}}
            >
            <h1 className="animated zoomIn">Kasai Japanese Restaurant</h1>
          </div>
          <div className="carousel-item"
            style={{backgroundImage: "url(" + Img2 + ")", backgroundSize: "cover", backgroundPosition: "center"}}
            >
            <h1 className="animated zoomIn">Kasai Japanese Restaurant</h1>
          </div>
          <div className="carousel-item"
            style={{backgroundImage: "url(" + Img3 + ")", backgroundSize: "cover", backgroundPosition: "center"}}
            >
            <h1 className="animated zoomIn">Kasai Japanese Restaurant</h1>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Carousel;
