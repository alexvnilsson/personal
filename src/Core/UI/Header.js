import React, { Component } from 'react';
import BrandLogo from 'Core/UI/BrandLogo';

export default class AppHeader extends Component {
  render() {
    return (
      <div className="app-header-container">
        <header className="app-header content">
          <div className="header-brand">
            <BrandLogo className="brand-logo"></BrandLogo>
            <h1 className="brand-name">Alex V. Nilsson</h1>
          </div>

          <ul className="header-right-nav">
            <li><a href="https://github.com/alexvnilsson" target="_blank"><img src="/assets/github-logo.svg" width="25px" /></a></li>
            <li><a href="https://www.linkedin.com/in/alexvnilsson/" target="_blank"><img src="/assets/linkedin-logo.svg" width="25px" /></a></li>
          </ul>
        </header>
      </div>
    );
  }
}