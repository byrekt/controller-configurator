import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import PropTypes from 'prop-types';

const PaletteContainer = styled('section') `

  border: 1px solid black;
  padding: 1rem;
  max-width: 25rem;
  .palette-actions-container {
    max-width: 25rem;
    clear: right;

    .group-container {
      text-align: center;
      .palette-content {
        display: flex;
        flex-wrap: wrap;
        width: 24rem;


        >div {
          margin: 5px 5px 5px 0;
        }
      }
    }
  }
`;

class Palette extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPaletteId: this.props.defaultPaletteId
    }
    this.props.onJobChange(this.props.defaultPaletteId);
    this.handleChange = this.handleChange.bind(this);
  }

  getJobPalette(actions) {
    return Object.keys(actions).map((action) => {
      return <Icon key={action} icon={actions[action]} />
    });
  };
  getPalettes() {
    console.log(this.props.jobActions);
    return Object.keys(this.props.jobActions).map((group) => {
      // Only show the group if there are actions in it.
      console.log('group', this.props.jobActions[group]);
      return (
        <section key={group} className="group-container">
          <h3>{group}</h3>
          <div className="palette-content">
            {this.getJobPalette(this.props.jobActions[group])}
          </div>
        </section>
      )
    });
  }

  handleChange(event) {
    this.setState({ selectedPaletteId: event.target.value });
    this.props.onJobChange(event.target.value);
  }

  render() {
    return (
      <PaletteContainer>
        <select value={this.state.selectedPaletteId} onChange={this.handleChange}>
          {Object.keys(this.props.jobs).map((job) => {
            const jobObj = this.props.jobs[job];
            return <option key={job} value={job}>{jobObj.name}</option>
          })}
        </select>

        <section className="palette-actions-container">
          {this.getPalettes()}
        </section>
      </PaletteContainer>
    );
  }
}


Palette.propTypes = {
  jobs: PropTypes.object,
  jobActions: PropTypes.object,
  defaultPaletteId: PropTypes.string,
  onJobChange: PropTypes.func.isRequired
};
Palette.defaultProps = {
  jobs: {},
  jobActions: {}
}

export default Palette;
