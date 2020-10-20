import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import Config from "Core/Config";
import { ReactComponent as BrandLogo } from "Assets/Brand/logotype.svg";

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
          {/* <img src={BrandLogo} alt="Logotyp" className="brand-logo-image" /> */}
          <BrandLogo
            width={Config.Design.Header.Logo.Dimensions}
            height={Config.Design.Header.Logo.Dimensions}
          />
        </Link>

        <ul className="header-nav ml-5 site-nav">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <NavLink
                to={item.href}
                className="nav-link"
                activeClassName="active"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}
