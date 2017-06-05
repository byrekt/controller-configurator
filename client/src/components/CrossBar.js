import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Cross from './Cross';
import PropTypes from 'prop-types';

const CrossContainer = styled('section') `
  display: flex;
`;
class CrossBar extends Component {

  render() {

    let description;

    if (this.props.description) {
      description =
        <Row>
          <Col xs={12}>
            {this.props.description}
          </Col>
        </Row>;
    }

    return (
      <div>
        <Row>
          <Col xs={12} className="center-block">
            <h4>
            {this.props.name}
            </h4>
          </Col>
        </Row>
        {description}
        <Row>
          <Col xs={12}>
            <CrossContainer>
              <Cross/>
              <Cross/>
              <Cross/>
              <Cross/>
              {/*{this.props.crosses.map((cross, index) => <Cross key={`cross-${index}`} topIcon={cross.topIcon} rightIcon={cross.rightIcon} bottomIcon={cross.bottomIcon} leftIcon={cross.leftIcon} />)}*/}
            </CrossContainer>
          </Col>
        </Row>
      </div>
    );
  }
}

CrossBar.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  crosses: PropTypes.arrayOf(Object)
}

export default CrossBar;
