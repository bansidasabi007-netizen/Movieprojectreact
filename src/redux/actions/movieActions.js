import api from "../../services/api";

// Fetch Popular Movies
export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

// Search Movies
export const SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";

// Movie Details
export const FETCH_MOVIE_DETAILS_REQUEST =
  "FETCH_MOVIE_DETAILS_REQUEST";

export const FETCH_MOVIE_DETAILS_SUCCESS =
  "FETCH_MOVIE_DETAILS_SUCCESS";

export const FETCH_MOVIE_DETAILS_FAILURE =
  "FETCH_MOVIE_DETAILS_FAILURE";


// Fetch Popular Movies
export const fetchPopularMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_MOVIES_REQUEST,
    });

    try {
      const response = await api.get("", {
        params: {
          s: "Batman",
          type: "movie",
        },
      });

      if (response.data.Response === "True") {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: response.data.Search,
        });
      } else {
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: response.data.Error,
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        payload: error.message,
      });
    }
  };
};


// Search Movies
export const searchMovies = (query) => {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_MOVIES_REQUEST,
    });

    try {
      const response = await api.get("", {
        params: {
          s: query,
          type: "movie",
        },
      });

      if (response.data.Response === "True") {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: response.data.Search,
        });
      } else {
        dispatch({
          type: SEARCH_MOVIES_FAILURE,
          payload: response.data.Error,
        });
      }
    } catch (error) {
      dispatch({
        type: SEARCH_MOVIES_FAILURE,
        payload: error.message,
      });
    }
  };
};


// Fetch Movie Details
export const fetchMovieDetails = (imdbID) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_MOVIE_DETAILS_REQUEST,
    });

    try {
      const response = await api.get("", {
        params: {
          i: imdbID,
          plot: "full",
        },
      });

      if (response.data.Response === "True") {
        dispatch({
          type: FETCH_MOVIE_DETAILS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: FETCH_MOVIE_DETAILS_FAILURE,
          payload: response.data.Error,
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_MOVIE_DETAILS_FAILURE,
        payload: error.message,
      });
    }
  };
};