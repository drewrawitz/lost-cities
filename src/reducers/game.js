import _ from 'underscore';

const deck = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DECK':
       return Object.assign([], action.deck)
     default:
       return state
  }
}

const players = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PLAYERS_CARDS':
      const updatePlayerObject = Object.assign(state[action.player], { cards: action.cards });
      return Object.assign({}, state, {
        [action.player]: updatePlayerObject
      });
    case 'REMOVE_CARD_FROM_PLAYER':
      let cardIndex = _.findIndex(state[action.player].cards, action.card)
      let newCards = [
        ...state[action.player].cards.slice(0, cardIndex),
        ...state[action.player].cards.slice(cardIndex + 1)
      ]
      const newCardsObj = Object.assign(state[action.player], { cards: newCards });
      return Object.assign({}, state, {
        [action.player]: newCardsObj
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
    case 'DESELECT_CARD':
      const deselectedObject = Object.assign(state[action.player], { selected: {} });
      return Object.assign({}, state, {
        [action.player]: deselectedObject
      });
    default:
      return state
  }
}

const action = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ACTION':
      return (action.action) ? action.action : state
    default:
      return state
  }
}

const turn = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_TURN':
      return action.turn
     default:
       return state
   }
}

const alert = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return Object.assign({}, state, {
        type: action.alert,
        message: action.message
      })
    case 'HIDE_ALERT':
      return null
    default:
      return state
   }
}

export default {
    deck,
    players,
    turn,
    action,
    alert
}
