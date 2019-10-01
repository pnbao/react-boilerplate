import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import Router from "next/router";
import makeSelectM from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import Config from "~/config";
import { urls } from "~/utils";
import withI18next from "~/../hocs/_withI18next";
import styled from "./M.style";

@withI18next()
class M extends React.Component {
  render() {
    useInjectReducer({ key: "m", reducer });
    useInjectSaga({ key: "m", saga });

    return (
      <div>
        <style jsx>{styled}</style>
      </div>
    );
  }
}

M.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  m: makeSelectM()
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

export default connect(withConnect)(M);
