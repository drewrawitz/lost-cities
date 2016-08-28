import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'; // we need this for react-router
import {firebaseStateReducer} from 'redux-firebasev3'
import game from './game'
import board from './board'

// Combine all our reducers togeher
const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  deck: game.deck,
  players: game.players,
  turn: game.turn,
  alert: game.alert,
  action: game.action,
  discarded: board.discarded,
  routing: routerReducer
});

export default rootReducer;
