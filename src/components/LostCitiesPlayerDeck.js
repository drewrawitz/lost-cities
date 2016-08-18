import React, { Component } from 'react';
import _ from 'underscore';
import classNames from 'classnames';

class LostCitiesPlayerDeck extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cards: {},
      selected: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards !== this.state.cards) {
      this.setState({ cards: nextProps.cards}, function() {
        this.sortCards();
      });
    }
  }

  sortCards() {

  }

  render() {
    var cardWrapperClasses = classNames(
      'lost-cities__card-wrapper',
      {'lost-cities__card-wrapper--has-selection': !_.isEmpty(this.state.selected)}
    );

    return (
      <ul className={cardWrapperClasses}>
      {_.map(this.state.cards, (obj) => {
        var classes = classNames(
          'lost-cities__card',
          obj.color + obj.card,
          {'lost-cities__card--is-selected': obj.selected}
        );

        return <li key={obj.id} onClick={this.props.selectCard.bind(this, obj.id)} className={classes}></li>
      })}
      </ul>
    )
  }
}

export default LostCitiesPlayerDeck