import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import Router from "next/router";
import makeSelectBnm from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import Config from "~/config";
import { urls } from "~/utils";
import withI18next from "~/../hocs/_withI18next";
import styled from "./Bnm.style";

@withI18next()
class Bnm extends React.Component {
  render() {
    useInjectReducer({ key: "bnm", reducer });
    useInjectSaga({ key: "bnm", saga });

    return (
      <div>
        <style jsx>{styled}</style>
      </div>
    );
  }
}

Bnm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  bnm: makeSelectBnm()
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

export default connect(withConnect)(Bnm);
