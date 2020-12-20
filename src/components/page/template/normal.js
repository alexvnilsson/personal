import React from "react";

import PageTemplate from "./base";

//
// Content Parts
//
import ContentContainer from "../parts/content/container";
import navigation from "../../../services/cms/navigation";

/**
 * @typedef {Object} PageContentContainerType
 * @property {string} content
 */

export default class PageTemplateNormal extends PageTemplate {
  constructor() {
    super();

    this.state = {
      breadcrumbs: null,
    };
  }

  async componentDidMount() {
    this.setState({
      breadcrumbs: await this.getBreadcrumbs(),
    });
  }

  async getBreadcrumbs() {
    if (this.props.parents) {
      const _pages = await navigation.resolveId(this.props.parents);
      console.log(_pages);

      return (
        <nav
          aria-label="breadcrumb"
          style={{
            "--bs-breadcrumb-divider":
              "url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);",
          }}
        >
          <ol className="breadcrumb">
            {_pages.map((p, i) => (
              <li className="breadcrumb-item" key={i}>
                {p.title}
              </li>
            ))}

            <li className="breadcrumb-item active">{this.props.title}</li>
          </ol>
        </nav>
      );
    }

    return null;
  }

  render() {
    return (
      <div className="page">
        {this.state?.breadcrumbs && this.state.breadcrumbs}
        <div className="cover"></div>

        {this.props?.content &&
          this.getContentContainers().map((cc, i) => (
            <ContentContainer key={i}>{cc.content}</ContentContainer>
          ))}
      </div>
    );
  }
}

PageTemplateNormal.templateName = "normal";
