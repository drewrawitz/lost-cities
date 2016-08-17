import deck from './deck';

const STARTING_HAND = 8;

const newDeck = deck.slice(STARTING_HAND * 2)
const dealDeck = deck.slice(0, STARTING_HAND * 2)

var playerOne = {}
var playerTwo = {}

let p1Cards = []
let p2Cards = []

// loop through the first 16 cards to pass them out
for (var i = 0; i < dealDeck.length; i++) {
  if(i % 2 === 0) { // even
    p1Cards.push(dealDeck[i])
  }
  else if(i % 2) { // odd
    p2Cards.push(dealDeck[i])
  }
}

playerOne.cards = p1Cards;
playerTwo.cards = p2Cards;

var players = {playerOne, playerTwo}

export default players;