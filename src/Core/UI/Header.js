import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { store } from 'Core/UI/Store';

import BrandLogo from 'Core/UI/BrandLogo';
import Icon from 'Core/UI/Components/Icon';

export default class AppHeader extends Component {
  constructor() {
    super();

    this.iconFill = '';
  }

  componentWillMount() {
    this.uiStoreListener = store.subscribe(() => {
      const state = store.getState();

      this.iconFill = state.colorTheme === 'dark' ? '#fff' : '#000';

      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (typeof this.uiStoreListener !== 'undefined') {
      this.uiStoreListener();
    }
  }

  render() {
    return (
      <div className="app-header-container">
        <header className="app-header content">
          <Link to="/" className="header-brand">
            <BrandLogo className="brand-logo"></BrandLogo>
            <h1 className="brand-name">Alex V. Nilsson</h1>
          </Link>

          <ul className="header-right-nav">
            <li><a href="https://github.com/alexvnilsson" target="_blank" rel="noreferrer noopener"><Icon fill={this.iconFill} width="25px">github</Icon></a></li>
            <li><a href="https://www.linkedin.com/in/alexvnilsson/" target="_blank" rel="noreferrer noopener"><Icon fill={this.iconFill} width="25px">linkedin</Icon></a></li>
            {/* <li><a href="https://github.com/alexvnilsson" target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + "/assets/github-logo.svg"} alt="Github" width="25px" /></a></li>
            <li><a href="https://www.linkedin.com/in/alexvnilsson/" target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + "/assets/linkedin-logo.svg"} alt="LinkedIn" width="25px" /></a></li> */}
          </ul>
        </header>
      </div>
    );
  }
}