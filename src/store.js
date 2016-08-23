import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index';

import deck from './data/deck';
import players from './data/players';
import board from './data/board';

const defaultState = {
  deck,
  players,
  turn: null,
  alert: null,
  action: 'place',
  discarded: board.discarded
};

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
)

// we export history because we need it in `reduxstagram.js` to feed into <Router>
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
