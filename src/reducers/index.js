import { types } from "./types";

const initStates = {
  api: {
    isLoading: true,
    isError: false,
    errorMessage: "",
    data: [],
  },
};

// reducers
export default function reducer(state = initStates, action) {
  switch (action.type) {
    case types.homePage.START_LOADING:
      return {
        ...state,
        api: {
          isLoading: true,
          isError: false,
          errorMessage: "",
          data: [],
        },
      };
    case types.homePage.SUCCESS_LOADING:
      return {
        ...state,
        api: {
          isLoading: false,
          isError: false,
          errorMessage: "",
          data: action.payload,
        },
      };
    case types.homePage.ERROR_LOADING:
      return {
        ...state,
        api: {
          isLoading: false,
          isError: true,
          errorMessage: action.payload,
          data: [],
        },
      };

    default:
      return state;
  }
}
