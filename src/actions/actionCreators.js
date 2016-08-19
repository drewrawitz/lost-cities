export const updateDeck = (deck) => {
    return {
      type: 'UPDATE_DECK',
      deck
    }
}

export const updatePlayersCards = (player, cards) => {
    return {
      type: 'UPDATE_PLAYERS_CARDS',
      player,
      cards
    }
}

export const selectCard = (player, card) => {
  return {
    type: 'SELECT_CARD',
    player,
    card
  }
}

export const updateTurn = (turn) => {
  return {
    type: 'UPDATE_TURN',
    turn
  }
}

export const updateAlert = (alert) => {
  return {
    type: 'UPDATE_ALERT',
    alert
  }
}