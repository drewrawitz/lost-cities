import _ from 'underscore';

const players = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PLAYERS_CARDS':
      const updatePlayerObject = Object.assign(state[action.player], { cards: action.cards });
      return Object.assign({}, state, {
        [action.player]: updatePlayerObject
      });
    case 'SELECT_CARD':
      let selected = action.card

      // if the user clicked on the card that's already selected, let's clear out the selected object
      if(state[action.player].selected.id === action.card.id) {
        selected = {}
      }

      const selectPlayerObject = Object.assign(state[action.player], { selected });
      return Object.assign({}, state, {
        [action.player]: selectPlayerObject
      });
     default:
       return state
  }
}

export default players
