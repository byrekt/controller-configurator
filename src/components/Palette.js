import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import PropTypes from 'prop-types';

const PaletteContainer = styled('section')`

`;
class Palette extends Component {

  render() {
    return (
      <PaletteContainer>
        <div>{this.props.name}</div>
        {this.props.iconList.map((icon) => {
            return (
              <Icon
                icon={icon}
                key={icon.id}>
              </Icon>);
          })}
      </PaletteContainer>
    );
  }
}

Palette.propTypes = {
  name: PropTypes.string,
  iconList: PropTypes.arrayOf(Object)
}
Palette.defaultProps = {
  iconList: []
}

export default Palette;
