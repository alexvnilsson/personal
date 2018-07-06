import React, { Component } from 'react';

import { store, actions } from 'Core/UI/Store';

export default class Portfolio extends Component {
  componentWillMount() {
    store.dispatch(actions.setColorTheme('light'));
  }

  render() {
   return (
      <div className="back-light">
        <div className="content">
          <h1>Oops!</h1>

          <h2>Har inte hunnit skapa innehållet på denna sida ännu.</h2>
        </div>
      </div>
    );
  }
}