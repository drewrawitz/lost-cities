import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App';
import LostCities from './components/LostCities';

import store, { history } from './store';

render(
  (<Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LostCities} />
      </Route>
    </Router>
  </Provider>),
  document.getElementById('root')
);
