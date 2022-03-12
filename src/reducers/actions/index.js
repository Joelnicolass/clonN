import { types } from "../types";

const initStates = {
  title: "",
};

// reducers
export default function reducer(state = initStates, action) {
  switch (action.type) {
    case types.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    default:
      return state;
  }
}
