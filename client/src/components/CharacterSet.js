import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from './Icon';
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

const CrossBar = ({ actionsData, set, name, description, LAD, LAL, LAR, LAU, LDD, LDL, LDR, LDU, RAD, RAL, RAR, RAU, RDD, RDL, RDR, RDU }) => (
  <div>
    test
    <Row>
      <Col xs={12} className="center-block">
        <h4>
          {name}
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
        {console.log('actions: ', actionsData, LAD)}
        {actionsData &&
          <CrossContainer>
            <Cross set={set} pos={"LD"} down={actionsData[LDD.id]} left={actionsData[LDL.id]} right={actionsData[LDR.id]} up={actionsData[LDU.id]} />
            <Cross set={set} pos={"LA"} down={actionsData[LAD.id]} left={actionsData[LAL.id]} right={actionsData[LAR.id]} up={actionsData[LAU.id]} />
            <Cross set={set} pos={"RD"} down={actionsData[RDD.id]} left={actionsData[RDL.id]} right={actionsData[RDR.id]} up={actionsData[RDU.id]} />
            <Cross set={set} pos={"RA"} down={actionsData[RAD.id]} left={actionsData[RAL.id]} right={actionsData[RAR.id]} up={actionsData[RAU.id]} />
            {/*{this.props.crosses.map((cross, index) => <Cross key={`cross-${index}`} topIcon={cross.topIcon} rightIcon={cross.rightIcon} bottomIcon={cross.bottomIcon} leftIcon={cross.leftIcon} />)}*/}
          </CrossContainer>
        }
      </Col>
    </Row>
  </div>
);

const Cross = ({ set, pos, down, left, right, up }) => (
  <div className="cross">
    
        {console.log('set: ', set, 'pos:', pos, 'left:', left)}
    <div className="left-icon">
      <Icon icon={left} isReplaceable={true} />
    </div>
    <div className="middle-icons">
      <Icon icon={up} isReplaceable={true} />
      <Icon icon={down} isReplaceable={true} />

    </div>
    <div className="right-icon">
      <Icon icon={right} isReplaceable={true} />
    </div>
  </div>
)

class CharacterSet extends Component {

  componentDidMount() {
    this.props.onSetChange(this.props.setId);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
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
                  name={bar.setNumber}
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
      );
    } else {
      return (<div></div>)
    }
  }
}

CharacterSet.propTypes = {
  setId: PropTypes.number,
  characterSet: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    setId: PropTypes.number,
    crossBars: PropTypes.arrayOf(Object),
  }),
  actionsData: PropTypes.object,
  onSetChange: PropTypes.func.isRequired
}

export default CharacterSet;
