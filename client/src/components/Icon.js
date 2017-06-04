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

    text-transform: capitalize;

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

  constructor(props) {
    super(props);

    this.state = {
      icon: this.props.icon
    }

    this.updateIcon = this.updateIcon.bind(this);
    this.dragIcon = this.dragIcon.bind(this);
    this.preventDefault = this.preventDefault.bind(this);
  }

  // Updates the icon in presentation and also I guess updates the state at some point
  preventDefault(event) {
    event.preventDefault();
  };

  updateIcon(ev) {
    ev.preventDefault();
    if (this.props.isReplaceable || !this.state.icon) {
      const icon = JSON.parse(ev.dataTransfer.getData('text'));

      this.setState({
        icon: icon
      });
    }
  };
  // Called when the icon is dragged
  dragIcon(ev) {
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("text/html", ev.currentTarget);
    ev.dataTransfer.setData('text', JSON.stringify(this.props.icon));

    console.log('sending icon: ', ev.dataTransfer.getData('text'));
  }

  renderEmpty() {
    return (<EmptyIcon onDragOver={this.preventDefault} onDrop={this.updateIcon}></EmptyIcon>);
  }

  renderIcon(icon) {

    return (
      <OverlayTrigger placement="right" trigger={['hover', 'focus']}
        overlay={this.getPopover(icon)}>
        <img draggable="true" onDragOver={this.preventDefault} onDrop={this.updateIcon} onDragStart={this.dragIcon} src={icon.iconPath} alt="" />
      </OverlayTrigger>
    )
  }

  getPopover(icon) {
    return (
      <Popover id={icon.id} title={(icon.macroInfo) ? icon.macroInfo.name : ''}>
        {(icon.macroInfo) ? <pre>{icon.macroInfo.macroSteps.join('\n')}</pre> : `${icon.name} ${(icon.level !== '00') ? `lvl ${icon.level}` : ''}`}
      </Popover>
    )
  }


  render() {
    return (
      <ActionIcon className={(this.state.icon && this.state.icon.macroInfo) ? 'macro' : ''}>
        {(this.state.icon) ? this.renderIcon(this.state.icon) : this.renderEmpty()}
      </ActionIcon>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    level: PropTypes.string,
    iconPath: PropTypes.string,
    macroInfo: PropTypes.shape({
      name: PropTypes.string,
      macroSteps: PropTypes.arrayOf(PropTypes.string)
    })
  }),
  isReplaceable: PropTypes.bool
}

export default Icon;
