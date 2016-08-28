import React, { Component } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class LostCitiesExpeditions extends Component {

  constructor(props) {
    super(props)
  }

  startExpedition() {
    console.log('starting expedition')
  }

  render() {
    let selectedColor = this.props.players[this.props.turn].selected.color

    let placeCard = (
        <ReactCSSTransitionGroup transitionName="transition--fade" transitionAppear={true} transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionAppearTimeout={300}>
          <div className="lost-cities__expedition-highlight">
            <div className="lost-cities__highlight" onClick={this.startExpedition}>
              <div className="lost-cities__tooltip-wrapper">
                <span className="lost-cities__tooltip">Place Card</span>
              </div>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      )

    return (
      <div className="lost-cities__expeditions-wrapper">
        <div className="lost-cities__expeditions lost-cities__expeditions--yellow">
          {(selectedColor === 'yellow') ? placeCard : null}
          <ul className="lost-cities__expedition-pile">
            <li className="lost-cities__card lost-cities__card--pile yellow2"></li>
            <li className="lost-cities__card lost-cities__card--pile yellow3"></li>
            <li className="lost-cities__card lost-cities__card--pile yellow4"></li>
          </ul>
        </div>
        <div className="lost-cities__expeditions lost-cities__expeditions--blue">
          {(selectedColor === 'blue') ? placeCard : null}
          <ul className="lost-cities__expedition-pile"></ul>
        </div>
        <div className="lost-cities__expeditions lost-cities__expeditions--white">
          {(selectedColor === 'white') ? placeCard : null}
          <ul className="lost-cities__expedition-pile"></ul>
        </div>
        <div className="lost-cities__expeditions lost-cities__expeditions--green">
          {(selectedColor === 'green') ? placeCard : null}
          <ul className="lost-cities__expedition-pile"></ul>
        </div>
        <div className="lost-cities__expeditions lost-cities__expeditions--red">
          {(selectedColor === 'red') ? placeCard : null}
          <ul className="lost-cities__expedition-pile"></ul>
        </div>
      </div>
    )
  }
}

export default LostCitiesExpeditions
