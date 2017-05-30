import React, { Component } from 'react';
import styled from 'styled-components';
import CrossBar from './CrossBar';
import PropTypes from 'prop-types';

const CharacterSetContainer = styled('section') `

`;
class CharacterSet extends Component {
  render() {
    return (
        <CharacterSetContainer>
          {this.props.name}
          {this.props.crossBars.map((bar) => <CrossBar key={bar.name} name={bar.name} crosses={bar.crosses}/>)}
        </CharacterSetContainer>
    );
  }
}

CharacterSet.propTypes = {
  name: PropTypes.string,
  crossBars: PropTypes.arrayOf(Object)
}

export default CharacterSet;
