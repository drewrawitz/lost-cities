const deck = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DECK':
       return Object.assign([], state, action.deck)
     default:
       return state
  }
}

export default deck
