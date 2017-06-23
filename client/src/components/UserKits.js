import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';

/**
 * Renders the list of the current user's kits.
 */
class UserKits extends Component {

  componentWillMount() {
    this.props.onUserKits(this.props.match.params.uid);
  }
  render() {

    const kits = this.props.sets;

    return (
      <Grid>
        {kits && Object.keys(kits).map((kit) => {
          kit = kits[kit];
          return <Row key={kit.kitId}>
            <Col xs={3}>
              <Link to={`/kits/${kit.kitId}`}> {kit.name}</Link>
            </Col>
            <Col xs={3}>
              {kit.job}
            </Col>
            <Col xs={3}>
              {kit.creatorName}
            </Col>
            <Col xs={3}>
              {kit.stars}
            </Col>
          </Row>
        })}
      </Grid>
    );
  }
}
UserKits.propTypes = {
  sets: PropTypes.object,
  onUserKits: PropTypes.func.isRequired
};
UserKits.defaultProps = {
  sets: []
}

export default UserKits;
