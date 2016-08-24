import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1>Lost Cities</h1>
        </header>
        <section>
          { React.cloneElement(this.props.children, this.props) }
        </section>
      </div>
    );
  }
});

export default Main;
