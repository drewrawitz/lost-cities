import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/App';
import Main from './components/Main';
import LostCities from './components/LostCities';

import store, { history } from './store';

render(
  (<Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={LostCities} />
        <Route path="game" component={App}></Route>
      </Route>
    </Router>
  </Provider>),
  document.getElementById('root')
);
