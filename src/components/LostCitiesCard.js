import React, { Component  } from 'react';
import _ from 'underscore';

class LostCitiesCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cards: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.cards) {
      this.setState({ cards: nextProps.data }, function() {
        this.sortCards();
      });
    }
  }

  sortCards() {
    if(this.state.cards.length) {
        // custom sorting
        var cards = this.state.cards.sort((a, b) => {
          const colorOrder = ['yellow', 'blue', 'white', 'green', 'red'];

          const aColorIndex = colorOrder.indexOf( a.color );
          const bColorIndex = colorOrder.indexOf( b.color );

          if (aColorIndex === bColorIndex)
            return a.card - b.card;

          return aColorIndex - bColorIndex;
        });

        this.setState({ cards })
    }
  }

  render() {
    return (
      <ul className="lost-cities__card-wrapper">
      {_.map(this.state.cards, (obj) =>
        <li className={"lost-cities__card " + obj.color + obj.card}></li>
      )}
      </ul>
    )
  }
}

export default LostCitiesCard