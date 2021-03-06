export const startGame = () => {
    return {
      type: 'START_GAME'
    }
}

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

export const removeCardFromPlayer = (player, card) => {
    return {
      type: 'REMOVE_CARD_FROM_PLAYER',
      player,
      card
    }
}

export const addToExpedition = (player, card) => {
    return {
      type: 'ADD_TO_EXPEDITION',
      player,
      card
    }
}

export const updateScore = (player, card) => {
    return {
      type: 'UPDATE_SCORE',
      player,
      card
    }
}

export const expedition = (player, card) => {
  return (dispatch) => {
    dispatch(updateScore(player, card));
    dispatch(addToExpedition(player, card));
    dispatch(deselectCard(player));
    dispatch(removeCardFromPlayer(player, card));
    dispatch(updateAction('take'));
  }
}

export const switchTurns = (player) => {
    return {
      type: 'SWITCH_TURNS',
      player
    }
}

export const drawCard = (player, card) => {
  return (dispatch) => {
    dispatch(drawPlayerCard(player, card));
    dispatch(removeCardFromDeck());
    dispatch(updateAction('place'));
    dispatch(switchTurns(player));
  }
}

export const takeCardFromPile = (player, card, pile) => {
  return (dispatch) => {
    dispatch(drawPlayerCard(player, card));
    dispatch(removeCardFromDiscardPile(pile));
    dispatch(updateAction('place'));
    dispatch(switchTurns(player));
  }
}

export const removeCardFromDiscardPile = (pile) => {
    return {
      type: 'REMOVE_CARD_FROM_DISCARD_PILE',
      pile
    }
}

export const removeCardFromDeck = () => {
    return {
      type: 'REMOVE_CARD_FROM_DECK'
    }
}

export const drawPlayerCard = (player, card) => {
  return {
    type: 'DRAW_CARD',
    player,
    card
  }
}

export const selectCard = (player, card) => {
  return {
    type: 'SELECT_CARD',
    player,
    card
  }
}

export const deselectCard = (player) => {
  return {
    type: 'DESELECT_CARD',
    player
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

export const discard = (player, color, card) => {
  return (dispatch) => {
    dispatch(discardCard(color, card));
    dispatch(deselectCard(player));
    dispatch(removeCardFromPlayer(player, card));
    dispatch(updateAction('take'));
  }
}

export const discardCard = (color, card) => {
  return {
    type: 'DISCARD_CARD',
    color,
    card
  }
}
