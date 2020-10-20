const pluralize = require("pluralize");

/**
 * @typedef ComponentInstance
 *
 * @property {(number | string)}    id
 * @property {(Date | string)}      published_at
 * @property {(Date | string)}      created_at
 * @property {(Date | string)}      updated_at
 * @property {...any}
 */

/**
 * @typedef {(string | number | boolean | object)} ComponentMetadataProperty
 * @typedef {Object.<string, ComponentMetadataProperty>?} ComponentMetadataObject
 */

/**
 * @typedef {object} ComponentMetadata
 *
 * @property {string} contentType
 * @property {string} contentTypePlural
 * @property {Object.<string, ComponentMetadataProperty>} contentTypeStructure
 */

export const DataTypes = {
  Undefined: "undefined",
  Boolean: "boolean",
  Number: "number",
  String: "string",
  BigInt: "bigint",
  Symbol: "symbol",
  Object: "object",
  Function: "function",
  Date: "object",
};

const componentMetadataPropertyKey = "__metadata__";
const componentMetadataPropertyNames = {
  contentType: "contentType",
  contentTypePlural: "contentTypePlural",
  contentTypeStructure: "contentTypeStructure",
  ignoreContentTypePlural: "ignoreContentTypePlural",
};

/**
 *
 * @param {Component} component
 * @param {object} data
 */
function filterByStrucutre(component, data) {
  if (
    typeof component[componentMetadataPropertyKey][
      componentMetadataPropertyNames.contentTypeStructure
    ] === DataTypes.Undefined
  ) {
    return data;
  }

  data = Object.keys(data).filter((k) =>
    Object.keys(component[componentMetadataPropertyKey]).find((k2) => k === k2)
  );

  if (
    typeof component[componentMetadataPropertyKey][
      componentMetadataPropertyNames.contentTypeStructure
    ] !== "undefined"
  ) {
    const _contentTypeStructure =
      component[componentMetadataPropertyKey][
        componentMetadataPropertyNames.contentTypeStructure
      ];
    data = data.filter((k) => typeof data[k] === _contentTypeStructure[k]);
  }

  return data;
}

/**
 *
 * @param {Component} component
 * @param {object} data
 * @param {string} contentType
 */
function hydrateComponent(component, data, contentType) {
  Object.keys(filterByStrucutre(component, data)).forEach((key) => {
    component[key] = data[key];
  });

  if (typeof contentType !== "undefined") {
    component.setContentType(contentType);
  }
}

const componentProtectedMetadataKeys = [
  componentMetadataPropertyNames.contentType,
  componentMetadataPropertyNames.contentTypePlural,
  componentMetadataPropertyNames.contentTypeStructure,
];

/**
 * Component.
 *
 * @class
 * @public
 */
class Component {
  /**
   *
   * @public
   *
   * @param {string} key
   *
   * @returns {ComponentMetadataProperty?} Returns value of metadata by specified key.
   */
  getMetadata(key) {
    return this[componentMetadataPropertyKey][key];
  }

  /**
   *
   * @public
   *
   * @param {string} key
   * @param {ComponentMetadataProperty} value
   */
  setMetadata(key, value) {
    if (Object.keys(componentProtectedMetadataKeys).find((k) => k === key)) {
      throw new Error(
        `Callers from outside of Component may not set metadata key "${key}".`
      );
    }

    this[componentMetadataPropertyKey][key] = value;
  }

  /**
   * Register content type (with optional structure-constraints) of Component instance.
   *
   * @public
   *
   * @requires pluralize
   *
   * @param {string} contentType
   * @param {ComponentMetadataObject?} contentTypeStructure Structure with which hydraed data will be constrained to.
   */
  registerContentType(contentType, contentTypeStructure) {
    let contentTypePlural = undefined;

    if (pluralize.isSingular(contentType)) {
      contentTypePlural = pluralize(contentType);
    } else if (
      !this[componentMetadataPropertyKey][
        componentMetadataPropertyNames.ignoreContentTypePlural
      ]
    ) {
      console.warn(
        `[Component#setContentType] Content-type "${contentType}" is not in singular form, will this work with the API? Disable this warning by setting "contentTypeNoSingularWarning" in the metadata of this Component.`
      );

      contentTypePlural = contentType;
    }

    console.log(contentType, contentTypePlural);

    this[componentMetadataPropertyKey] = {
      ...this[componentMetadataPropertyKey],
      contentType: contentType,
      contentTypePlural: contentTypePlural,
    };

    if (typeof contentTypeStructure !== "undefined") {
      this[componentMetadataPropertyKey][
        componentMetadataPropertyNames.contentTypeStructure
      ] = contentTypeStructure;
    }
  }

  /**
   *
   * @protected
   *
   * @param {object} data
   * @param {string?} contentType
   * @param {ComponentMetadataObject?} contentTypeStructure
   */
  constructor(data, contentType, contentTypeStructure) {
    this[componentMetadataPropertyKey] = {};

    console.log(`[Component#constructor]`, contentType, contentTypeStructure);

    /**
     * @type {(number | string)}
     */
    this.id = undefined;

    /**
     * @type {(Date | string)}
     */
    this.published_at = undefined;

    /**
     * @type {(Date | string)}
     */
    this.created_at = undefined;

    /**
     * @type {(Date | string)}
     */
    this.updated_at = undefined;

    if (typeof contentType !== "undefined") {
      this.registerContentType(contentType, contentTypeStructure || undefined);
    }

    hydrateComponent(this, data);
  }
}

export default Component;
