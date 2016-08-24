import React, { Component } from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class LostCitiesBoard extends Component {
  constructor(props) {
    super(props)
  }

  drawCard() {
    this.props.drawCard(this.props.turn, this.props.deck[0])
  }

  discardCard(color, card) {
    this.props.discard(this.props.turn, color, card)
  }

  render() {
    let discard = null
    let turn = this.props.turn
    let action = this.props.action
    let selected = (this.props.players[turn]) ? this.props.players[turn].selected : null

    if(!_.isEmpty(selected) || action === 'take') {
      let discardWrapperClasses = classNames(
        'lost-cities__discard-wrapper',
        (selected && selected.color) ? "lost-cities__discard-wrapper--" + selected.color : null,
        {'lost-cities__discard-wrapper--deck': action === 'take'}
      )

      let tooltip = (action === 'take') ? 'Pick up' : 'Discard'

      discard = (
        <ReactCSSTransitionGroup transitionName="transition--fade" transitionAppear={true} transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionAppearTimeout={300}>
          <div className={discardWrapperClasses}>
            <div className="lost-cities__tooltip-wrapper">
              <span className="lost-cities__tooltip">{tooltip}</span>
            </div>
            <div className="lost-cities__discard-highlight" onClick={(action === 'take') ? this.drawCard.bind(this) : this.discardCard.bind(this, selected.color, selected)}>
              <ul className="lost-cities__discard-pile"></ul>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      )
    }

    return (
      <div className="lost-cities__board-wrapper">
        <div className="lost-cities__deck">
          <div className="lost-cities__card lost-cities__card--front"></div>
          <div className="lost-cities__remaining">({this.props.deck.length})</div>
        </div>
        <div className="lost-cities__board">
          {discard}
        </div>
      </div>
    )
  }
}

export default LostCitiesBoard
