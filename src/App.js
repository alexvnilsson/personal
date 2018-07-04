import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import AppHeader from 'Core/UI/Header';

import Home from 'Pages/Home';
import Showcase from 'Pages/Showcase';

// @TODO Implement https://github.com/maisano/react-router-transition

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader></AppHeader>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/showcase" component={Showcase} />
          </div>
        </Router>
      </div>
    );
  }
}
