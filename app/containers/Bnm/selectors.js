import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectBnmDomain = state => state.bnm || initialState;

const makeSelectBnm = () =>
  createSelector(
    selectBnmDomain,
    substate => substate
  );

export default makeSelectBnm;
export { selectBnmDomain };
