import React, { Component } from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import deckHelper from '../lib/helpers/deck';

class LostCitiesPlayerDeck extends Component {

  constructor(props) {
    super(props)
  }

  waitTurn() {
    const ERROR_MESSAGE = 'Please wait your turn.';

    this.props.updateAlertCallback('error', ERROR_MESSAGE)
  }

  render() {
    let player = this.props.player
    let playersObj = this.props.players[player]
    let sortedPlayerObj = deckHelper.sortPlayersCards(playersObj.cards)

    let cardWrapperClasses = classNames(
      'lost-cities__card-list',
      {'lost-cities__card-list--has-selection': !_.isEmpty(playersObj.selected)}
    );

    let alertMessage = null;
    let alertClasses = classNames(
      'c-fixed-alert',
      {'c-fixed-alert--error': this.props.alert && this.props.alert.type === 'error'}
    );

    if(this.props.alert) {
      alertMessage = <div className={alertClasses}>{this.props.alert.message}</div>
    }

    return (
      <div className="lost-cities__card-wrapper">
        {alertMessage}
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