import env from "dotenv";

/**
 * @typedef {Object} EnvObject
 *
 * @property {string} CMS_API_BASE_URL
 */

// const _env = env.config();

// if (_env.error) {
//   console.error(_env.error);
// } else if (_env.parsed) {
//   env = { ..._env.parsed };
// }

export default {
  isProd: process.env.NODE_ENV === "production",
};
