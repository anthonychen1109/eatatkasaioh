import React from 'react';

// Images
import Green from '../static/images/green/10.jpg';
import Wadsworth from '../static/images/wadsworth/94.jpg';

// Components
import Carousel from './carousel';
import Select from './select';

const App = () => {
  return (
    <div className="app">
      <Carousel />
      <Select />
    </div>
  )
}

export default App;
