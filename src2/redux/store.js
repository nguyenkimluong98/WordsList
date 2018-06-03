import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const defaultState = {
  cityName: null,
  temp: null,
  isLoading: false,
  error: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "START_FETCH":
      return { ...state, isLoading: true };
    case "FETCH_SUCCESS":
      return { cityName: action.cityName, error: null, isLoading: false, temp: action.temp };
    case "FETCH_ERROR":
      return { cityName: null, error: true, isLoading: false, temp: null };
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
