import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectMDomain = state => state.m || initialState;

const makeSelectM = () =>
  createSelector(
    selectMDomain,
    substate => substate
  );

export default makeSelectM;
export { selectMDomain };
