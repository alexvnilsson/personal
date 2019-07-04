import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { store } from "Core/UI/Store";

import RestoreScroll from "Core/UI/RestoreScroll";

import AppHeader from "Core/UI/Header";

import Home from "Pages/Home";
import Portfolio from "Pages/Portfolio";
import Toolbox from "Pages/Toolbox";

// @TODO Implement https://github.com/maisano/react-router-transition

export default class App extends Component {
  constructor() {
    super();

    this.colorTheme = "";
  }

  componentWillMount() {
    this.uiStoreListener = store.subscribe(() => {
      const state = store.getState();

      if (this.colorTheme !== state.colorTheme) {
        document.body.classList.add(state.colorTheme);

        if (this.colorTheme) {
          document.body.classList.remove(this.colorTheme);
        }

        this.colorTheme = state.colorTheme;
      }
    });
  }

  componentWillUnmount() {
    if (typeof this.uiStoreListener !== "undefined") {
      this.uiStoreListener();
    }
  }

  render() {
    return (
      <Router>
        <RestoreScroll>
          <AppHeader />

          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/toolbox" component={Toolbox} />
        </RestoreScroll>
      </Router>
    );
  }
}
