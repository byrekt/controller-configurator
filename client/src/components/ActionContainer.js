import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DropTarget } from 'react-dnd';

const iconTarget = {
  drop(props, monitor, component) {
    console.log('iconTarget: ', props, monitor.getItem(), component);
    const item = monitor.getItem();
    const target = component.props.children;
    props.moveAction(
      item.iconId,
      item.macroInfo,
      item.setNumber,
      item.position,
      (target) ? target.props.icon.id : null,
      (target && target.props.icon && target.props.icon.macroInfo) ? target.props.icon.macroInfo : null,
      component.props.setNumber,
      component.props.position);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const Container = styled('div') `
    height: 42px;
    width: 42px;
    background-color: rgba(155, 155, 155, 0.3);
    border-radius: 5px;
    margin: 1px;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.4);
    img {
      margin-top: -1px;
      margin-left: -3px;
    }
  `;

class ActionContainer extends Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default DropTarget('action', iconTarget, collect)(ActionContainer);