import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Popover, OverlayTrigger, Modal, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { DragSource } from 'react-dnd';

// Information should be in format provided by https://github.com/xivdb/api/blob/master/Content-Action.md
const ActionIcon = styled('div') `
    img {
      width: 38px;
      height: 38px;
    }

    &.macro::after{
      color: white;
      content: "❃";
      text-shadow: 2px 2px 8px white;
      font-weight: bold;
      font-size: 16px;
      position: relative;
      bottom: 43px;
      left: 24px;
    }
`;

const ActionTooltip = styled('section') `

    .tooltip-tip {
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 0;
      }
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
    this.saveMacro = this.saveMacro.bind(this);

    this.updateMacroName = this.updateMacroName.bind(this);
    this.updateMacroSteps = this.updateMacroSteps.bind(this);

    let macroInfo = props.icon.macroInfo || { name: props.icon.name, macroSteps: `/macroicon "${props.icon.name}"` };
    this.state = { showMacroModal: false, macroName: macroInfo.name, macroInfo: macroInfo.macroSteps };
  }

  getPopover(icon) {
    return (
      <Popover id={icon.id} title={(icon.macroInfo) ? icon.macroInfo.name : ''}>
        {(icon.macroInfo) ? <pre id={`${icon.id}-macro-info`}>{icon.macroInfo.macroSteps.join('\n')}</pre> : this.getActionTooltip(icon)}
      </Popover>
    )
  }

  getActionTooltip(icon) {

    const tooltipContent = icon.tooltip.split('<br>');

    if (icon.recast) {
      tooltipContent.unshift(`Recast: ${icon.recast}`);
    }
    if (icon.cast) {
      tooltipContent.unshift(`Cast: ${icon.recast}`);
    }

    const sexyTooltipContent = tooltipContent.map(tip => {
      // If the tip has a colon in it, let's bold what's before the colon;
      if (tip.indexOf(':') !== -1) {
        const tipContent = tip.split(':');
        tipContent[0] = `<strong>${tipContent[0]}</strong>`;
        tip = tipContent.join(':');
      }
      return `<div class="tooltip-tip">${tip}</div>`;
    });

    const sexyTooltip = sexyTooltipContent.join('');


    return (
      <ActionTooltip>
        <header>
          <h4>{icon.name}</h4>
        </header>
        <div dangerouslySetInnerHTML={{ __html: sexyTooltip }} />
      </ActionTooltip>
    )
  }

  handleClick(e) {
    if (e.shiftKey && this.props.icon && this.props.addMacro) {
      this.setState({
        showMacroModal: true
      })
    }
    if ((e.ctrlKey || e.metaKey) && this.props.icon && this.props.icon.macroInfo) {
      let temp = document.createElement('textarea');
      temp.value = this.props.icon.macroInfo.macroSteps.join('\n');
      temp.setAttribute('id', 'temp-macro');
      document.querySelector('#root').appendChild(temp);
      document.querySelector(`#temp-macro`).select();
      document.execCommand('copy');
      temp.parentNode.removeChild(temp);
    }
  }
  updateMacroName(e) {
    this.setState({
      macroName: e.target.value
    });
  }

  updateMacroSteps(e) {
    this.setState({
      macroInfo: e.target.value
    });
  }

  saveMacro() {
    console.log(this.state.macroInfo);
    const macroInfo = {};
    macroInfo.name = this.state.macroName;
    macroInfo.macroSteps = this.state.macroInfo.split('\n');
    console.log(macroInfo);
    this.props.addMacro(this.props.setNumber, this.props.position, macroInfo);
    this.closeModal(true);
  }

  closeModal(save = false) {
    if (save) {
      this.setState({
        showMacroModal: false
      })
    }
    else {
      const macroInfo = this.props.icon.macroInfo || { name: this.props.icon.name, macroSteps: `/macroicon "${this.props.icon.name}"` };
      this.setState({
        showMacroModal: false,
        macroName: macroInfo.name,
        macroInfo: macroInfo.macroSteps
      })
    }
  }

  render() {
    const { connectDragSource } = this.props;
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
            <Modal.Title>
              Macro Editor
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <FormGroup controlId="macroName">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" onChange={this.updateMacroName} value={this.state.macroName} />
              </FormGroup>

              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Macro Steps</ControlLabel>
                <FormControl componentClass="textarea" onChange={this.updateMacroSteps} value={this.state.macroInfo} />
              </FormGroup>


            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => this.closeModal()}>Close</Button>
            <Button onClick={() => this.saveMacro()} bsStyle="primary">Save changes</Button>
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
  //addMacro: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
}

export default DragSource('action', iconSource, collect)(Icon);