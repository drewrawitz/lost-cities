import React, { Component } from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class LostCitiesBoard extends Component {
  constructor(props) {
    super(props)

    this.discardCard = this.discardCard.bind(this)

    this.state = {
      selected: {}
    }
  }

  discardCard() {
    // card has been discarded, we now need to take a card from the board
    this.props.updateAction('take')
  }

  render() {
    let discard = null
    let turn = this.props.turn
    let selected = (this.props.players[turn]) ? this.props.players[turn].selected : null

    if(!_.isEmpty(selected)) {
      let discardWrapperClasses = classNames(
        'lost-cities__discard-wrapper',
        'lost-cities__discard-wrapper--' + selected.color
      )

      discard = (
        <ReactCSSTransitionGroup transitionName="transition--fade" transitionAppear={true} transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionAppearTimeout={300}>
          <div className={discardWrapperClasses}>
            <div className="lost-cities__tooltip-wrapper">
              <span className="lost-cities__tooltip">Discard</span>
            </div>
            <div className="lost-cities__discard-highlight" onClick={this.discardCard}>
              <ul className="lost-cities__discard-pile">

              </ul>
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
