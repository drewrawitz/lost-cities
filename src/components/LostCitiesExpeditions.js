import React, { Component } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from 'classnames';
import _ from 'underscore';

class LostCitiesExpeditions extends Component {

  constructor(props) {
    super(props)
  }

  startExpedition(player, card) {
    this.props.expedition(player, card)
  }

  render() {
    let self = this
    let turn = this.props.turn
    let selected = (this.props.players[turn]) ? this.props.players[turn].selected : null
    let colors = ['yellow', 'blue', 'white', 'green', 'red']
    let markupArray = []
    let markup = null

    let placeCard = (
        <ReactCSSTransitionGroup transitionName="transition--fade" transitionAppear={true} transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionAppearTimeout={300}>
          <div className="lost-cities__expedition-highlight">
            <div className="lost-cities__highlight" onClick={this.startExpedition.bind(this, turn, selected)}>
              <div className="lost-cities__tooltip-wrapper">
                <span className="lost-cities__tooltip">Place Card</span>
              </div>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      )

      _.each(colors, function(color) {
        let highestCard = {}
        let expeditionCards = []
        let expeditionClasses = classNames(
          'lost-cities__expeditions',
          'lost-cities__expeditions--' + color
        );
        const cards = self.props.players[turn].expeditions[color].cards
        highestCard = (cards.length) ? cards[cards.length - 1].card : 0

        markup = (
          <div key={color} className={expeditionClasses}>
            {(selected.color === color && parseInt(selected.card) >= highestCard) ? placeCard : null}
            <ul className="lost-cities__expedition-pile">
              {_.map(self.props.players[turn].expeditions[color].cards, (obj) => {
                let classes = classNames(
                  'lost-cities__card',
                  'lost-cities__card--pile',
                  obj.color + obj.card
                );
                expeditionCards.push(<li key={obj.id} className={classes}></li>)
              })}
              {expeditionCards}
            </ul>
          </div>
        )
        markupArray.push(markup)
        })
    return (
      <div className="lost-cities__expeditions-wrapper">
        {markupArray}
      </div>
    )
  }
}

export default LostCitiesExpeditions
