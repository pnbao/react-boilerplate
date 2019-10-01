import React from "react";
import Config from "~/config";
import withI18next from "~/../hocs/_withI18next";
import PropTypes from "prop-types";
import styled from "./N.style";

@withI18next()
class N extends React.Component {
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

N.propTypes = {};

N.defaultProps = {};

export default N;
