import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from 'Core/UI/Header';

import Home from 'Pages/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader></AppHeader>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}
