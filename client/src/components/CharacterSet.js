import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from './Icon';
import ActionContainer from './ActionContainer';
import CrossHotBar from './CrossHotBar';
import Palette from '../containers/Palette';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const CrossContainer = styled('section') `
  display: flex;
  flex-direction: row;

  .cross {
    display: flex;
    margin: 0.25rem;

    .middle-icons {
      display: flex;
      flex-direction: column;
    }
    .left-icon, .right-icon {
      align-self: center;
    }

    .left-icon {
      margin-right: 2px;
    }
    .right-icon {
      margin-left: 2px;
    }
  }
`;

class CharacterSet extends Component {

  constructor(props) {
    super(props);

    // If a kitID is present, display the corresponding kit
    if (props.match && props.match.params && props.match.params.kitId) {
      props.onSetChange(props.match.params.kitId);
    }

    this.state = { characterSet: props.characterSet };

    this.moveAction = this.moveAction.bind(this);
    this.clearAction = this.clearAction.bind(this);
  }

  clearAction(setNumber, position) {
    let state = this.state;
    const crossBars = this.state.characterSet.crossBars;
    const fromBarIndex = state.characterSet.crossBars.map(bar => bar.setNumber).indexOf(setNumber);
    delete state.characterSet.crossBars[fromBarIndex][position];
    this.setState(state);
  }

  moveAction(fromIcon, fromMacroInfo, fromSetNumber, fromPos, toIcon, toMacroInfo, toSetNumber, toPos) {
    let state = this.state;
    const crossBars = this.state.characterSet.crossBars;

    console.log(fromIcon, fromMacroInfo, fromSetNumber, fromPos, toIcon, toMacroInfo, toSetNumber, toPos);
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

    console.log('action is: ', action);

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
        console.log('attempting to delete ', state.characterSet.crossBars[fromBarIndex][fromPos])
        delete state.characterSet.crossBars[fromBarIndex][fromPos];
        console.log('deleted?', state.characterSet.crossBars[fromBarIndex][fromPos])
        console.log('stateAfterDelete: ', state);
        this.setState(state);
        break;
      default:
    }
  }

  componentWillReceiveProps(nextProps) {

    if (Object.keys(nextProps.characterSet).length) {
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
        mode: 'create'
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('component should update: ', nextProps, nextState);
  }
  componentWillUnmount() {
    this.props.clearCurrentKit();
  }

  render() {
    console.log('state in render: ', this.state, this.moveAction);
    return (
      <div>
        {this.state &&
          <Row>
            <Col xs={8}>
              <Grid>
                <Row>
                  <Col xs={12}>
                    {this.state.characterSet.name}
                  </Col>
                </Row>
                {this.state.characterSet.description &&
                  <Row>
                    <Col xs={12}>
                      {this.state.characterSet.description}
                    </Col>
                  </Row>
                }
                <Row>
                  <Col xs={12}>
                    {this.state.characterSet.crossBars && this.state.characterSet.crossBars.map((bar, index) => {
                      console.log('bar', index, ' in render: ', bar);
                      return (
                        <CrossHotBar key={index} bar={bar} actionsData={this.props.actionsData} moveAction={this.moveAction} clearAction={this.clearAction}/>
                      )
                    })
                    }
                  </Col>
                </Row>
              </Grid>
            </Col>
            <Col xs={4}>
              {this.state.characterSet.job &&
                //this.props.characterSet.editable &&
                <Palette defaultPaletteId={this.state.characterSet.job} />
              }
            </Col>
          </Row>
        }
      </div>
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
  clearCurrentKit: PropTypes.func.isRequired
}

CharacterSet.defaultProps = {
  actionsData: {},
  characterSet: { name: '', crossBars: [{ setNumber: 1 }] }
}

export default DragDropContext(HTML5Backend)(CharacterSet);
