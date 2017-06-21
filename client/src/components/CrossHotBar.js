import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
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
        this.state = {
            icons: this.getIconsState(props.bar, props.actionsData)
        }
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            icons: this.getIconsState(nextProps.bar, nextProps.actionsData)
        });
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
                    <Col xs={12}>
                        <CrossContainer>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LDL"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.LDL && <Icon icon={this.state.icons.LDL} position={"LDL"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LDU"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.LDU && <Icon icon={this.state.icons.LDU} position={"LDU"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                    <ActionContainer moveAction={this.props.moveAction} position={"LDD"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.LDD && <Icon icon={this.state.icons.LDD} position={"LDD"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LDR"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.LDR && <Icon icon={this.state.icons.LDR} position={"LDR"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                            </div>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LAL"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.LAL && <Icon icon={this.state.icons.LAL} position={"LAL"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LAU"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.LAU && <Icon icon={this.state.icons.LAU} position={"LAU"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                    <ActionContainer moveAction={this.props.moveAction} position={"LAD"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.LAD && <Icon icon={this.state.icons.LAD} position={"LAD"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"LAR"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.LAR && <Icon icon={this.state.icons.LAR} position={"LAR"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                            </div>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RDL"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.RDL && <Icon icon={this.state.icons.RDL} position={"RDL"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RDU"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.RDU && <Icon icon={this.state.icons.RDU} position={"RDU"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                    <ActionContainer moveAction={this.props.moveAction} position={"RDD"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.RDD && <Icon icon={this.state.icons.RDD} position={"RDD"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RDR"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.RDR && <Icon icon={this.state.icons.RDR} position={"RDR"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                            </div>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RAL"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.RAL && <Icon icon={this.state.icons.RAL} position={"RAL"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RAU"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.RAU && <Icon icon={this.state.icons.RAU} position={"RAU"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                    <ActionContainer moveAction={this.props.moveAction} position={"RAD"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.RAD && <Icon icon={this.state.icons.RAD} position={"RAD"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer moveAction={this.props.moveAction} position={"RAR"} setNumber={this.props.bar.setNumber}>
                                        {this.state.icons.RAR && <Icon icon={this.state.icons.RAR} position={"RAR"} setNumber={this.props.bar.setNumber} clearAction={this.props.clearAction} addMacro={this.props.addMacro}/>}
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