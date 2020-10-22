import "./typedefs";
import { camelCase } from "camel-case";

const pluralize = require("pluralize");

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

const contentTypeMetadataPropertyKey = "__metadata__";
const contentTypeMetadataPropertyNames = {
  contentType: "contentType",
  contentTypePlural: "contentTypePlural",
  contentTypeStructure: "contentTypeStructure",
  ignoreContentTypePlural: "ignoreContentTypePlural",
};
const componentProtectedMetadataKeys = [
  contentTypeMetadataPropertyNames.contentType,
  contentTypeMetadataPropertyNames.contentTypePlural,
  contentTypeMetadataPropertyNames.contentTypeStructure,
];
const contentTypeTypeBaseContentTypeStructure = {
  id: DataTypes.Number,
  publishedAt: DataTypes.String,
  createdAt: DataTypes.String,
  updatedAt: DataTypes.String,
};

/**
 *
 * @param {string} propertyKey
 *
 * @returns {string}
 */
function formatDataPropertyKey(propertyKey) {
  return camelCase(propertyKey);
}

/**
 *
 * @param {ContentType} contentType
 * @param {string} propertyKey
 *
 * @returns {boolean}
 */
function isDataPropertyWithinConstraint(contentType, propertyKey) {
  const contentTypeContentTypeStructure = {
    ...contentTypeTypeBaseContentTypeStructure,
    ...contentType[contentTypeMetadataPropertyKey][
      contentTypeMetadataPropertyNames.contentTypeStructure
    ],
  };

  const hasKey =
    typeof contentTypeContentTypeStructure[
      formatDataPropertyKey(propertyKey)
    ] !== "undefined";

  return hasKey;
}

/**
 *
 * @param {ContentType} contentType
 * @param {object} data
 * @param {string} contentTypeName
 */
function hydrateComponent(contentType, data, contentTypeName) {
  const contentTypeData = {};

  const typeName = contentType.getContentType(false);

  Object.keys(data)
    .filter((key) => isDataPropertyWithinConstraint(contentType, key))
    .forEach((key) => {
      contentTypeData[formatDataPropertyKey(key)] = data[key];
    });

  if (data[typeName]) {
    Object.keys(data[typeName])
      .filter((key) => isDataPropertyWithinConstraint(contentType, key))
      .filter((key) => key !== "id")
      .forEach((key) => {
        contentTypeData[formatDataPropertyKey(key)] = data[typeName][key];
      });
  }

  Object.keys(contentTypeData).forEach((key) => {
    contentType[key] = contentTypeData[key];
  });

  if (typeof contentTypeName !== "undefined") {
    contentType.setContentType(contentTypeName);
  }
}

/**
 *
 * @param {string} contentType
 *
 * @returns {string}
 */
export function restifyContentType(contentType) {
  return (pluralize.isSingular(contentType)
    ? pluralize(contentType)
    : contentType
  ).toLowerCase();
}

/**
 * ContentType.
 *
 * @class
 * @public
 */
class ContentType {
  /**
   * Get content-type of ContentType.
   *
   * @public
   *
   * @param {boolean=true} [restify]
   *
   * @returns {string} Returns name of content-type.
   */
  getContentType(restify = true) {
    const _metadata = this[contentTypeMetadataPropertyKey];

    return restify
      ? restifyContentType(
          _metadata[contentTypeMetadataPropertyNames.contentTypePlural]
        )
      : _metadata[contentTypeMetadataPropertyNames.contentType];
  }

  /**
   *
   * @public
   *
   * @param {string} key
   *
   * @returns {ComponentMetadataProperty?} Returns value of metadata by specified key.
   */
  getMetadata(key) {
    return this[contentTypeMetadataPropertyKey][key];
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

    this[contentTypeMetadataPropertyKey][key] = value;
  }

  /**
   * Fill component with data.
   *
   * @param {object} data
   */
  hydrate(data) {
    hydrateComponent(this, data);
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
      !this[contentTypeMetadataPropertyKey][
        contentTypeMetadataPropertyNames.ignoreContentTypePlural
      ]
    ) {
      console.warn(
        `[Component#setContentType] Content-type "${contentType}" is not in singular form, will this work with the API? Disable this warning by setting "contentTypeNoSingularWarning" in the metadata of this Component.`
      );

      contentTypePlural = contentType;
    }

    this[contentTypeMetadataPropertyKey] = {
      ...this[contentTypeMetadataPropertyKey],
      contentType: contentType,
      contentTypePlural: contentTypePlural,
    };

    if (typeof contentTypeStructure !== "undefined") {
      this[contentTypeMetadataPropertyKey][
        contentTypeMetadataPropertyNames.contentTypeStructure
      ] = Object.assign(
        contentTypeTypeBaseContentTypeStructure,
        contentTypeStructure
      );
    }
  }

  /**
   *
   * @protected
   *
   * @param {string?} contentType
   * @param {ComponentMetadataObject?} contentTypeStructure
   */
  constructor(contentType, contentTypeStructure) {
    this[contentTypeMetadataPropertyKey] = {};

    if (typeof contentType !== "undefined") {
      this.registerContentType(contentType, contentTypeStructure || undefined);
    }

    /**
     * @type {(number | string)}
     */
    this.id = undefined;

    /**
     * @type {(Date | string)}
     */
    this.publishedAt = undefined;

    /**
     * @type {(Date | string)}
     */
    this.createdAt = undefined;

    /**
     * @type {(Date | string)}
     */
    this.updatedAt = undefined;
  }
}

export default ContentType;
