import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'; // we need this for react-router
import deck from './deck'
import players from './players'

// Combine all our reducers togeher
const rootReducer = combineReducers({ deck, players, routing: routerReducer });

export default rootReducer;
