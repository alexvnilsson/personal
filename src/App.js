import React, { Component } from 'react';
import AppHeader from './App/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>

        <div className="content">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
