import React, { Component } from 'react';
import update from 'react-addons-update';
import styled from 'styled-components';
import { Row, Col, Button, DropdownButton, MenuItem, ButtonGroup, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import CrossHotBar from './CrossHotBar';
import Palette from '../containers/Palette';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { JOB_ORDER, DEFAULT_SET } from '../constants/DefaultValues';


const CharacterSetContainer = styled('div') `
  .help-block {
    color: #cdcdcd;
  }
  .form-control {
    background-color: #cdcdcd;
  }
  .button-group-jobs {
    display: flex;
    flex-wrap: wrap;
    button {
      padding: 4px;
      border: none;
      background-color: transparent;

      img {
        height: 42px;
        width: 42px;
      }
      &.selected {
        padding: 0px;
        img {
          height: 50px;
          width: 50px;
        }
      }
    }
  }

  .selected-job-icon {
    height: 42px;
    width: 42px;
  }
`

const CharacterSetContent = styled('div') `
    border-radius: 10px;
    border: 7px ridge white;
    background: linear-gradient(#5050cd, #01002d);
    padding: 1rem;
`
/**
 * This overly large component serves as an interface for users to create, modify, and view character
 * kits.
 */
class CharacterSet extends Component {

  constructor(props) {
    super(props);

    // If a kitID is present, display the corresponding kit
    if (props.match && props.match.params && props.match.params.kitId) {
      props.onSetChange(props.match.params.kitId);
    } else {
      props.onSetChange();
    }
    // If the kit ID is present, let's initialize state based on
    // whether the user is the creator of the kit.
    if (props.match.params.kitId) {
      if (props.authentication.uid === props.characterSet.creatorId) {
        this.state = {
          characterSet: props.characterSet,
          mode: 'edit'
        };
      } else {
        this.state = {
          characterSet: props.characterSet,
          mode: 'view'
        };
      }
    } else {
      this.state = {
        characterSet: DEFAULT_SET,
        mode: 'create'
      };
    }

    this.moveAction = this.moveAction.bind(this);
    this.clearAction = this.clearAction.bind(this);
    this.onSetNameChange = this.onSetNameChange.bind(this);
    this.onSetDescriptionChange = this.onSetDescriptionChange.bind(this);
    this.onDisplayNameChange = this.onDisplayNameChange.bind(this);
    this.saveKit = this.saveKit.bind(this);
    this.addBar = this.addBar.bind(this);
    this.deleteBar = this.deleteBar.bind(this);
    this.addMacro = this.addMacro.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
  }


  componentWillReceiveProps(nextProps) {

    if (nextProps.match.params.kitId) {
      if (nextProps.authentication.uid === nextProps.characterSet.creatorId) {
        this.setState({
          characterSet: nextProps.characterSet,
          mode: 'edit'
        });
      } else {
        this.setState({
          characterSet: nextProps.characterSet,
          mode: 'view'
        });
      }
    } else {
      this.setState({
        characterSet: DEFAULT_SET,
        mode: 'create'
      });
    }
  }

  clearAction(setNumber, position) {
    let state = this.state;
    if (state.mode === 'view') return;
    const fromBarIndex = state.characterSet.crossBars.map(bar => bar.setNumber).indexOf(setNumber);
    delete state.characterSet.crossBars[fromBarIndex][position];
    this.setState(state);
  }

  addMacro(setNumber, position, macroInfo) {
    const barIndex = this.state.characterSet.crossBars.map(bar => bar.setNumber).indexOf(setNumber);

    this.setState({
      characterSet: update(this.state.characterSet, { crossBars: { [barIndex]: { [position]: { macroInfo: { $set: macroInfo } } } } })
    });
  }

  moveAction(fromIcon, fromMacroInfo, fromSetNumber, fromPos, toIcon, toMacroInfo, toSetNumber, toPos) {
    let state = this.state;

    if (state.mode === 'view') return;

    let action;
    // If the icon isn't from a set, that means it's from the palette, so anything we drag it over will be replaced
    if (!fromSetNumber) {
      action = 'replace';
      // If the icon is from a set and it's dragged over another filled icon, swap the icons
    } else if (toIcon) {
      action = 'swap';
      // If the toIcon is empty, move the icon from one spot to another, clearing out it's old position
    } else if (!toIcon) {
      action = 'move';
      // If none of the previous are true, that means we've dragged icon off the bar and we need to delete the icon
    }

    const toBarIndex = (toSetNumber) ? state.characterSet.crossBars.map(bar => bar.setNumber).indexOf(toSetNumber) : -1;
    const fromBarIndex = (fromSetNumber) ? state.characterSet.crossBars.map(bar => bar.setNumber).indexOf(fromSetNumber) : -1;

    switch (action) {
      case 'replace':
        // TODO rewrite these using immutability-helpers
        state.characterSet.crossBars[toBarIndex][toPos] = { id: fromIcon };
        if (fromMacroInfo) {
          state.characterSet.crossBars[toBarIndex][toPos].macroInfo = fromMacroInfo;
        }
        this.setState(state);
        break;
      case 'swap':
        state.characterSet.crossBars[toBarIndex][toPos] = { id: fromIcon };
        if (fromMacroInfo) {
          state.characterSet.crossBars[toBarIndex][toPos].macroInfo = fromMacroInfo;
        }
        state.characterSet.crossBars[fromBarIndex][fromPos] = { id: toIcon };
        if (toMacroInfo) {
          state.characterSet.crossBars[fromBarIndex][fromPos].macroInfo = toMacroInfo;
        }
        this.setState(state);
        break;
      case 'move':
        state.characterSet.crossBars[toBarIndex][toPos] = { id: fromIcon };
        if (fromMacroInfo) {
          state.characterSet.crossBars[toBarIndex][toPos].macroInfo = fromMacroInfo;
        }
        delete state.characterSet.crossBars[fromBarIndex][fromPos];
        this.setState(state);
        break;
      default:
    }
  }

  onSetNameChange(e) {
    this.setState({
      characterSet: update(this.state.characterSet, { name: { $set: e.target.value } })
    });
  }
  onSetDescriptionChange(e) {
    console.log('onSetDescription:', e.target.value);
    this.setState({
      characterSet: update(this.state.characterSet, { description: { $set: e.target.value } })
    });
  }

  handleJobChange(job) {
    this.setState({
      characterSet: update(this.state.characterSet, { job: { $set: job } })
    })
  }

  onDisplayNameChange(e) {
    this.setState({
      displayName: e.target.value
    });
  }
  addBar(setNumber) {
    const emptyBar = { setNumber: setNumber };
    this.setState({
      characterSet: update(this.state.characterSet, {
        crossBars: { $push: [emptyBar] }
      })
    });
  }

  deleteBar(setNumber) {
    const crossBars = this.state.characterSet.crossBars.filter(crossBar => crossBar.setNumber !== setNumber);

    this.setState({
      characterSet: update(this.state.characterSet, {
        crossBars: { $set: crossBars }
      })
    });
  }

  saveKit() {
    let characterSet = this.state.characterSet;
    if (!characterSet.creatorName) {
      characterSet.creatorName = this.state.displayName;
    }
    if (this.checkForm()) {
      this.props.saveKit(this.state.characterSet, this.props.authentication.uid, this.state.displayName);
    } else {
      window.scroll(0, 0);
    }
  }

  renderAddBarButtons() {
    let buttons = [];
    if (!this.state.characterSet || !this.state.characterSet.crossBars) return;

    const crossBarsSetNumbers = this.state.characterSet.crossBars.map(bar => bar.setNumber);
    for (let i = 1; i <= 8; ++i) {
      if (crossBarsSetNumbers.indexOf(i) < 0) {
        buttons.push(<MenuItem eventKey={i} key={i} onClick={() => { this.addBar(i) }}>Set {i}</MenuItem>);
      }
    }
    return buttons;
  }

  renderRemoveBarButtons() {
    let buttons = [];
    if (!this.state.characterSet || !this.state.characterSet.crossBars) return;

    const crossBarsSetNumbers = this.state.characterSet.crossBars.map(bar => bar.setNumber);
    for (let i = 1; i <= 8; ++i) {
      if (crossBarsSetNumbers.indexOf(i) >= 0) {
        buttons.push(<MenuItem eventKey={i} key={i} onClick={() => { this.deleteBar(i) }}>Set {i}</MenuItem>);
      }
    }
    return buttons;
  }

  renderJobOptions() {
    return (
      <ButtonGroup className="button-group-jobs">
        {JOB_ORDER.map((job) => {
          return (
            <Button key={job} onClick={() => { this.handleJobChange(job) }} className={(this.state.characterSet.job === job) ? 'selected' : ''}>
              <img src={`/icons/jobs/${job}.png`} alt={`${job} Icon`} />
            </Button>
          )
        })}
      </ButtonGroup>
    )
  }

  getKitNameValidationState() {
    const length = this.state.characterSet.name.length;
    if (length === 0) {
      return null;
    }
    if (length < 10) {
      return 'error';
    }
    return null;
  }

  getDisplayNameValidationState() {
    console.log('state in validation: ', this.state);
    const length = (this.state.characterSet.creatorName || '').length;
    if (length < 10) {
      return 'error';
    } else {
      return 'success';
    }
  }

  checkForm() {
    if (this.getKitNameValidationState() !== 'error' && this.getDisplayNameValidationState() !== 'error') {
      return true;
    }
    return false;
  }

  render() {
    return (
      <CharacterSetContainer>
        <Form>
          {this.state &&
            <Row>
              <Col xs={8}>

                <CharacterSetContent>
                  <Row>
                    <Col xs={12}>
                      {this.state.mode === 'view' && this.state.characterSet.name}
                      {(this.state.mode === 'create' || this.state.mode === 'edit') &&
                        <FormGroup controlId="kitName" validationState={this.getKitNameValidationState()}>
                          <ControlLabel>Kit Name</ControlLabel>
                          <HelpBlock>Enter a kit name indicative of what's great about your setup.</HelpBlock>
                          <FormControl type="text" onChange={this.onSetNameChange} value={(this.state.characterSet) ? this.state.characterSet.name : ''} />
                          <FormControl.Feedback />
                        </FormGroup>
                      }
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <FormGroup>
                        <ControlLabel>Job</ControlLabel>
                        {this.state.mode === 'create' &&
                          this.renderJobOptions()
                        }
                        {this.state.mode !== 'create' &&
                          <FormControl.Static>
                            <img src={`/icons/jobs/${this.state.characterSet.job}.png`} alt={`${this.state.characterSet.job} Icon`} className="selected-job-icon" />
                          </FormControl.Static>
                        }
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <FormGroup controlId="userDisplayName" validationState={this.getDisplayNameValidationState()}>
                        <ControlLabel>Created By</ControlLabel>
                        {this.state.mode === 'create' && !this.props.userInfo &&
                          <div>
                            <HelpBlock>Since you haven't given us a display name yet, what would you like to be known as to other users?</HelpBlock>
                            <FormControl type="text" onChange={this.onDisplayNameChange} value={(this.state.displayName) ? this.state.displayName : ''} />
                            <FormControl.Feedback />
                          </div>
                        }
                        {(this.state.characterSet.creatorName || this.props.userInfo) &&
                          <FormControl.Static value={this.state.characterSet.creatorName || this.props.userInfo.displayName}>{this.state.characterSet.creatorName || this.props.userInfo.displayName}</FormControl.Static>
                        }
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <FormGroup controlId="kitDescription">
                        <ControlLabel>
                          Description (Optional, but highly recommended)
                      </ControlLabel>

                        {(this.state.mode === 'create' || this.state.mode === 'edit') &&
                          <div>
                            <HelpBlock>Let user's of your kit know if there is any additional information required to use your kit effectively.
                            This could include WXHB setting assumptions, reasoning for placement, any concerns you may have, etc.</HelpBlock>
                            <FormControl componentClass="textarea" onChange={this.onSetDescriptionChange} value={(this.state.characterSet) ? this.state.characterSet.description : ''} />
                            <FormControl.Feedback />
                          </div>
                        }
                        {this.state.mode === 'view' &&
                          <FormControl.Static>
                            ${this.state.characterSet.description}
                          </FormControl.Static>
                        }
                      </FormGroup>

                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      {this.state.characterSet && this.state.characterSet.crossBars && this.state.characterSet.crossBars.sort((a, b) => a.setNumber - b.setNumber).map((bar, index) => {
                        return (
                          <div key={index}>
                            <Row>
                              <Col xs={12} className="center-block">
                                <h4>
                                  Set {bar.setNumber}
                                </h4>
                              </Col>
                            </Row>
                            <CrossHotBar bar={bar} actionsData={this.props.actionsData} moveAction={this.moveAction} clearAction={this.clearAction} addMacro={this.addMacro} />
                          </div>
                        )
                      })}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <h4>Add and Remove Bars</h4>
                      <ButtonGroup>
                        <DropdownButton id="add-cross-bars" title="Add Bars">
                          {this.renderAddBarButtons()}
                        </DropdownButton>
                        <DropdownButton id="remove-cross-bars" title="Remove Bars">
                          {this.renderRemoveBarButtons()}
                        </DropdownButton>
                      </ButtonGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <h4>Actions</h4>
                      {(this.state.mode === 'edit' || this.state.mode === 'create') &&
                        <Button onClick={this.saveKit}>Save</Button>
                      }
                    </Col>
                  </Row>

                </CharacterSetContent>
              </Col>

              <Col xs={4}>
                {this.state.characterSet && this.state.characterSet.job && (this.state.mode === 'create' || this.state.mode === 'edit') &&
                  <Palette paletteId={this.state.characterSet.job} />
                }
              </Col>
            </Row>
          }
        </Form>
      </CharacterSetContainer>
    );
  }
}

CharacterSet.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      kitId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  }),
  characterSet: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    kitId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    crossBars: PropTypes.arrayOf(Object),
    job: PropTypes.string,
    stars: PropTypes.number,
    editable: PropTypes.bool
  }),
  authentication: PropTypes.object,
  actionsData: PropTypes.object,
  onSetChange: PropTypes.func.isRequired,
  saveKit: PropTypes.func.isRequired,
  clearCurrentKit: PropTypes.func.isRequired
}

export default DragDropContext(HTML5Backend)(CharacterSet);
