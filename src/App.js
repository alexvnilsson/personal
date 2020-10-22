import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "Core/UI/Store";

import RestoreScroll from "Core/UI/RestoreScroll";

import Header from "Core/UI/Components/Core/Header";
import Footer from "Core/UI/Components/Core/Footer";

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
            <Header />

            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/toolbox" component={Toolbox} />

            <Footer />
          </RestoreScroll>
        </Router>
      </Provider>
    );
  }
}
