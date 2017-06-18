import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Popover, OverlayTrigger, Modal, Button } from 'react-bootstrap';
import { DragSource } from 'react-dnd';

// Information should be in format provided by https://github.com/xivdb/api/blob/master/Content-Action.md
const ActionIcon = styled('div') `
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.4);
    img {
      width: 42px;
      height: 42px;
    }

    &.macro::after{
      color: white;
      content: "❃";
      text-shadow: 2px 2px 8px white;
      font-weight: bold;
      font-size: 16px;
      position: relative;
      bottom: 52px;
      left: 28px;
    }
`;

const iconSource = {
  beginDrag(props) {
    return {
      iconId: props.icon.id,
      macroInfo: props.icon.macroInfo,
      setNumber: props.setNumber,
      position: props.position
    };
  },
  endDrag(props, monitor) {
    if (!monitor.didDrop() && props.clearAction) {
      props.clearAction(props.setNumber, props.position);
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
  }
}

class Icon extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { showMacroModal: false };
  }

  getPopover(icon) {
    return (
      <Popover id={icon.id} title={(icon.macroInfo) ? icon.macroInfo.name : ''}>
        {(icon.macroInfo) ? <pre id={`${icon.id}-macro-info`}>{icon.macroInfo.macroSteps.join('\n')}</pre> : <div dangerouslySetInnerHTML={{__html: icon.tooltip}}/>}
      </Popover>
    )
  }

  handleClick(e) {
    if (e.shiftKey && this.props.icon) {
      console.log('shifted!');
      this.setState({
        showMacroModal: true
      })
    }
    if (e.ctrlKey && this.props.icon && this.props.icon.macroInfo) {
      let temp = document.createElement('textarea');
      temp.value = this.props.icon.macroInfo.macroSteps.join('\n');
      temp.setAttribute('id', 'temp-macro');
      document.querySelector('#root').appendChild(temp);
      document.querySelector(`#temp-macro`).select();
      document.execCommand('copy');
      temp.parentNode.removeChild(temp);
    }
    //this.props.addMacro(this.props.setNumber, this.props.position, this.state.macroInfo);
  }

  closeModal() {
    this.setState({
      showMacroModal: false
    })
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    let icon = <span />;
    if (this.props.icon && this.props.icon !== 'empty') {
      icon = <OverlayTrigger placement="right" trigger={['hover', 'focus']}
        overlay={this.getPopover(this.props.icon)}>
        <img src={`/${this.props.icon.icon}`} alt="" onClick={this.handleClick} />
      </OverlayTrigger>
    }
    return connectDragSource(
      <div>
        <ActionIcon className={(this.props.icon && this.props.icon.macroInfo) ? 'macro' : ''}>
          {icon}
        </ActionIcon>
        <Modal show={this.state.showMacroModal}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
      </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>

        </Modal>

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
  addMacro: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
}

export default DragSource('action', iconSource, collect)(Icon);