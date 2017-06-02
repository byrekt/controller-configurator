import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Popover, OverlayTrigger } from 'react-bootstrap';

// Information should be in format provided by https://github.com/xivdb/api/blob/master/Content-Action.md

const EmptyIcon = styled('div') `
    height: 40px;
    width: 40px;
    background-color: rgba(155, 155, 155, 0.3);
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.4);
  `;

const ActionIcon = styled('div') `
    height: 40px;
    width: 40px;
    margin: 3px 1px;

    &.macro::after{
      color: black;
      content: "❃";
      text-shadow: 2px 2px 8px white;
      font-weight: bold;
      font-size: 20px;
      position: relative;
      bottom: 52px;
      left: 30px;
    }
`;

class Icon extends Component {

  renderEmpty() {
    return (<EmptyIcon></EmptyIcon>);
  }

  renderIcon(icon) {
    
    return (
      <OverlayTrigger placement="right" trigger={['hover', 'focus']}
        overlay={this.getPopover(icon)}>
        <img src={icon.iconPath} alt=""/>
      </OverlayTrigger>
    )
  }

  getPopover(icon) {
    return (
      <Popover id={icon.id} title={(icon.macroInfo) ? icon.macroInfo.name : ''}>
        {(icon.macroInfo) ? <pre>{icon.macroInfo.macroSteps.join('\n')}</pre> : `${icon.name} ${(icon.level !== '00') ? `lvl ${icon.level}` : '' }`}
      </Popover>
    )
  }


  render() {
    return (
      <ActionIcon className={(this.props.icon && this.props.icon.macroInfo) ? 'macro' : ''}>
        {(this.props.icon) ? this.renderIcon(this.props.icon) : this.renderEmpty()}
      </ActionIcon>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    level: PropTypes.string,
    iconPath: PropTypes.string,
    macroInfo: PropTypes.shape({
      name: PropTypes.string,
      macroSteps: PropTypes.arrayOf(PropTypes.string)
    })
  }).isRequired
}

export default Icon;
