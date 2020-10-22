import ContentType, { DataTypes } from "../ContentType";

/**
 * @type {ComponentMetadataConst}
 */
export const ExperienceMetadata = {
  contentType: "Experience",
};

/**
 * Experience.
 *
 * @class
 * @public
 */
export default class Experience extends ContentType {
  /**
   *
   * @public
   * @constructor
   *
   * @param {object} data
   */
  constructor(data) {
    super(ExperienceMetadata.contentType, {
      workPlace: DataTypes.String,
      workTitle: DataTypes.String,
      summary: DataTypes.String,
      periodStart: DataTypes.String,
      periodEnd: DataTypes.String,
    });

    /**
     * @type {string}
     */
    this.workPlace = undefined;

    /**
     * @type {string}
     */
    this.workTitle = undefined;

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
