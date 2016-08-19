import React, { Component } from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import deckHelper from '../lib/helpers/deck';

const ERROR_MESSAGE = 'Please wait your turn.';

class LostCitiesPlayerDeck extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: null
    }
  }

  waitTurn() {
    this.setState({ error: ERROR_MESSAGE }, () => {
    })
  }

  render() {
    let player = this.props.player
    let playersObj = this.props.players[player]
    let sortedPlayerObj = deckHelper.sortPlayersCards(playersObj.cards)

    let cardWrapperClasses = classNames(
      'lost-cities__card-list',
      {'lost-cities__card-list--has-selection': !_.isEmpty(playersObj.selected)}
    );

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = <div className="c-fixed-alert c-fixed-alert--error">{this.state.error}</div>
    }

    return (
      <div className="lost-cities__card-wrapper">
        {errorMessage}
        <ul className={cardWrapperClasses}>
        {_.map(sortedPlayerObj, (obj) => {
          var classes = classNames(
            'lost-cities__card',
            obj.color + obj.card,
            {'lost-cities__card--is-selected': playersObj.selected.id === obj.id},
            {'lost-cities__card--disabled': this.props.turn !== player}
          );

          return <li key={obj.id} onClick={(this.props.turn === player) ? this.props.selectCard.bind(this, player, obj) : this.waitTurn.bind(this)} className={classes}></li>
        })}
        </ul>
      </div>
    )
  }
}

export default LostCitiesPlayerDeck