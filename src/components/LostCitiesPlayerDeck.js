import React, { Component } from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import helpers from '../lib/helpers';

class LostCitiesPlayerDeck extends Component {

  constructor(props) {
    super(props)
  }

  selectCard(player, obj) {
    switch(this.props.action) {
      case "place":
        return this.props.selectCard(player, obj)
      case "take":
        if(!this.props.alert)
          return this.props.updateAlert('error', 'You' + helpers.messages.TAKE_MESSAGE)
      default:
        return
    }
  }

  waitTurn() {
    // if no alert is present, show the error message
    if(!this.props.alert) {
      this.props.updateAlert('error', 'Please wait your turn.')
    }
  }

  render() {
    let player = this.props.player
    let playersObj = this.props.players[player]
    let sortedPlayerObj = helpers.deck.sortPlayersCards(playersObj.cards)

    let cardWrapperClasses = classNames(
      'lost-cities__card-list',
      {'lost-cities__card-list--has-selection': !_.isEmpty(playersObj.selected)}
    );

    return (
      <div className="lost-cities__card-wrapper">
        <ul className={cardWrapperClasses}>
        {_.map(sortedPlayerObj, (obj) => {
          var classes = classNames(
            'lost-cities__card',
            obj.color + obj.card,
            {'lost-cities__card--is-selected': playersObj.selected.id === obj.id},
            {'lost-cities__card--disabled': this.props.turn !== player || this.props.action !== 'place'}
          );

          return <li key={obj.id} onClick={(this.props.turn === player) ? this.selectCard.bind(this, player, obj) : this.waitTurn.bind(this)} className={classes}></li>
        })}
        </ul>
      </div>
    )
  }
}

export default LostCitiesPlayerDeck
