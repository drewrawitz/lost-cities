import React, { Component } from 'react';
import _ from 'underscore';
import LostCitiesPlayerDeck from './LostCitiesPlayerDeck';
import LostCitiesBoard from './LostCitiesBoard';
import helpers from '../lib/helpers';
import Alert from './Alert';

class LostCities extends Component {

  constructor(props) {
    super(props)

    this.dealCards = this.dealCards.bind(this)
  }

  componentDidMount() {
    this.dealCards()
  }

  dealCards() {
    const STARTING_HAND = 8;

    const newDeck = this.props.deck.slice(STARTING_HAND * 2)
    const dealDeck = this.props.deck.slice(0, STARTING_HAND * 2)

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

    this.props.updatePlayersCards('playerOne', p1Cards);
    this.props.updatePlayersCards('playerTwo', p2Cards);
    this.props.updateDeck(newDeck);
    this.props.updateTurn(helpers.game.randomTurn())
  }

  render() {
    let alert = null;
    if(this.props.alert) {
      alert = <Alert {...this.props} />
    }

    return (
      <div className="container">
        {alert}
        <div className="lost-cities__action">Drew must place a card in an expedition or on the board</div>
        <h2>Lost Cities</h2>
        <p><strong>Player Two:</strong> Haley</p>
        <LostCitiesPlayerDeck
          {...this.props}
          player="playerTwo" />

        <LostCitiesBoard {...this.props} />

          <p><strong>Player One:</strong> Drew</p>
          <LostCitiesPlayerDeck
            {...this.props}
            player="playerOne" />
      </div>
    )
  }
}

export default LostCities
