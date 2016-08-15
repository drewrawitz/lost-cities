import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import LostCities from './components/LostCities';
import About from './components/About';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/lost-cities" component={LostCities} />
      <Route path="/poweredby" component={PoweredBy} />
    </Route>
  </Router>), document.getElementById('content')
);