import React, { Component } from "react";
import classNames from "classnames";

import config from "../../../../Config";

import Icon from "Core/UI/Components/Icon";

export default class Footer extends Component {
  render() {
    const navItems = [
      {
        href: "https://github.com/alexvnilsson",
        target: "_blank",
        icon: "github",
      },
      {
        href: "https://www.linkedin.com/in/alexvnilsson",
        target: "_blank",
        icon: "linkedin",
      },
    ];

    return (
      <footer className="container app-footer footer-divider px-0">
        <div className="container footer-wrapper">
          <div className="px-0">
            &copy; {new Date().getFullYear()} Alexander V. Nilsson
          </div>

          <ul className="nav nav-footer ml-auto">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  className="nav-link link-icon"
                  href={item.href}
                  target={item.target || "_blank"}
                  rel="noreferrer noopener"
                >
                  <Icon
                    className={classNames("nav-icon")}
                    width={config.design.footer.icons.dimensions}
                  >
                    {item.icon}
                  </Icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    );
  }
}