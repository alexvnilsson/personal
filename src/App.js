import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "Core/UI/Store";

import RestoreScroll from "Core/UI/RestoreScroll";

import AppHeader from "Core/UI/AppHeader";
import AppFooter from "Core/UI/AppFooter";

import Home from "Pages/Home";
import Portfolio from "Pages/Portfolio";
import Toolbox from "Pages/Toolbox";

// @TODO Implement https://github.com/maisano/react-router-transition

export default class App extends Component {
  constructor() {
    super();

    this.colorTheme = {
      body: "",
      header: "",
    };
  }

  componentWillMount() {
    // this.uiStoreListener = store.subscribe(() => {
    //   const state = store.getState();
    //   if (
    //     this.colorTheme.body !== state.colorTheme.body ||
    //     !this.colorTheme ||
    //     !state.colorTheme
    //   ) {
    //     if (typeof state.colorTheme.body !== "undefined") {
    //       document.body.classList.add(state.colorTheme.body);
    //       if (this.colorTheme.body.length > 0) {
    //         document.body.classList.remove(this.colorTheme.body);
    //       }
    //     }
    //     this.colorTheme = state.colorTheme;
    //   }
    // });
  }

  componentWillUnmount() {
    if (typeof this.uiStoreListener !== "undefined") {
      this.uiStoreListener();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <RestoreScroll>
            <AppHeader />

            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/toolbox" component={Toolbox} />

            <AppFooter />
          </RestoreScroll>
        </Router>
      </Provider>
    );
  }
}
