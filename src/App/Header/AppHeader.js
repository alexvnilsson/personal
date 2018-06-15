import React, { Component } from 'react';
import logo from 'brand-dark.svg';

class AppHeader extends Component {
    render() {
        return (
            <div className="app-header-container">
                <header className="app-header content">
                    <div className="header-brand">
                        <img src={logo} className="brand-logo" alt="logo" />
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

export default AppHeader;