import React, { Component  } from 'react';
import _ from 'underscore';

const Game = {
  STARTING_HAND: 8,
  playerOne: {
      name: 'Drew',
      cards: []
  },
  playerTwo: {
      name: 'Haley',
      cards: []
  },
  deck: {
    colors: ['red', 'yellow', 'blue', 'white', 'green'],
    cards: ['handshake', 'handshake', 'handshake', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  }
}

class LostCities extends Component {

  constructor(props) {
    super(props)
    this.state = {
      deck: [],
      playerOne: Game.playerOne,
      playerTwo: Game.playerTwo
    }
  }

  componentDidMount() {
    this.getDeck()
  }

  getDeck() {
      let deck = []

      // loop through our arrays to create our deck
      _.each(Game.deck.colors, function(color) {
        _.each(Game.deck.cards, function(card) {
          deck.push(color + ':' + card)
        })
      })

      // randomize the deck before setting the state
      deck = _.shuffle(deck)

      // set the state with our new deck
      this.setState({ deck }, function (){

        // deal the cards
        this.dealCards()
      })
  }

  dealCards() {
    const newDeck = this.state.deck.slice(Game.STARTING_HAND * 2)
    const dealDeck = this.state.deck.slice(0, Game.STARTING_HAND * 2)
    let p1 = []
    let p2 = []

    // loop through the first 16 cards to pass them out
    for (var i = 0; i < dealDeck.length; i++) {
        if(i % 2 === 0) { // even
            p1.push(dealDeck[i])
        }
        else if(i % 2) { // odd
          p2.push(dealDeck[i])
        }
    }

    this.setState({
      deck: newDeck,
      playerOne: {
        name: this.state.playerOne.name,
        cards: p1
      },
      playerTwo: {
        name: this.state.playerTwo.name,
        cards: p2
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Lost Cities</h2>
          <div>
            <p><strong>Player One:</strong> {this.state.playerOne.name}</p>
            <ul>
              {this.state.playerOne.cards.map(card =>
                <li>{card}</li>
              )}
            </ul>

            <p><strong>Player Two:</strong> {this.state.playerTwo.name}</p>
            <ul>
              {this.state.playerTwo.cards.map(card =>
                <li>{card}</li>
              )}
            </ul>
          </div>

        <h4>Remaining Deck ({this.state.deck.length})</h4>
        <ul>
          {this.state.deck.map(card =>
            <li>{card}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default LostCities
