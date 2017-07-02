import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { JOB_ORDER } from '../constants/DefaultValues';
import { Button, ButtonGroup } from 'react-bootstrap';

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
    .button-group-jobs {
      display: flex;
      flex-wrap: wrap;
      button {
        padding: 4px;
        border: none;
        background-color: transparent;

        img {
          height: 42px;
          width: 42px;
        }
        &.selected {
          padding: 0px;
          img {
            height: 50px;
            width: 50px; 
          }
        }
      }
    }
    .browse-job-icon {
      height: 3rem;
      margin: -1rem 0;
    }
`;
/**
 * Displays the list of character kits currently viewable. Takes in a
 */
class Browse extends Component {

  state = {
    selectedJob: ''
  }

  constructor(props) {
    super(props);

    this.filterByJob = this.filterByJob.bind(this);
    this.resetJobFilter = this.resetJobFilter.bind(this);
  }

  componentWillMount() {
    this.props.onFilterSets();
  }

  filterByJob(job) {
    this.setState({
      selectedJob: job
    });
    this.props.onFilterSets(job);
  }

  resetJobFilter() {
    this.setState({
      selectedJob: ''
    });
    this.props.onFilterSets();
  }

  render() {
    const kits = this.props.sets;
    return (
      <BrowseContainer>
        <h4>Job Filter</h4>
        <ButtonGroup className="button-group-jobs">
          {JOB_ORDER.map((job) => {
            return (
              <Button key={job} onClick={() => { this.filterByJob(job) }} className={(this.state.selectedJob === job) ? 'selected' : ''}>
                <img src={`/icons/jobs/${job}.png`} alt={`${job} Icon`} />
              </Button>
            )
          })}
        </ButtonGroup>
        <Button onClick={this.resetJobFilter} className="fancy-button">Reset</Button>
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
              <Link to={`/userKits/${kit.creatorId}`}>{kit.creatorName}</Link>
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
