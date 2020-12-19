import config from "../services/config";

export default {
  api: {
    baseUrl: config.isProd
      ? "https://api.alexvnilsson.se/personal/cms"
      : "http://localhost:3000",
  },
};
