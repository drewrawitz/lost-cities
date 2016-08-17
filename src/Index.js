import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App';
import LostCities from './components/LostCities';

window.React = React;

render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LostCities} />
    </Route>
  </Router>),
  document.getElementById('root')
);
