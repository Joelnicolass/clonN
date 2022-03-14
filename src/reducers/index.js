import { types } from "./types";

const initStates = {
  api: {
    isLoading: true,
    isError: false,
    errorMessage: "",
    data: {
      popularMovies: [],
      popularTv: [],
    },
  },
};

// reducers
export default function reducer(state = initStates, action) {
  switch (action.type) {
    case types.moive.START_LOADING_POPULAR_MOVIES:
      return {
        ...state,
        api: {
          isLoading: true,
          isError: false,
          errorMessage: "",
          data: {
            ...state.api.data,
            popularMovies: [],
          },
        },
      };
    case types.moive.SUCCESS_LOADING_POPULAR_MOVIES:
      return {
        ...state,
        api: {
          isLoading: false,
          isError: false,
          errorMessage: "",
          data: {
            ...state.api.data,
            popularMovies: action.payload.results,
          },
        },
      };
    case types.moive.ERROR_LOADING_POPULAR_MOVIES:
      return {
        ...state,
        api: {
          isLoading: false,
          isError: true,
          errorMessage: action.payload,
          data: {
            ...state.api.data,
            popularMovies: [],
          },
        },
      };

    default:
      return state;
  }
}
