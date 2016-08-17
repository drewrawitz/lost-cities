export const increment = (index) => {
  return {
    type: 'INCREMENT_SCORE',
    index
  }
}

export const selectCard = (id) => {
  return {
    type: 'SELECT_CARD',
    id
  }
}