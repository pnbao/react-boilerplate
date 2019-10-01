import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Router from "next/router";
import makeSelectDemoContainer from "./selectors";
import demoContainerReducer from "./reducer";
import saga from "./saga";
import Config from "~/config";
import { urls } from "~/utils";
import withI18next from "~/../hocs/_withI18next";
import styled from "./DemoContainer.style";

@withI18next()
class DemoContainer extends React.Component {
  render() {
    return (
      <div>
        <style jsx>{styled}</style>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  demoContainer: makeSelectDemoContainer()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connect(withConnect)(DemoContainer);
