import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CrossBar from './CrossBar';
import PropTypes from 'prop-types';

class CharacterSet extends Component {
  render() {
    let description = null;
    if (this.props.description) {
      description =
        <Row>
          <Col xs={12}>
            {this.props.description}
          </Col>
        </Row>;
    }
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            {this.props.name}
          </Col>
        </Row>
        {description}
        <Row>
          <Col xs={12}>
            {this.props.crossBars.map((bar) => <CrossBar key={bar.name} description={bar.description} name={bar.name} crosses={bar.crosses} />)}
          </Col>
        </Row>
      </Grid>
    );
  }
}

CharacterSet.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  crossBars: PropTypes.arrayOf(Object)
}

export default CharacterSet;
