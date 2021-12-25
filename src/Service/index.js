const BASE_URL = "https://api.github.com";

const service = {
  getAllGistUrl: (username) => {
    return `${BASE_URL}/users/${username}/gists`;
  },
  getDetailGistUrl: (gistId) => {
    return `${BASE_URL}/gists/${gistId}`;
  },
};
export default service;
