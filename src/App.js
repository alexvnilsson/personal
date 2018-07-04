import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from 'Core/UI/Header';

import Home from 'Pages/Home';
import Portfolio from 'Pages/Portfolio';

// @TODO Implement https://github.com/maisano/react-router-transition

export default class App extends Component {
  render() {
    return (
      <div>
        <Router basename="/personal">
          <div>
          <AppHeader></AppHeader>

            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
          </div>
        </Router>
      </div>
    );
  }
}
