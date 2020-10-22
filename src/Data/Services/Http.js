import axios from "axios";

import config from "../../Config";

const http = axios.create({
  baseURL: config.cms.api.baseUrl,
});

export default http;
