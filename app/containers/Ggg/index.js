import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import Router from "next/router";
import makeSelectGgg from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import Config from "~/config";
import { urls } from "~/utils";
import withI18next from "~/../hocs/_withI18next";
import styled from "./Ggg.style";

@withI18next()
class Ggg extends React.Component {
  render() {
    useInjectReducer({ key: "ggg", reducer });
    useInjectSaga({ key: "ggg", saga });

    return (
      <div>
        <style jsx>{styled}</style>
      </div>
    );
  }
}

Ggg.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  ggg: makeSelectGgg()
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

export default connect(withConnect)(Ggg);
