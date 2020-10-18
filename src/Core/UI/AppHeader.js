import React, { Component } from "react";
import { Link } from "react-router-dom";

import BrandLogo from "Assets/Brand/BrandDark.png";

export default class AppHeader extends Component {
  render() {
    const navItems = [
      {
        href: "/portfolio",
        label: "Portfölj",
      },
      {
        href: "/toolbox",
        label: "Verktygslåda",
      },
    ];

    return (
      <header className="app-header container">
        <Link to="/" className="header-brand">
          <img src={BrandLogo} alt="Logotyp" className="brand-logo-image" />
        </Link>

        <ul className="header-nav nav-right site-nav">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}
