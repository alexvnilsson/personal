import React, { Component } from 'react';

import { store, actions } from 'Core/UI/Store';

export default class Portfolio extends Component {
  componentWillMount() {
    store.dispatch(actions.setColorTheme('light'));
  }

  render() {
   return (
      <div className="back-light">
        <div className="content text-dark">
          <h1>Min portfölj</h1>

          <p>Här samlar jag mina tidigare projekt som kan vara av intresse.</p>

          <div className="margin-top-2 text-align-center">
            <div>
              <img src={process.env.PUBLIC_URL + "/assets/3p/comdocrm.png"} alt="ComdoCRM logo" width="48px" />
              <h4 className="margin-y-0">ComdoCRM</h4>

              <p className="margin-y-tiny text-align-center">
                <a className="button small no-shadow" href="https://github.com/alexvnilsson/comdocrm-app" target="_blank" rel="noopener noreferrer">Source code | GitHub</a>
              </p>

              <p className="margin-top-2">
                En webbapplikation som under NetCommando skulle säljas som ett verktyg för kundrelationshantering och säljstöd.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}