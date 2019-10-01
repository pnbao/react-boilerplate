import produce from "immer";
import { DEFAULT_ACTION } from "./constants";

export const initialState = {};

function demoContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
    default:
      return state;
  }
}

export default demoContainerReducer;
