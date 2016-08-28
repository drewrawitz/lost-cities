import _ from 'lodash';

const discarded = (state = {}, action) => {
  switch (action.type) {
    case 'DISCARD_CARD':
      const update = {
        cards: [...state[action.color].cards, action.card]
      }
      return Object.assign({}, state, {
        [action.color]: update
      });
    case 'REMOVE_CARD_FROM_DISCARD_PILE':
      // remove the last element from the discarded pile array
      const newPile = {
        cards: [...state[action.pile].cards.slice(0, -1)]
      }
      return Object.assign({}, state, {
        [action.pile]: newPile
      });
     default:
       return state
  }
}

export default {
  discarded
}
