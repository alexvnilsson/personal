import React from "react";

import { gql, useQuery } from "@apollo/client";

import cmsService from "../../../services/cms";

import PageTemplateNormal from "../template/normal";

export default class PageRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      pageInSitemap: null,
      loading: true,
      isError: false,
      isPageNotFound: false,
      errorMessage: null,
      path: document.location.pathname,
    };
    this.sitemap = null;

    console.log(this.state.path);
  }

  //required when using the react-router-dom, since it thinks each page is the same component/content, we need todo some logic here
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.path !== document.location.pathname) {
      return {
        page: null,
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
      const { data } = await cmsService.query({
        query: gql(`
        query {
          pages(where: {path: "${this.state.path}"}) {
            id,
            title { text, showOnPage },
            template,
            parent { id, title { text } },
            cover { backgroundColor, shapeImage {url}},
            containers { content }
          }
        }`),
      });
      console.log(data);
      if (data.pages.length) {
        const page = data.pages[0];
        console.log(page);
        this.setPage(page, undefined);
      } else {
        this.pageNotFound();
      }
    } catch (err) {
      console.error(err);
    }
  }

  setPage = (page, pageInSitemap) => {
    this.setState({
      page: page,
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
      //HACK: need a proper reference name for page templates
      const template = this.state.page.template
        .toLowerCase()
        .replace(/[^0-9a-zA-Z]/g, "");
      console.log(template);

      switch (template) {
        case "normal":
          return <PageTemplateNormal title={this.state.page.title} />;
        default:
          return null;
      }

      if (template === "normal") {
      }
    }
  };

  render() {
    const renderPageTemplate = this.renderTemplate();

    return <div>{renderPageTemplate}</div>;
  }
}
