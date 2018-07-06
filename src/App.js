import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { store } from 'Core/UI/Store';

import AppHeader from 'Core/UI/Header';

import Home from 'Pages/Home';
import Portfolio from 'Pages/Portfolio';

// @TODO Implement https://github.com/maisano/react-router-transition

export default class App extends Component {  
  constructor() {
    super()

    this.colorTheme = '';
  }

  componentWillMount() {
    this.uiStoreListener = store.subscribe(() => {
      const state = store.getState(); 

      if (this.colorTheme !== state.colorTheme) {
        this.colorTheme = state.colorTheme;
        this.forceUpdate();
      }
    });
  }

  componentWillUnmount() {
    if (typeof this.uiStoreListener !== 'undefined') {
      this.uiStoreListener();
    }
  }
  
  render() {
    return (
      <Router basename="/personal">
        <div className={"content-container " + this.colorTheme}>
          <AppHeader></AppHeader>

          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}
