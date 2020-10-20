import Component, { DataTypes } from "../Component";

export const meta = {
  contentType: "experience",
};

/**
 * Expirience.
 *
 * @class
 * @public
 */
export default class Experience extends Component {
  /**
   *
   * @public
   * @constructor
   *
   * @param {Experience} data
   */
  constructor(data) {
    super(data, "experience", {
      organisation: DataTypes.String,
      jobTitle: DataTypes.String,
      summary: DataTypes.String,
      periodStart: DataTypes.Date,
      periodEnd: DataTypes.Date,
    });

    /**
     * @type {string}
     */
    this.organisation = undefined;

    /**
     * @type {string}
     */
    this.jobTitle = undefined;

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
  }
}
