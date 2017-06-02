import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import PropTypes from 'prop-types';

const PaletteContainer = styled('section') `
  .palette-actions-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 16rem;
    >div {
      margin: 5px;
    }
  }
`;

const getJobPalette = function (job) {
  if (job && job.actions) {
    return job.actions.map((action) => {
      return <Icon key={action.id} icon={action} />
    });
  }
};
class Palette extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPaletteId: 'astrologian'
    }

    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(event) {
    this.setState({ selectedPaletteId: event.target.value });
  }

  render() {
    return (
      <PaletteContainer>
        <select value={this.state.selectedPaletteId} onChange={this.handleChange}>
          {Object.keys(this.props.jobs).map((job) => {
            return <option key={job} value={job}>{job}</option>
          })}
        </select>

        <section className="palette-actions-container">
          {getJobPalette(this.props.jobs[this.state.selectedPaletteId])}
        </section>
      </PaletteContainer>
    );
  }
}


Palette.propTypes = {
  jobMappings: PropTypes.object,
  jobs: PropTypes.object
};
Palette.defaultProps = {
  jobs: {},
  jobMappings: {}
}

export default Palette;
