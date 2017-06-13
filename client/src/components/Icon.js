import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { DragSource } from 'react-dnd';

// Information should be in format provided by https://github.com/xivdb/api/blob/master/Content-Action.md
const ActionIcon = styled('div') `
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

const iconSource = {
  beginDrag(props) {
    console.log('begin drag', props);
    return {
      iconId: props.icon.id,
      macroInfo: props.icon.macroInfo,
      setNumber: props.setNumber,
      position: props.position
    };
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
  }
}

class Icon extends Component {

  getPopover(icon) {
    return (
      <Popover id={icon.id} title={(icon.macroInfo) ? icon.macroInfo.name : ''}>
        {(icon.macroInfo) ? <pre>{icon.macroInfo.macroSteps.join('\n')}</pre> : `${icon.name} ${(icon.level !== '00') ? `lvl ${icon.level}` : ''}`}
      </Popover>
    )
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    let icon = <span/>;
    if (this.props.icon) {
      icon = <OverlayTrigger placement="right" trigger={['hover', 'focus']}
        overlay={this.getPopover(this.props.icon)}>
          <img src={this.props.icon.iconPath} alt="" />
      </OverlayTrigger>
    }
    return connectDragSource(
      <div>
        <ActionIcon className={(this.props.icon && this.props.icon.macroInfo) ? 'macro' : ''}>
          {icon}
        </ActionIcon>
      </div>
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
  setNumber: PropTypes.number,
  position: PropTypes.string,
  connectDragSource: PropTypes.func.isRequired,
}

export default DragSource('action', iconSource, collect)(Icon);