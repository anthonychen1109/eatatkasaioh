import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/styles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Componenets
import App from './components/app';
import ThreeEightSevenFive from './components/threeeightsevenfive';
import TwoNineFive from './components/twoninefive';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/3875" component={ThreeEightSevenFive} />
      <Route path="/295" component={TwoNineFive} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
