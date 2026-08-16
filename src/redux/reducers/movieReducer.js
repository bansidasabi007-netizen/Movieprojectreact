import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
} from "../actions/movieActions";

const initialState = {
  popularMovies: [],
  searchResults: [],
  movieDetails: null,
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {

    // Popular Movies
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        popularMovies: action.payload,
        error: null,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


    // Search Movies
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action.payload,
        error: null,
      };

    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        searchResults: [],
        error: action.payload,
      };


    // Movie Details
    case FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        movieDetails: null,
        error: null,
      };

    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        movieDetails: action.payload,
        error: null,
      };

    case FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        movieDetails: null,
        error: action.payload,
      };


    default:
      return state;
  }
};

export default movieReducer;