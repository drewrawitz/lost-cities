const deck = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DECK':
       return Object.assign([], action.deck)
     default:
       return state
  }
}

export default deck
