const players = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PLAYERS_CARDS':
      const playerObject = Object.assign(state[action.player], { cards: action.cards });
      return Object.assign({}, state, {
        [action.player]: playerObject
      });
     default:
       return state
  }
}

export default players
