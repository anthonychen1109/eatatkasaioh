import React from 'react';

//Images
import Green from '../static/images/green/10.jpg';
import Wadsworth from '../static/images/wadsworth/94.jpg';
const App = () => {
  return (
    <div className="app">
      <h1>Kasai Japanese Restaurant</h1>
      <div className="select-location">
        <div
          className="location"
          style={{backgroundImage: "url(" + Green + ")", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
          >
          <div className="overlay">
            <h1>3875 Massillon Road Ste 300 Uniontown, OH 44685</h1>
          </div>
        </div>
        <div
          className="location"
          style={{backgroundImage: "url(" + Wadsworth + ")", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
          >
          <div className="overlay">
            <h1>295 Weatherstone Dr E, Wadsworth, OH 44281</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
