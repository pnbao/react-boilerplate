import React from 'react';
import Config from '~/config';
import withI18next from '~/../hocs/_withI18next';
import PropTypes from 'prop-types';
import styled from './Bb.style';

@withI18next()
class Bb extends React.Component {
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



Bb.propTypes = {};

Bb.defaultProps = {};

export default Bb;
