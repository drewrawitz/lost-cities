import _ from 'underscore';

const discarded = (state = {}, action) => {
  switch (action.type) {
    case 'DISCARD_CARD':
      const update = {
        cards: [...state[action.color].cards, action.card]
      }

      return Object.assign({}, state, {
        [action.color]: update
      });
     default:
       return state
  }
}

export default {
  discarded
}
