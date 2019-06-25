import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { store } from "Core/UI/Store";

import AppHeader from "Core/UI/Header";

import Home from "Pages/Home";
import Portfolio from "Pages/Portfolio";
import TechnologyDetails from "Pages/TechnologyDetails";

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
        <div>
          <AppHeader />

          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/tech" component={TechnologyDetails} />
        </div>
      </Router>
    );
  }
}
