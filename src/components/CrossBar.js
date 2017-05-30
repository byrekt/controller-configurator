import React, { Component } from 'react';
import styled from 'styled-components';
import Cross from './Cross';
import PropTypes from 'prop-types';

const CrossContainer = styled('section') `
  display: flex;
`;
class CrossBar extends Component {

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <CrossContainer>
          {this.props.crosses.map((cross, index) => <Cross key={`cross-${index}`} topIcon={cross.topIcon} rightIcon={cross.rightIcon} bottomIcon={cross.bottomIcon} leftIcon={cross.leftIcon} />)}
        </CrossContainer>
      </div>
    );
  }
}

CrossBar.propTypes = {
  name: PropTypes.string,
  crosses: PropTypes.arrayOf(Object)
}

export default CrossBar;
