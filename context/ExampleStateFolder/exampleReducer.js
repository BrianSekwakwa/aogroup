import { INCREASE, DECREASE } from "../types";

const exampleReducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: action.payload,
      };
    case DECREASE:
      return {
        ...state,
        counter: action.payload,
      };
    default:
      return state;
  }
};

export default exampleReducer;
