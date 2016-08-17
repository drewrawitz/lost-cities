import React, { Component } from 'react';
import _ from 'underscore';
import LostCitiesPlayerDeck from './LostCitiesPlayerDeck';
import LostCitiesBoard from './LostCitiesBoard';

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
  }
}

class LostCities extends Component {

  constructor(props) {
    super(props)

    this.state = {
      playerOne: Game.playerOne,
      playerTwo: Game.playerTwo,
      action: null
    }
  }

  componentDidMount() {
      this.dealCards()
  }

  dealCards() {
    const newDeck = this.props.deck.slice(Game.STARTING_HAND * 2)
    const dealDeck = this.props.deck.slice(0, Game.STARTING_HAND * 2)
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
        this.setState({ selected: {} })

        return;
      }

      // make sure to remove any selected cards
      _.each(this.state.cards, function(cards) {
        cards.selected = false;
      });

      this.state.cards[selectedIndex].selected = true;

      this.setState({
        cards: this.state.cards,
        selected: this.state.cards[selectedIndex]
      })
  }

  render() {
    return (
      <div className="container">
        <div className="lost-cities__action">{this.state.action}</div>
        <h2>Lost Cities</h2>
        <p><strong>Player Two:</strong> {this.state.playerTwo.name}</p>
        <LostCitiesPlayerDeck
          cards={this.state.playerTwo.cards}
          selectCard={this.selectCard} />

          <LostCitiesBoard
            cards={this.state.deck}
            selected={this.state.selected} />

          <p><strong>Player One:</strong> {this.state.playerOne.name}</p>
          <LostCitiesPlayerDeck
            cards={this.state.playerOne.cards}
            selectCard={this.selectCard} />
      </div>
    )
  }
}

export default LostCities
