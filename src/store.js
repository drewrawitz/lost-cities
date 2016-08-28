import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
import {reduxReactFirebase} from 'redux-firebasev3'
import rootReducer from './reducers/index';
import helpers from './lib/helpers';

import deck from './data/deck';
import players from './data/players';
import board from './data/board';

const defaultState = {
  deck,
  players,
  turn: helpers.game.randomTurn(),
  alert: null,
  action: 'place',
  discarded: board.discarded
};

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCC8d0LQJb4A1y3r8yv0-dt03NEi09ZHsU",
  authDomain: "lost-cities-d5b5b.firebaseapp.com",
  databaseURL: "https://lost-cities-d5b5b.firebaseio.com",
  storageBucket: "",
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    reduxReactFirebase(firebaseConfig),
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
)

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
