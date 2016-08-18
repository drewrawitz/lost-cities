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