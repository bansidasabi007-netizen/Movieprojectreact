import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import movieReducer from './reducers/movieReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;