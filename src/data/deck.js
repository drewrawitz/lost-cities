import _ from 'underscore';

const data = {
  deck: {
    colors: ['red', 'yellow', 'blue', 'white', 'green'],
    cards: ['0', '0', '0', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  }
}

let deck = [];
let i = 0;

// loop through our arrays to create our deck
_.each(data.deck.colors, function(color) {
  _.each(data.deck.cards, function(card) {
    i++;
    deck.push({ id: i, color, card })
  })
})

// randomize the deck before setting the state
deck = _.shuffle(deck)

export default deck;