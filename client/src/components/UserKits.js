import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-bootstrap';

const BrowseContainer = styled('div') `
    border-radius: 10px;
    border: 7px ridge white;
    background: linear-gradient(#5050cd, #01002d);
    min-height: 80vh;
    padding: 1rem 3rem;
    
    .row {
      border-bottom: 1px solid white;
      padding: 1.5rem 0;
      &.heading {
        border-bottom: 2px solid white;
        padding: 1rem 0 0;
      }
    }
    
    .browse-job-icon {
      height: 3rem;
      margin: -1rem 0;
    }
`;
/**
 * Renders the list of the current user's kits.
 */
class UserKits extends Component {

  componentWillMount() {
    this.props.onUserKits(this.props.match.params.uid);
  }
  render() {

    const kits = this.props.sets;
    const firstKit = kits[Object.keys(kits).filter((kit, index) => index === 0)];
    return (
      <BrowseContainer>
        <h4>Kits created by {firstKit.creatorName}</h4>
        <Row className="heading">
          <Col xs={1}>
            <h5>Job</h5>
          </Col>
          <Col xs={7}>
            <h5>Kit Name</h5>
          </Col>
          <Col xs={4}>
            <h5>Creator</h5>
          </Col>
        </Row>
        {kits && Object.keys(kits).map((kit) => {
          kit = kits[kit];
          return <Row key={kit.kitId}>
            <Col xs={1}>
              <img className="browse-job-icon" src={`/icons/jobs/${kit.job}.png`} alt={`${kit.job} Icon`} />
            </Col>
            <Col xs={7}>
              <Link to={`/kits/${kit.kitId}`}> {kit.name}</Link>
            </Col>
            <Col xs={4}>
              {kit.creatorName}
            </Col>
          </Row>
        })}
      </BrowseContainer>
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
