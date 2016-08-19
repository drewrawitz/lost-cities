import React, { Component } from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import deckHelper from '../lib/helpers/deck';

class LostCitiesPlayerDeck extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let player = this.props.player
    let playersObj = this.props.players[player]
    let sortedPlayerObj = deckHelper.sortPlayersCards(playersObj.cards)

    let cardWrapperClasses = classNames(
      'lost-cities__card-wrapper',
      {'lost-cities__card-wrapper--has-selection': !_.isEmpty(playersObj.selected)}
    );

    return (
      <ul className={cardWrapperClasses}>
      {_.map(sortedPlayerObj, (obj) => {
        var classes = classNames(
          'lost-cities__card',
          obj.color + obj.card,
          {'lost-cities__card--is-selected': playersObj.selected.id === obj.id}
        );

        return <li key={obj.id} onClick={this.props.selectCard.bind(this, player, obj)} className={classes}></li>
      })}
      </ul>
    )
  }
}

export default LostCitiesPlayerDeck