import React, { Component } from 'react';
import _ from 'underscore';
import LostCitiesPlayerDeck from './LostCitiesPlayerDeck';
import LostCitiesBoard from './LostCitiesBoard';
import classNames from 'classnames';
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
  }

  render() {
    let alert = null;
    if(this.props.alert) {
      alert = <Alert {...this.props} />
    }

    let action = null;
    let player = null;

    if(this.props.turn) {
      player = this.props.players[this.props.turn].name
    }

    if(this.props.action === 'place') {
      action = helpers.messages.PLACE_MESSAGE
    } else if(this.props.action === 'take') {
      action = helpers.messages.TAKE_MESSAGE
    }

    /* Class Names */
    let playerOneClasses = classNames(
      'lost-cities__player',
      {'lost-cities__player--is-active': this.props.turn === 'playerOne'}
    )

    let playerTwoClasses = classNames(
      'lost-cities__player',
      {'lost-cities__player--is-active': this.props.turn === 'playerTwo'}
    )

    return (
      <div className="container">
        {alert}
        <div className="lost-cities__action">{player} {action}</div>
        <h2>Lost Cities</h2>
        <span className={playerTwoClasses}>
          <strong>Player Two:</strong> {this.props.players['playerTwo'].name} ({this.props.players['playerTwo'].score})
        </span>
        <LostCitiesPlayerDeck
          {...this.props}
          player="playerTwo" />

        <LostCitiesBoard {...this.props} />

          <span className={playerOneClasses}>
            <strong>Player One:</strong> {this.props.players['playerOne'].name} ({this.props.players['playerOne'].score})
          </span>
          <LostCitiesPlayerDeck
            {...this.props}
            player="playerOne" />
      </div>
    )
  }
}

export default LostCities
