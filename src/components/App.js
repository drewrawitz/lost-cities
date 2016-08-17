import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <h1>Lost Cities</h1>
    </header>
    <section>
      {children || 'Welcome to Lost Cities'}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
