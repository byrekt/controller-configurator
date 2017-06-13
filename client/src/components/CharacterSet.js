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

    this.moveAction = this.moveAction.bind(this);
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
    } else if (!toIcon){
      action = 'move';
    // If none of the previous are true, that means we've dragged icon off the bar and we need to delete the icon
    } else {
      action = 'clear';
    }

    console.log('action is: ', action);

    // const crossBarIndex = crossBars.map((bar) => bar.setNumber).indexOf(setNumber);
    // console.log('Moving', icon, 'to', pos, 'in', setNumber, 'aka index', crossBarIndex);

    // state.characterSet.crossBars[crossBarIndex][pos] = {id: icon};
    // if (macroInfo) {
    //     state.characterSet.crossBars[crossBarIndex][pos].macroInfo = macroInfo;
    // }
    // this.setState(state);
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
        characterSet: { crossBars: [{ setNumber: 1 }] },
        mode: 'create'
      });
    }
  }

  componentWillUnmount() {
    this.props.clearCurrentKit();
  }

  render() {
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
                    {this.props.characterSet && this.props.actionsData && this.props.characterSet.crossBars &&
                      this.props.characterSet.crossBars.map((bar, index) => {
                        return (
                          <CrossHotBar key={index} bar={bar} actionsData={this.props.actionsData} moveAction={this.moveAction}/>
                        )
                      })
                    }
                  </Col>
                </Row>
              </Grid>
            </Col>
            <Col xs={4}>
              {this.props.characterSet.job &&
                //this.props.characterSet.editable &&
                <Palette defaultPaletteId={this.props.characterSet.job} />
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

export default DragDropContext(HTML5Backend)(CharacterSet);
