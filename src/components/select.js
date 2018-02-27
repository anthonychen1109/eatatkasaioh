import React from 'react';

// Images
import Green from '../static/images/green/10.jpg';
import Wadsworth from '../static/images/wadsworth/94.jpg';

const Select = () => {
  return (
    <div className="select container">
      <h1>Visit Our Locations:</h1>
      <div className="select-location">
        <div
          className="location"
          style={{backgroundImage: "url(" + Green + ")", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
          >
          <a href="/3875">
            <div className="overlay">
              <h1>3875 Massillon Rd Ste 300 Uniontown, OH 44685</h1>
            </div>
          </a>
        </div>
        <div
          className="location"
          style={{backgroundImage: "url(" + Wadsworth + ")", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
          >
          <a href="/295">
            <div className="overlay">
              <h1>295 Weatherstone Dr E, Wadsworth, OH 44281</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Select;
