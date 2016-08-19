import React, { Component } from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import deckHelper from '../lib/helpers/deck';

class LostCitiesPlayerDeck extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    let player = this.props.player
    let playersObj = this.props.players[player]
    let sortedPlayerObj = deckHelper.sortPlayersCards(playersObj.cards)

    let cardWrapperClasses = classNames(
      'lost-cities__card-wrapper',
      {'lost-cities__card-wrapper--has-selection': false}
    );

    return (
      <ul className={cardWrapperClasses}>
      {_.map(sortedPlayerObj, (obj) => {
        var classes = classNames(
          'lost-cities__card',
          obj.color + obj.card,
          {'lost-cities__card--is-selected': obj.selected}
        );

        return <li key={obj.id} className={classes}></li>
      })}
      </ul>
    )
  }
}

export default LostCitiesPlayerDeck