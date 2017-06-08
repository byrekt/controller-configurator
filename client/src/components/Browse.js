import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';

class Browse extends Component {

  componentDidMount() {
    this.props.onFilterSets();
  }
  render() {
    return (
      <Grid>
        {this.props.sets.map((kit, id) => {
          return <Row key={id}>
            <Col xs={4}>
              <Link to={`/kits/view/${kit.setId}`}> {kit.name}</Link>
            </Col>
            <Col xs={4}>
              {kit.job}
            </Col>
            <Col xs={4}>
              {kit.stars}
            </Col>
          </Row>
        })}
      </Grid>
    );
  }
}
Browse.propTypes = {
  sets: PropTypes.array, 
  onFilterSets: PropTypes.func.isRequired
};
Browse.defaultProps = {
  sets: []
}

export default Browse;
