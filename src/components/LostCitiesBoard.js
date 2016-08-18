import React, { Component } from 'react';

class LostCitiesBoard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var discard = null;

    discard = <div className="lost-cities__discard-wrapper lost-cities__discard-wrapper--yellow">
      <div className="lost-cities__tooltip-wrapper">
        <span className="lost-cities__tooltip">Discard</span>
      </div>
      <div className="lost-cities__discard"></div>
    </div>;

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