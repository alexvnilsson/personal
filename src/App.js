import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { store } from "./store";

import navigation from "./services/cms/navigation";

import RestoreScroll from "./Core/UI/RestoreScroll";

import Header from "./Core/UI/Components/Core/Header";
import Footer from "./Core/UI/Components/Core/Footer";

import PageRouter from "./components/page/router";

import Home from "./Pages/Home";
import Showcases from "./Pages/Showcases";
import Workflows from "./Pages/Workflows";

import _Array from "lodash/array";

// @TODO Implement https://github.com/maisano/react-router-transition

import client from "./services/cms/client";

export default class App extends React.Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    await navigation.getPages();
  }

  componentWillUnmount() {
    if (typeof this.uiStoreListener !== "undefined") {
      this.uiStoreListener();
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <RestoreScroll>
              <Header />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/showcases" component={Showcases} />
                <Route exact path="/workflows" component={Workflows} />

                <Route
                  path="/*"
                  render={(props) => <PageRouter props={{ route: props }} />}
                />
              </Switch>

              <Footer />
            </RestoreScroll>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}
