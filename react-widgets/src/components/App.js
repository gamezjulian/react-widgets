import React, { Component } from 'react';
import '../styles/App.css';

import Header from './Header';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome!" />
        <Posts />
      </div>
    );
  }
}

export default App;
