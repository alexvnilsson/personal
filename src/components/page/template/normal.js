import React from "react";

import PageTemplate from "./base";

//
// Content Parts
//
import ContentContainer from "../parts/content/container";
import navigation from "../../../services/cms/navigation";
import { Link } from "react-router-dom";

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
      const _pages = await navigation.resolveManyById(this.props.parents);

      const _pagesWithUrls = await Promise.all(
        _pages.map(async (p) =>
          Object.assign(p, {
            url: await this.createLinkToPage(p),
          })
        )
      );

      return (
        <nav
          aria-label="breadcrumb"
          style={{
            "--bs-breadcrumb-divider": "'>'",
          }}
        >
          <ol className="breadcrumb">
            {_pagesWithUrls.map((p, i) => (
              <li className="breadcrumb-item" key={i}>
                <Link to={p.url}>{p.title}</Link>
              </li>
            ))}

            <li className="breadcrumb-item active" aria-current="page">
              {this.props.title}
            </li>
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
