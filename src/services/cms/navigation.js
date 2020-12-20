import _ from "lodash";
import array from "lodash/array";
import Client, { gql, useQuery } from "./client";

/**
 * @typedef {Object} Page
 *
 * @property {string} id
 * @property {string} name
 * @property {string} title
 * @property {string} parent
 * @property {string} slug
 */

/**
 * State.
 */
const state = {
  pages: [],
};

/**
 *
 * @param {Page} page
 * @param {Array<Page>} tree
 * @param {Array<Page>} pages
 */
function traversePageParents(page, tree, pages) {
  if (!tree) {
    tree = [];
  }

  if (!page.parent) {
    return null;
  }

  const _p = pages.find((p) => p.id === page.parent);

  if (_p) {
    tree.push(_p.id);

    if (_p.parent) {
      return traversePageParents(_p, tree, pages);
    }
  }

  return _.reverse(tree);
}

export default {
  /**
   *
   * @returns {Promise<Array<Page>>}
   */
  async getPages() {
    if (state.pages.length > 0) {
      return state.pages;
    }

    try {
      const res = await Client.query({
        query: gql`
          query {
            pages {
              id
              title
              slug
              parent {
                id
                title
                slug
              }
            }
          }
        `,
      });

      const pages = res.data.pages.map((p) => {
        const pNew = { ...p };

        if (p.parent && p.parent.id) {
          pNew.parent = p.parent.id;
        }

        return pNew;
      });

      state.pages = _.uniqBy([...pages, ...state.pages], "id");

      return state.pages;
    } catch (e) {
      throw e;
    }
  },
  /**
   *
   * @param {string} id
   *
   * @returns {Page}
   */
  async resolveOneById(id) {
    if (!id) {
      throw new Error("Err");
    }

    const pages = await this.getPages();

    return pages.find((p) => p.id === id);
  },
  /**
   *
   * @param {Array<string>} id
   *
   * @returns {Promise<Array<Page>>}
   */
  async resolveManyById(id) {
    if (!id) {
      throw new Error("Err");
    }

    const pages = await this.getPages();

    if (Array.isArray(id)) {
      return id.map((i) => pages.find((p) => p.id === i));
    }
  },
  /**
   *
   * @param {Promise<string>} path
   */
  async resolvePath(path) {
    if (path.startsWith("/")) {
      path = path.substr(1, path.length);
    }

    const pages = await this.getPages();
    const _pages = [];

    const parts = path.split("/");
    const levelIds = [];

    parts.forEach((c, level) => {
      const page = pages.find((p) => p.slug === c);

      if (page) {
        if (!page.parent && level === 0) {
          levelIds[level] = page.id;

          _pages.push(page);
        } else {
          const prevLevel = levelIds[level - 1];

          if (prevLevel) {
            if (prevLevel === page.parent) {
              levelIds[level] = page.id;
              _pages.push(page);
            }
          }
        }
      }
    });

    return _.last(_pages);
  },
  /**
   *
   * @param {Page} page
   * @param {boolean} [includeTail=false]
   *
   * @returns {Promise<Array<string>>}
   */
  async getAllParents(page, includeTail) {
    if (!page.parent) {
      if (!includeTail) {
        return [];
      } else {
        return [page];
      }
    }

    const treeRoot = [];

    if (includeTail) {
      treeRoot.push(page);
    }

    const pages = await this.getPages();
    const tree = traversePageParents(page, treeRoot, pages);

    return tree;
  },
  /**
   *
   * @param {Page} page
   *
   * @returns {Promise<string>}
   */
  async createPageUrl(page) {
    const tree = await this.getAllParents(page, true);

    const urlParts = [];

    tree.forEach((page) => {
      if (page && page.slug) {
        urlParts.push(page.slug);
      }
    });

    var _url = urlParts.join("/");

    if (!_url.startsWith("/")) {
      _url = `/${_url}`;
    }

    return _url;
  },
};
