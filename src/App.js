import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
      <small>Tutorial for Redux & React-redux</small>
        <Counter />
      </div>
    );
  }
}

export default App;
