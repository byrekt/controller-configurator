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

    a {
      color: white;

      &:hover, &:active {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    .row {
      border-bottom: 1px solid white;
      padding: 1.5rem 0;
    }
`;
/**
 * Displays the list of character kits currently viewable. Takes in a
 */
class Browse extends Component {

  componentWillMount() {
    this.props.onFilterSets();
  }
  render() {
    const kits = this.props.sets;
    return (
      <BrowseContainer>
        {kits && Object.keys(kits).map((kit) => {
          kit = kits[kit];
          return <Row key={kit.kitId}>
            <Col xs={6}>
              <Link to={`/kits/${kit.kitId}`}> {kit.name}</Link>
            </Col>
            <Col xs={3}>
              {kit.job}
            </Col>
            <Col xs={3}>
              {kit.creatorName}
            </Col>
          </Row>
        })}
      </BrowseContainer>
    );
  }
}
Browse.propTypes = {
  sets: PropTypes.object,
  onFilterSets: PropTypes.func.isRequired
};
Browse.defaultProps = {
  sets: []
}

export default Browse;
