import React from "react";

import { gql, useQuery } from "@apollo/client";

import cmsService from "../../services/cms/client";
import navigation from "../../services/cms/navigation";

import PageTemplateNormal from "./template/normal";

export default class PageRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      pageParents: null,
      pageInSitemap: null,
      loading: true,
      isError: false,
      isPageNotFound: false,
      errorMessage: null,
      path: document.location.pathname,
    };
    this.sitemap = null;
  }

  //required when using the react-router-dom, since it thinks each page is the same component/content, we need todo some logic here
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.path !== document.location.pathname) {
      return {
        page: null,
        pageParents: null,
        pageInSitemap: null,
        loading: true,
        isError: false,
        isPageNotFound: false,
        errorMessage: null,
        path: document.location.pathname,
      };
    } else return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    //did the path change? If so, we need to re-route
    if (prevState.path !== document.location.pathname) {
      this.setState({
        page: null,
        pageParents: null,
        pageInSitemap: null,
        loading: true,
        isError: false,
        isPageNotFound: false,
        errorMessage: null,
        path: document.location.pathname,
      });

      await this.routePage();
    }
  }

  async componentDidMount() {
    await this.routePage();
  }

  async getSitemap(api) {
    if (this.sitemap != null) {
      //return the cached version of the sitemap if we can
      return Promise.resolve(this.sitemap);
    } else {
      //get the sitemap...
      this.sitemap = await api.getSitemapFlat({
        channelName: this.props.agility.config.channelName,
        languageCode: this.props.agility.config.languageCode,
      });

      // promise.then(sitemap => {
      //  this.sitemap = sitemap;
      //})
      return Promise.resolve(this.sitemap);
    }
  }

  async routePage() {
    try {
      const page = await navigation.resolvePath(this.state.path);

      const { data } = await cmsService.query({
        query: gql(`
        query {
          page(id: "${page.id}") {
            id,
            slug,
            title,
            template,
            parent { id, slug, title },
            content {
              __typename ... on ComponentContentPageCover {
                backgroundColor,
                shapeColor,
                shapeImage { url },
                headingText,
                headingColor
              },

              __typename ... on ComponentContentContainer {
                content
              }
            }
          }
        }`),
      });

      if (data.page) {
        const parents = await navigation.getAllParents(page);
        this.setPage(data.page, parents, undefined);
      } else {
        this.pageNotFound();
      }
    } catch (err) {
      console.error(err);
    }
  }

  setPage = (page, parents, pageInSitemap) => {
    this.setState({
      page: page,
      pageParents: parents,
      pageInSitemap: pageInSitemap,
      loading: false,
      isError: false,
      isPageNotFound: false,
      errorMessage: null,
    });
  };

  handleError = (msg, error) => {
    console.error(error);
    this.setState({
      page: null,
      pageParents: null,
      pageInSitemap: null,
      loading: false,
      isError: true,
      isPageNotFound: false,
      errorMessage: msg,
    });
    if (
      this.props.onPageRoutingError &&
      typeof this.props.onPageRoutingError === "function"
    ) {
      this.props.onPageRoutingError(msg, error);
    }
  };

  pageNotFound = () => {
    this.setState({
      page: null,
      pageParents: null,
      pageInSitemap: null,
      loading: false,
      isError: false,
      isPageNotFound: true,
      errorMessage: "page NOT found in sitemap :(",
    });
    if (
      this.props.onPageNotFound &&
      typeof this.props.onPageNotFound === "function"
    ) {
      this.props.onPageNotFound(this.state.errorMessage);
    }
  };

  renderTemplate = () => {
    if (this.state.page != null) {
      const page = this.state.page;

      //HACK: need a proper reference name for page templates
      const template = page.template.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");
      const props = {
        id: page.id,
        name: page.name,
        title: page.title,
        parents: this.state.pageParents,
        parent: page.parent,
        content: page.content,
      };

      switch (template) {
        case PageTemplateNormal.templateName:
          return <PageTemplateNormal {...props} />;
        default:
          return null;
      }
    }
  };

  render() {
    const renderPageTemplate = this.renderTemplate();

    return <div>{renderPageTemplate}</div>;
  }
}
