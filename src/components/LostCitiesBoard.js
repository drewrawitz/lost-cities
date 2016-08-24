import React, { Component } from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class LostCitiesBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markup: null,
      test: null
    }
  }

  drawCard() {
    this.props.drawCard(this.props.turn, this.props.deck[0])
  }

  discardCard(color, card) {
    this.props.discard(this.props.turn, color, card)
  }

  render() {
    let self = this
    let piles = ['deck', 'yellow', 'blue', 'white', 'green', 'red']
    let highlightMarkup = null
    let pileHighlight = null
    let deckHighlight = null
    let markupArray = []
    let turn = this.props.turn
    let action = this.props.action
    let selected = (this.props.players[turn]) ? this.props.players[turn].selected : null

    if(!_.isEmpty(selected) || action === 'take') {
      let tooltip = (action === 'take') ? 'Pick up' : 'Discard'

      _.each(piles, function(pile) {
        let discardPileClasses = classNames(
          'lost-cities__discard-wrapper',
          (pile) ? "lost-cities__discard-wrapper--" + pile: null
        )

        highlightMarkup = (
          <ReactCSSTransitionGroup transitionName="transition--fade" transitionAppear={true} transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionAppearTimeout={300}>
            <div className="lost-cities__discard-highlight" onClick={(action === 'take') ? self.drawCard.bind(self) : self.discardCard.bind(self, selected.color, selected)}>
              <div className="lost-cities__tooltip-wrapper">
                <span className="lost-cities__tooltip">{tooltip}</span>
              </div>
            </div>
          </ReactCSSTransitionGroup>
        )

        if(pile === selected.color) {
          pileHighlight = highlightMarkup
          deckHighlight = null
        } else if (pile === 'deck' && action === 'take') {
          deckHighlight = highlightMarkup
          pileHighlight = null
        } else {
          pileHighlight = null
          deckHighlight = null
        }

        let markup = (
          <div className={discardPileClasses} key={`discard-${pile}`}>
            {pileHighlight}
            {deckHighlight}
            <ul className="lost-cities__discard-pile"></ul>
          </div>
        )

        markupArray.push(markup)
      })
    }

    return (
      <div className="lost-cities__board-wrapper">
        <div className="lost-cities__deck">
          <div className="lost-cities__card lost-cities__card--front"></div>
          <div className="lost-cities__remaining">({this.props.deck.length})</div>
        </div>
        <div className="lost-cities__board">
          {_.each(markupArray, (markup) => {
            {markup}
          })}
        </div>
      </div>
    )
  }
}

export default LostCitiesBoard
