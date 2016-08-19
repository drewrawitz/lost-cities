import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'; // we need this for react-router
import game from './game'

// Combine all our reducers togeher
const rootReducer = combineReducers({
  deck: game.deck,
  players: game.players,
  turn: game.turn,
  routing: routerReducer
});

export default rootReducer;
