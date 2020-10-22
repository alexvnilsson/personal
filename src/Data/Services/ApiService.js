import "../typedefs";

import http from "./Http";

import { restifyContentType } from "../ContentType";
import Education, { EducationMetadata } from "../Collection/Education";
import Experience, { ExperienceMetadata } from "../Collection/Experience";

/**
 *
 * @param {ComponentMetadataConst} metadata
 */
function makeUrl(metadata) {
  return `/${restifyContentType(metadata.contentType)}`;
}

class ApiService {
  /**
   *
   * @returns {Promise<Array<Experience>>}
   */
  getExperiences() {
    return new Promise((resolve, reject) => {
      const url = makeUrl(ExperienceMetadata);
      const collection = [];

      console.log(`[ApiService#getExperiences] Fetching "${url}"...`);

      http
        .request({
          url: url,
          method: "get",
        })
        .then((response) => {
          /**
           * @type {Array<Experience>}
           */
          const collectionData = response.data;

          collectionData.forEach((e) => {
            collection.push(new Experience(e));
          });

          return resolve(collection);
        })
        .catch((e) => reject(e));
    });
  }

  /**
   *
   * @returns {Promise<Array<Education>>}
   */
  getEducations() {
    return new Promise((resolve, reject) => {
      const url = makeUrl(EducationMetadata);
      const collection = [];

      console.log(`[ApiService#getEducations] Fetching "${url}"...`);

      http
        .request({
          url: url,
          method: "get",
        })
        .then((response) => {
          /**
           * @type {Array<Education>}
           */
          const collectionData = response.data;

          collectionData.forEach((e) => {
            collection.push(new Education(e));
          });

          return resolve(collection);
        })
        .catch((e) => reject(e));
    });
  }
}

const apiService = new ApiService();

export default apiService;
