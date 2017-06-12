import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from './Icon';
import styled from 'styled-components';
import ActionContainer from './ActionContainer';

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
        const bar = props.bar;
        const actions = props.actionsData;
        let actionState = {};
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
        ]


        positions.forEach((position) => {
          const icon = (bar[position]) ? actions[bar[position].id] : null;

          if (icon) {
            icon.macroInfo = (bar[position].macroInfo) ? bar[position].macroInfo : null;

            actionState[position] = icon;
          }
        })

        if (bar && actions) {
            this.state = actionState;
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} className="center-block">
                        <h4>
                            {/*Set {this.props.bar.id}*/}
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
                                    <ActionContainer>
                                        {this.state.LDL && <Icon icon={this.state.LDL} />}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer>
                                        {this.state.LDU && <Icon icon={this.state.LDU} />}
                                    </ActionContainer>
                                    <ActionContainer>
                                        {this.state.LDD && <Icon icon={this.state.LDD} />}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer>
                                        {this.state.LDR && <Icon icon={this.state.LDR} />}
                                    </ActionContainer>
                                </div>
                            </div>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer>
                                        {this.state.LAL && <Icon icon={this.state.LAL} />}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer>
                                        {this.state.LAU && <Icon icon={this.state.LAU} />}
                                    </ActionContainer>
                                    <ActionContainer>
                                        {this.state.LAD && <Icon icon={this.state.LAD} />}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer>
                                        {this.state.LAR && <Icon icon={this.state.LAR} />}
                                    </ActionContainer>
                                </div>
                            </div>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer>
                                        {this.state.RDL && <Icon icon={this.state.RDL} />}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer>
                                        {this.state.RDU && <Icon icon={this.state.RDU} />}
                                    </ActionContainer>
                                    <ActionContainer>
                                        {this.state.RDD && <Icon icon={this.state.RDD} />}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer>
                                        {this.state.RDR && <Icon icon={this.state.RDR} />}
                                    </ActionContainer>
                                </div>
                            </div>
                            <div className="cross">
                                <div className="left-icon">
                                    <ActionContainer>
                                        {this.state.RAL && <Icon icon={this.state.RAL} />}
                                    </ActionContainer>
                                </div>
                                <div className="middle-icons">
                                    <ActionContainer>
                                        {this.state.RAU && <Icon icon={this.state.RAU} />}
                                    </ActionContainer>
                                    <ActionContainer>
                                        {this.state.RAD && <Icon icon={this.state.RAD} />}
                                    </ActionContainer>
                                </div>
                                <div className="right-icon">
                                    <ActionContainer>
                                        {this.state.RAR && <Icon icon={this.state.RAR} />}
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