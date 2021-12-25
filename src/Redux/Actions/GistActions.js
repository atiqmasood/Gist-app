import httpService from "../../Service/httpService";
import service from "../../Service/index";

export const LOAD_GIST_STARTED = "LOAD_GIST_STARTED";
export const LOAD_GIST_SUCCESS = "LOAD_GIST_SUCCESS";
export const LOAD_GIST_ERROR = "LOAD_GIST_ERROR";
// DETAIL
export const LOAD_DETAIL_STARTED = "LOAD_DETAIL_STARTED";
export const LOAD_DETAIL_SUCCESS = "LOAD_DETAIL_SUCCESS";
export const LOAD_DETAIL_ERROR = "LOAD_DETAIL_ERROR";

// get all gist for user
const loadAllGists = (username) => (dispatch) => {
  dispatch({ type: LOAD_GIST_STARTED, payload: username });
  httpService(service.getAllGistUrl(username))
    .then((res) => {
      dispatch({ type: LOAD_GIST_SUCCESS, payload: res ?? [] });
    })
    .catch((err) => {
      dispatch({ type: LOAD_GIST_ERROR, payload: err });
    });
};
// gist detail
const loadGistDetail = (id) => (dispatch) => {
  dispatch({ type: LOAD_DETAIL_STARTED });
  httpService(service.getDetailGistUrl(id))
    .then((res) => {
      dispatch({ type: LOAD_DETAIL_SUCCESS, payload: res ?? [] });
    })
    .catch((err) => {
      dispatch({ type: LOAD_DETAIL_ERROR, payload: err });
    });
};

export { loadAllGists, loadGistDetail };
