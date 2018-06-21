import React, { Component } from 'react';
import BrandLogo from 'Core/UI/BrandLogo';
//import logo from 'brand-dark.svg';

export default class AppHeader extends Component {
    render() {
        return (
            <div className="app-header-container">
                <header className="app-header content">
                    <div className="header-brand">
                      <BrandLogo className="brand-logo"></BrandLogo>
                      {/* <img src={logo} className="brand-logo" alt="logo" /> */}
                      <h1 className="brand-name">Alex V. Nilsson</h1>
                    </div>

                    <ul className="header-right-nav">
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </header>
            </div>
        );
    }
}