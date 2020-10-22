import ContentType, { DataTypes } from "../ContentType";

/**
 * @type {ComponentMetadataConst}
 */
export const EducationMetadata = {
  contentType: "Education",
};

/**
 * Education.
 *
 * @class
 * @public
 */
export default class Education extends ContentType {
  /**
   *
   * @public
   * @constructor
   *
   * @param {object} data
   */
  constructor(data) {
    super(EducationMetadata.contentType, {
      educator: DataTypes.String,
      field: DataTypes.String,
      summary: DataTypes.String,
      periodStart: DataTypes.String,
      periodEnd: DataTypes.String,
    });

    /**
     * @type {string}
     */
    this.educator = undefined;

    /**
     * @type {string}
     */
    this.field = undefined;

    /**
     * @type {string}
     */
    this.summary = undefined;

    /**
     * @type {Date}
     */
    this.periodStart = undefined;

    /**
     * @type {Date}
     */
    this.periodEnd = undefined;

    this.hydrate(data);
  }
}
