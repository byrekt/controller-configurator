import React, { Component } from 'react';
import update from 'react-addons-update';
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
        } else {
            props.onSetChange();
        }

        this.state = { characterSet: props.characterSet };

        this.moveAction = this.moveAction.bind(this);
        this.clearAction = this.clearAction.bind(this);
        this.onSetNameChange = this.onSetNameChange.bind(this);
        this.onSetDescriptionChange = this.onSetDescriptionChange.bind(this);
        this.addBar = this.addBar.bind(this);
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
                characterSet: nextProps.characterSet,
                mode: 'create'
            });
        }
    }

    componentWillUnmount() {
        console.log('flurp clearing current kit');
        this.props.clearCurrentKit();
    }

    clearAction(setNumber, position) {
        let state = this.state;
        if (state.mode === 'view') return;
        const crossBars = this.state.characterSet.crossBars;
        const fromBarIndex = state.characterSet.crossBars.map(bar => bar.setNumber).indexOf(setNumber);
        delete state.characterSet.crossBars[fromBarIndex][position];
        this.setState(state);
    }

    moveAction(fromIcon, fromMacroInfo, fromSetNumber, fromPos, toIcon, toMacroInfo, toSetNumber, toPos) {
        let state = this.state;

        if (state.mode === 'view') return;
        const crossBars = this.state.characterSet.crossBars;

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
        this.setState({
            characterSet: update(this.state.characterSet, { description: { $set: e.target.value } })
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

    renderAddBarButtons() {
        let buttons = [];
        if (!this.state.characterSet || !this.state.characterSet.crossBars) return;

        const crossBarsSetNumbers = this.state.characterSet.crossBars.map(bar => bar.setNumber);
        for (let i = 1; i <= 8; ++i) {
            if (crossBarsSetNumbers.indexOf(i) < 0) {
                buttons.push(<button key={i} onClick={() => { this.addBar(i) }}>Add {i}</button>);
            }
        }
        return buttons;
    }

    render() {
        console.log('flurp state in render: ', this.state, this.props);
        return (
            <div>
                {this.state &&
                    <Row>
                        <Col xs={8}>
                            <Grid>
                                <Row>
                                    <Col xs={12}>
                                        {this.state.mode === 'view' && this.state.characterSet.name}
                                        {(this.state.mode === 'create' || this.state.mode === 'edit') &&
                                            <div>
                                                <label htmlFor="set-name">Set Name:</label>
                                                <input id="set-name" type="text" onChange={this.onSetNameChange} value={(this.state.characterSet) ? this.state.characterSet.name : ''} />
                                            </div>
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        {this.state.mode === 'view' && this.state.characterSet.description}
                                        {(this.state.mode === 'create' || this.state.mode === 'edit') &&
                                            <div>
                                                <label htmlFor="set-description">Set Description:</label>
                                                <br />
                                                <textarea id="set-description" onChange={this.onSetDescriptionChange} value={(this.state.characterSet) ? this.state.characterSet.description : ''} />
                                            </div>
                                        }
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
                                                    {bar.description &&
                                                        <Row>
                                                            <Col xs={12}>
                                                                {bar.description}
                                                            </Col>
                                                        </Row>
                                                    }
                                                    <CrossHotBar bar={bar} actionsData={this.props.actionsData} moveAction={this.moveAction} clearAction={this.clearAction} />
                                                </div>
                                            )
                                        })}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <h4>Add Bars</h4>
                                        {this.renderAddBarButtons()}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <h4>Actions</h4>
                                        {(this.state.mode === 'edit' || this.state.mode === 'create') && 
                                          <button onClick={() => {this.props.saveKit(this.state.characterSet, this.props.authentication.uid)}}>Save</button>
                                        }
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
                        <Col xs={4}>
                            {this.state.characterSet && this.state.characterSet.job && (this.state.mode === 'create' || this.state.mode === 'edit') &&
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
    saveKit: PropTypes.func.isRequired,
    clearCurrentKit: PropTypes.func.isRequired
}

export default DragDropContext(HTML5Backend)(CharacterSet);
