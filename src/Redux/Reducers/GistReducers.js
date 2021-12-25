import {
  LOAD_GIST_ERROR,
  LOAD_GIST_STARTED,
  LOAD_GIST_SUCCESS,
  LOAD_DETAIL_STARTED,
  LOAD_DETAIL_SUCCESS,
  LOAD_DETAIL_ERROR,
} from "../Actions/GistActions";

//INITIAL STATE
const initialState = {
  username: "",
  isLoading: false,
  error: null,
  gists: [],
  gistDetail: null,
  isDetailLoading: false,
};

const gistReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_GIST_STARTED:
      return {
        ...state,
        gists: [],
        isLoading: true,
        username: payload,
        error: null,
      };
    case LOAD_GIST_SUCCESS:
      return {
        ...state,
        gists: payload,
        isLoading: false,
      };
    case LOAD_GIST_ERROR:
      return {
        ...state,
        gists: [],
        isLoading: false,
        error: null,
      };
    case LOAD_DETAIL_STARTED:
      return {
        ...state,
        gistDetail: null,
        isDetailLoading: true,
        error: null,
      };
    case LOAD_DETAIL_SUCCESS:
      return {
        ...state,
        gistDetail: payload,
        isDetailLoading: false,
        error: null,
      };
    case LOAD_DETAIL_ERROR:
      return {
        ...state,
        gistDetail: null,
        isDetailLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
export default gistReducers;
