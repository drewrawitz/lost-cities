const discarded = (state = {}, action) => {
  switch (action.type) {
    case 'DISCARD_CARD':
       return Object.assign([], action.card)
     default:
       return state
  }
}

export default {
  discarded
}
