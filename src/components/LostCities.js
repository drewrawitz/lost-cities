import React, { Component  } from 'react';
import _ from 'underscore';
import LostCitiesPlayerDeck from './LostCitiesPlayerDeck';

const Game = {
  STARTING_HAND: 8,
  messages: {
    placeCard: " must place a card in an expedition or on the board"
  },
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
    cards: ['0', '0', '0', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  }
}

class LostCities extends Component {

  constructor(props) {
    super(props)

    this.state = {
      deck: {},
      playerOne: Game.playerOne,
      playerTwo: Game.playerTwo,
      action: null
    }
  }

  componentDidMount() {
    this.getDeck()
  }

  getDeck() {
      let deck = [];
      let i = 0;

      // loop through our arrays to create our deck
      _.each(Game.deck.colors, function(color) {
        _.each(Game.deck.cards, function(card) {
          i++;
          deck.push({ id: i, color, card, selected: false })
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
      action: this.state.playerOne.name + Game.messages.placeCard
    })

    this.state.playerOne.cards = p1;
    this.state.playerTwo.cards = p2;
  }

  selectCard(id) {
      var selectedIndex = _.findIndex(this.state.cards, function(cards) {
        return cards.id == id
      })

      // if selecting the same card, lets deselect it
      if(this.state.cards[selectedIndex].selected) {
        this.state.cards[selectedIndex].selected = false
        this.setState({ hasSelection: false })

        return;
      }

      // make sure to remove any selected cards
      _.each(this.state.cards, function(cards) {
        cards.selected = false;
      });

      this.state.cards[selectedIndex].selected = true;

      this.setState({
        cards: this.state.cards,
        hasSelection: true
      })
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>{this.state.action}</div>
        <h2>Lost Cities</h2>
          <div>
            <p><strong>Player One:</strong> {this.state.playerOne.name}</p>
            <LostCitiesPlayerDeck
              cards={this.state.playerOne.cards}
              selectCard={this.selectCard} />

            <p><strong>Player Two:</strong> {this.state.playerTwo.name}</p>
            <LostCitiesPlayerDeck
              cards={this.state.playerTwo.cards}
              selectCard={this.selectCard} />
          </div>

        <h4>Remaining Deck ({this.state.deck.length})</h4>
          <ul className="lost-cities__card-wrapper">
            <li className="lost-cities__card lost-cities__card--front"></li>
          </ul>
      </div>
    )
  }
}

export default LostCities
