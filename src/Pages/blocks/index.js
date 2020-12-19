import React from "react";

import htmlParser from "html-react-parser";

/**
 * @type {Array<Promise<Block>>}
 */
const blocks = {};

/**
 *
 * @param {Block} block
 */
function _validateBlock(block) {}

function _isReferenceAPromise(ref) {
  if (typeof ref["then"] === "function") {
    return true;
  }

  return false;
}

/**
 *
 * @param {Promise<Block>} block
 */
function getBlockWrapper(block) {
  return new Promise((resolve, reject) => {
    if (_isReferenceAPromise(block)) {
      block.then((_b) => {
        const b = _b.default;
        // Validation here.

        resolve(b);
      });
    } else {
      // Validation here.

      resolve(block);
    }
  });
}

export function registerBuildingBlock(key, block) {
  if (typeof key !== "string") {
    throw new Error(`Expected first argument to be of type String.`);
  }

  if (typeof blocks[key] !== "undefined") {
    throw new Error(`Key duplication error.`);
  }

  if (typeof block === "undefined") {
    throw new Error(`Expected a Block.`);
  }

  blocks[key] = getBlockWrapper(block);
}

export function getBuildingBlock(key) {
  if (typeof blocks[key] === "undefined") {
    throw new Error(`Missing Block...`);
  }
}

/**
 * @typedef BlockOptions
 *
 * @property {string} name
 * @property {string} tag
 */
export const blockOptions = {
  name: undefined,
  tag: undefined,
};

/**
 * Class representing a page component to be used by HTML renderer from CMS.
 */
export class Block extends React.Component {
  /**
   * Consruct page component object from options.
   *
   * @constructor
   *
   * @param {BlockOptions} options
   */
  constructor(options) {
    super();

    options = Object.assign({}, options, blockOptions);

    this.name = options.name;
    this.tag = options.tag;
  }
}

export function bootstrap() {}

export default {
  /**
   * Add a React component from a synchronous/asynchronous module.
   *
   * @param {string} key
   * @param {(Promise<Block> | Block)} block
   */
  register(key, block) {
    if (typeof key !== "string") {
      throw new Error(`Expected first argument to be of type String.`);
    }

    if (typeof blocks[key] !== "undefined") {
      throw new Error(`Key duplication error.`);
    }

    if (typeof block === "undefined") {
      throw new Error(`Expected a Block.`);
    }

    blocks[key] = getBlockWrapper(block);
  },
  has(key) {
    return typeof blocks[key] !== "undefined";
  },
  /**
   *
   * @param {string} key
   *
   * @returns {Promise<Block>} Returns a Block in a Promise.
   */
  get(key) {
    if (!this.has(key)) {
      throw new Error(`Missing Block...`);
    }

    return new Promise((resolve, reject) => {
      blocks[key].then((b) => {
        resolve(b);
      });
    });

    // return blocks[key];
  },
  getNames() {
    return Object.getOwnPropertyNames(blocks);
  },
  html: {
    parse: htmlParser,
  },
};
