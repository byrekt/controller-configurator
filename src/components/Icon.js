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
    img {
      border-radius: 5px;
      box-shadow: 2px 2px 3px rgba(0,0,0,0.4);

    }

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
    let iconId = icon.icon.toString();
    const iconIdLength = iconId.length;
    let seriesNumber;

    if (iconIdLength > 3) {
      seriesNumber = iconId[0];
      // TODO add polyfill
      seriesNumber = seriesNumber.padEnd(iconIdLength, '0');
      seriesNumber = seriesNumber.padStart(6, '0');
    } else {
      seriesNumber = '000000'
    };

    // TODO add polyfill
    iconId = iconId.padStart(6, '0');
    // https://secure.xivdb.com/img/game/002000/002682.png
    let iconUrl = `https://secure.xivdb.com/img/game/${seriesNumber}/${iconId}.png`;
    return (
      <OverlayTrigger placement="right" trigger={['hover', 'focus']}
        overlay={this.getPopover(icon)}>
        <img src={iconUrl} />
      </OverlayTrigger>
    )
  }

  getPopover(icon) {
    return (
      <Popover id={icon.id} title={(icon.macroInfo) ? icon.macroInfo.name : ''}>
        {(icon.macroInfo) ? <pre>{icon.macroInfo.macroSteps.join('\n')}</pre> : icon.name}
      </Popover>
    )
  }


  render() {
    return (
      <ActionIcon className={(this.props.icon.macroInfo) ? 'macro' : ''}>
        {(this.props.icon) ? this.renderIcon(this.props.icon) : this.renderEmpty()}
      </ActionIcon>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.shape({
    icon: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    macroInfo: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

export default Icon;
