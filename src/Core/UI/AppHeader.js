import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { store } from "Core/UI/Store";

import BrandLogo from "Core/UI/BrandLogo";
import Icon from "Core/UI/Components/Icon";

export default class AppHeader extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.uiStoreListener = store.subscribe(() => {
      const state = store.getState();

      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (typeof this.uiStoreListener !== "undefined") {
      this.uiStoreListener();
    }
  }

  render() {
    const { colorTheme } = store.getState();

    const navItems = [
      {
        href: "https://github.com/alexvnilsson",
        target: "_blank",
        icon: "github"
      },
      {
        href: "https://www.linkedin.com/in/alexvnilsson",
        target: "_blank",
        icon: "linkedin"
      }
    ];

    return (
      <div
        className={classNames(
          "app-header-container",
          colorTheme.header || "light"
        )}
      >
        <header className="app-header content">
          <Link to="/" className="header-brand">
            <BrandLogo className="brand-logo" />
            <h1 className="brand-name">Alex V. Nilsson</h1>
          </Link>

          <ul className="header-right-nav">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  className="nav-link"
                  href={item.href}
                  target={item.target || "_blank"}
                  rel="noreferrer noopener"
                >
                  <Icon className={classNames("nav-icon")} width="25px">
                    {item.icon}
                  </Icon>
                </a>
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
