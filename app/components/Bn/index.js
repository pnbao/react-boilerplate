import React from "react";
import Config from "~/config";
import withI18next from "~/../hocs/_withI18next";
import PropTypes from "prop-types";
import styled from "./Bn.style";

@withI18next()
class Bn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <style jsx>{styled}</style>
      </div>
    );
  }
}

Bn.propTypes = {};

Bn.defaultProps = {};

export default Bn;
