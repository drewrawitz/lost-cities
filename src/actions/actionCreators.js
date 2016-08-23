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

export const updateAction = (action) => {
  return {
    type: 'UPDATE_ACTION',
    action
  }
}

export const showAlert = (alert, message) => {
  return {
    type: 'SHOW_ALERT',
    alert,
    message
  }
}

export const updateAlert = (alert, message) => {
  return (dispatch) => {
    dispatch(showAlert(alert, message));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 5000);
  }
}

export const hideAlert = () => {
  return {
    type: 'HIDE_ALERT'
  }
}

export const discardCard = (card) => {
  return {
    type: 'DISCARD_CARD',
    card
  }
}
