import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from './Icon';
import Palette from '../containers/Palette';
import PropTypes from 'prop-types';

const CrossContainer = styled('section') `
  display: flex;

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

/**
 * Stateless component for rendering a cross hotbar
 * @param {object} actionsData map of all actions
 * @param {number|string} set the # of the bar this corresponds to, sets 1-8
 * @param {string} name The name of the bar
 * @param {string} description The description of the cross hotbar
 *
 * @param {string} LAD The id of the action in the LAD position
 * @param {string} LAL The id of the action in the LAL position
 * @param {string} LAR The id of the action in the LAR position
 * @param {string} LAU The id of the action in the LAU position
 *
 * @param {string} LDD The id of the action in the LDD position
 * @param {string} LDL The id of the action in the LDL position
 * @param {string} LDR The id of the action in the LDR position
 * @param {string} LDU The id of the action in the LDU position
 *
 * @param {string} RAD The id of the action in the RAD position
 * @param {string} RAL The id of the action in the RAL position
 * @param {string} RAR The id of the action in the RAR position
 * @param {string} RAU The id of the action in the RAU position
 *
 * @param {string} RDD The id of the action in the RDD position
 * @param {string} RDL The id of the action in the RDL position
 * @param {string} RDR The id of the action in the RDR position
 * @param {string} RDU The id of the action in the RDU position
 */
const CrossBar = ({ actionsData, set, description, editable, LAD, LAL, LAR, LAU, LDD, LDL, LDR, LDU, RAD, RAL, RAR, RAU, RDD, RDL, RDR, RDU }) => (
  <div>
    <Row>
      <Col xs={12} className="center-block">
        <h4>
          Set {set + 1}
        </h4>
      </Col>
    </Row>
    {description && <Row>
      <Col xs={12}>
        {description}
      </Col>
    </Row>}
    <Row>
      <Col xs={12}>
        {actionsData &&
          <CrossContainer>
            <Cross actionsData={actionsData} set={set} editable={editable} pos={"LD"} down={LDD} left={LDL} right={LDR} up={LDU} />
            <Cross actionsData={actionsData} set={set} editable={editable} pos={"LA"} down={LAD} left={LAL} right={LAR} up={LAU} />
            <Cross actionsData={actionsData} set={set} editable={editable} pos={"RD"} down={RDD} left={RDL} right={RDR} up={RDU} />
            <Cross actionsData={actionsData} set={set} editable={editable} pos={"RA"} down={RAD} left={RAL} right={RAR} up={RAU} />
          </CrossContainer>
        }
      </Col>
    </Row>
  </div>
);

const Cross = ({ actionsData, set, editable, pos, down, left, right, up }) => {
  return (
    <div className="cross">
      <div className="left-icon">
        <Icon icon={actionsData[left.id]} macroInfo={left.macroInfo} isReplaceable={editable} />
      </div>
      <div className="middle-icons">
        <Icon icon={actionsData[up.id]} macroInfo={up.macroInfo} isReplaceable={!editable} />
        <Icon icon={actionsData[down.id]} macroInfo={down.macroInfo} isReplaceable={!editable} />

      </div>
      <div className="right-icon">
        <Icon icon={actionsData[right.id]} macroInfo={right.macroInfo} isReplaceable={!editable} />
      </div>
    </div>
  )
}

class CharacterSet extends Component {

  componentDidMount() {

    this.props.onSetChange(this.props.match.params.kitId);

  }

  componentWillUnmount() {
    this.props.clearCurrentKit();
  }

  render() {
    if (this.props.characterSet) {
      let description = null;
      if (this.props.characterSet.description) {
        description =
          <Row>
            <Col xs={12}>
              {this.props.characterSet.description}
            </Col>
          </Row>;
      }
      return (
        <div>
          <Row>
            <Col xs={8}>
              <Grid>
                <Row>
                  <Col xs={12}>
                    {this.props.characterSet.name}
                  </Col>
                </Row>
                {description}
                <Row>
                  <Col xs={12}>
                    {this.props.characterSet && this.props.characterSet.crossBars && this.props.characterSet.crossBars.map((bar, index) => (
                      <CrossBar key={index}
                        actionsData={this.props.actionsData}
                        set={index}
                        description={bar.description}
                        editable={this.props.characterSet.editable}
                        LAD={bar.LAD}
                        LAL={bar.LAL}
                        LAR={bar.LAR}
                        LAU={bar.LAU}
                        LDD={bar.LDD}
                        LDL={bar.LDL}
                        LDR={bar.LDR}
                        LDU={bar.LDU}
                        RAD={bar.RAD}
                        RAL={bar.RAL}
                        RAR={bar.RAR}
                        RAU={bar.RAU}
                        RDD={bar.RDD}
                        RDL={bar.RDL}
                        RDR={bar.RDR}
                        RDU={bar.RDU}
                      />
                    ))}
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
        </div>
      );
    } else {
      return (<div></div>)
    }
  }
}

CharacterSet.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      kitId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      user: PropTypes.string
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
  actionsData: PropTypes.object,
  onSetChange: PropTypes.func.isRequired,
  clearCurrentKit: PropTypes.func.isRequired
}

CharacterSet.defaultProps = {
  params: {}
}

export default CharacterSet;
