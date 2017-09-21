import React, { Component } from 'react';
import '../styles/App.css';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome!" />
        {this.props.children}
      </div>
    );
  }
}

export default App;
