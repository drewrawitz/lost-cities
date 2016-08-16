import React, { Component  } from 'react';
import _ from 'underscore';

class LostCitiesCard extends Component {

  render() {
    if (!this.props.data) return false;

    return (
      <ul className="lost-cities__card-wrapper">
      {_.map(this.props.data, (obj) =>
        <li className={"lost-cities__card " + obj.color + obj.card}></li>
      )}
      </ul>
    )
  }
}

export default LostCitiesCard