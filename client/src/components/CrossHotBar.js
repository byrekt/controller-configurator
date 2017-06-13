import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from './Icon';
import styled from 'styled-components';
import ActionContainer from './ActionContainer';
const positions = [
    'LAD',
    'LAL',
    'LAR',
    'LAU',
    'LDD',
    'LDL',
    'LDR',
    'LDU',
    'RAD',
    'RAL',
    'RAR',
    'RAU',
    'RDD',
    'RDL',
    'RDR',
    'RDU'
];
const CrossContainer = styled('section') `
  display: flex;

  .cross {
    display: flex;
      margin: 0.25rem;

      .middle-icons {
        display: flex;
        flex-direction: column;

        > div {
          margin: 2px 0;
        }
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

class CrossHotBar extends Component {

    constructor(props) {
        super(props);
        this.state = this.getIconsState(props.bar, props.actionsData);
    }

    componentWillReceiveProps(nextProps) {

        const bar = nextProps.bar;
        const actions = nextProps.actionsData;

        let actionState = this.getIconsState(bar, actions);

        this.setState(actionState);
    }

    getIconsState(bar, actionsData) {
        let actionState = {};
        positions.forEach((position) => {
            const icon = (bar[position]) ? actionsData[bar[position].id] : null;

            if (icon) {
                icon.macroInfo = (bar[position].macroInfo) ? bar[position].macroInfo : null;

                actionState[position] = icon;
            }
        }); 

        return actionState;
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} className="center-block">
                        <h4>
                            Set {this.props.bar.setNumber}
                        </h4>
                    </Col>
                </Row>
                {this.props.bar.description && <Row>
                    <Col xs={12}>
                        {this.props.bar.description}
                    </Col>
                </Row>}
                <Row>
                    <Col xs={12}>
                        <CrossContainer>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LDL"} setNumber={this.props.bar.setNumber}>
                                        {this.state.LDL && <Icon icon={this.state.LDL} position={"LDL"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LDU"} setNumber={this.props.bar.setNumber}>
                                        {this.state.LDU && <Icon icon={this.state.LDU} position={"LDU"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                    <ActionContainer moveAction={this.props.moveAction} position={"LDD"} setNumber={this.props.bar.setNumber}>
                                        {this.state.LDD && <Icon icon={this.state.LDD} position={"LDD"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LDR"} setNumber={this.props.bar.setNumber}>
                                        {this.state.LDR && <Icon icon={this.state.LDR} position={"LDR"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                            </div>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LAL"} setNumber={this.props.bar.setNumber}>
                                        {this.state.LAL && <Icon icon={this.state.LAL} position={"LAL"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LAU"} setNumber={this.props.bar.setNumber}>
                                        {this.state.LAU && <Icon icon={this.state.LAU} position={"LAU"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                    <ActionContainer moveAction={this.props.moveAction} position={"LAD"} setNumber={this.props.bar.setNumber}>
                                        {this.state.LAD && <Icon icon={this.state.LAD} position={"LAD"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LAR"} setNumber={this.props.bar.setNumber}>
                                        {this.state.LAR && <Icon icon={this.state.LAR} position={"LAR"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                            </div>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RDL"} setNumber={this.props.bar.setNumber}>
                                        {this.state.RDL && <Icon icon={this.state.RDL} position={"RDL"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RDU"} setNumber={this.props.bar.setNumber}>
                                        {this.state.RDU && <Icon icon={this.state.RDU} position={"RDU"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                    <ActionContainer moveAction={this.props.moveAction} position={"RDD"} setNumber={this.props.bar.setNumber}>
                                        {this.state.RDD && <Icon icon={this.state.RDD} position={"RDD"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RDR"} setNumber={this.props.bar.setNumber}>
                                        {this.state.RDR && <Icon icon={this.state.RDR} position={"RDR"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                            </div>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RAL"} setNumber={this.props.bar.setNumber}>
                                        {this.state.RAL && <Icon icon={this.state.RAL} position={"RAL"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RAU"} setNumber={this.props.bar.setNumber}>
                                        {this.state.RAU && <Icon icon={this.state.RAU} position={"RAU"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                    <ActionContainer moveAction={this.props.moveAction} position={"RAD"} setNumber={this.props.bar.setNumber}>
                                        {this.state.RAD && <Icon icon={this.state.RAD} position={"RAD"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RAR"} setNumber={this.props.bar.setNumber}>
                                        {this.state.RAR && <Icon icon={this.state.RAR} position={"RAR"} setNumber={this.props.bar.setNumber} />}
                                    </ActionContainer>
                                </div>
                            </div>
                        </CrossContainer>
                    </Col>
                </Row>
            </div>
        )
    }
}

CrossHotBar.propTypes = {
    bar: PropTypes.object,
    actionsData: PropTypes.object
};

export default CrossHotBar;