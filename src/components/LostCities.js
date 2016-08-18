import React, { Component } from 'react';
import _ from 'underscore';
import deckHelper from '../lib/helpers/deck';
import LostCitiesPlayerDeck from './LostCitiesPlayerDeck';
import LostCitiesBoard from './LostCitiesBoard';

class LostCities extends Component {

  constructor(props) {
    super(props)

    this.state = {
      deck: []
    }
  }

  componentDidMount() {
    this.buildDeck()
  }

  buildDeck() {
    var deck = deckHelper.newShuffledDeck();
    this.props.updateDeck(deck);

    this.dealCards();
  }

  dealCards() {
    const STARTING_HAND = 8;

    const newDeck = this.props.deck.slice(STARTING_HAND * 2)
    const dealDeck = this.props.deck.slice(0, STARTING_HAND * 2)

    let playerOne = {}
    let playerTwo = {}

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

    let players = {playerOne, playerTwo}

    this.props.updateDeck(newDeck);
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
        <h2>Lost Cities</h2>
        <p><strong>Player Two:</strong> Haley</p>
        <LostCitiesPlayerDeck />

        <LostCitiesBoard {...this.props} />

          <p><strong>Player One:</strong> Drew</p>
          <LostCitiesPlayerDeck />
      </div>
    )
  }
}

export default LostCities
