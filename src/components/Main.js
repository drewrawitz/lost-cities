import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1>Lost Cities</h1>
          <Link to="/">Home</Link>
          <Link to="/game">Game</Link>
        </header>
        <section>
          { React.cloneElement(this.props.children, this.props) }
        </section>
      </div>
    );
  }
});

export default Main;
