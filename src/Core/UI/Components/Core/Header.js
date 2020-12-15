import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import config from "../../../../Config";

import { ReactComponent as BrandLogo } from "../../../../Assets/Brand/logotype.svg";

export default class Header extends Component {
  render() {
    const navItems = [
      {
        href: "/showcases",
        label: "Showcases",
      },
      {
        href: "/workflows",
        label: "Arbetssätt",
      },
    ];

    return (
      <header className="app-header container-fluid">
        <NavLink exact to="/" className="header-brand" activeClassName="active">
          <BrandLogo
            width={config.design.header.logo.dimensions}
            height={config.design.header.logo.dimensions}
          />
        </NavLink>

        <div className="header-divider"></div>

        <ul className="header-nav site-nav">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <NavLink
                exact
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
