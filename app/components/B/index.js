import React from 'react';
import Config from '~/config';
import withI18next from '~/../hocs/_withI18next';
import PropTypes from 'prop-types';
import styled from './B.style';

@withI18next()
class B extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <style jsx>{styled}</style>
      </div>
    )
  }
}



B.propTypes = {};

B.defaultProps = {};

export default B;
