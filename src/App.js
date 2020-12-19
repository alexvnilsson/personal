import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { store } from "./Core/UI/Store";

import { gql, useQuery } from "@apollo/client";

import RestoreScroll from "./Core/UI/RestoreScroll";

import Header from "./Core/UI/Components/Core/Header";
import Navigation from "./components/core/navigation";
import Footer from "./Core/UI/Components/Core/Footer";

import PageRouter from "./components/page/router";

import Home from "./Pages/Home";
import Showcases from "./Pages/Showcases";
import Workflows from "./Pages/Workflows";

// @TODO Implement https://github.com/maisano/react-router-transition

import config from "./Config";

const client = new ApolloClient({
  uri: `${config.cms.api.baseUrl}/graphql`,
  cache: new InMemoryCache(),
});

export default class App extends Component {
  componentDidMount() {}

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
              <Navigation />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/showcases" component={Showcases} />
                <Route exact path="/workflows" component={Workflows} />

                <Route
                  path="*"
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
