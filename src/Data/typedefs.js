/**
 * @typedef ComponentMetadataConst
 *
 * @property {string} contentType
 */

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
