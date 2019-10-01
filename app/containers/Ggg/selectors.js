import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectGggDomain = state => state.ggg || initialState;

const makeSelectGgg = () =>
  createSelector(
    selectGggDomain,
    substate => substate
  );

export default makeSelectGgg;
export { selectGggDomain };
