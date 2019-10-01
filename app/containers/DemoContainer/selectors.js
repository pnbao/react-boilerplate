import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectDemoContainerDomain = state => state.demoContainer || initialState;

const makeSelectDemoContainer = () =>
  createSelector(
    selectDemoContainerDomain,
    substate => substate
  );

export default makeSelectDemoContainer;
export { selectDemoContainerDomain };
