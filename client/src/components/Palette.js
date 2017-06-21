import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import PropTypes from 'prop-types';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import { JOB_ORDER } from '../constants/DefaultValues';

const PaletteContainer = styled('section') `

  .palette-job-buttons {
    button {
      padding: 0;
      border: none;

      img {
        height: 42px;
        width: 42px;
      }
    }

  }


  .palette-actions-container {
    clear: right;

    .group-container {
      text-align: center;
      .palette-content {
        display: flex;
        flex-wrap: wrap;


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
    return Object.keys(this.props.jobActions).map((group) => {
      // Only show the group if there are actions in it.
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

  handleChange(palette) {
    this.setState({ selectedPaletteId: palette });
    this.props.onJobChange(palette);
  }

  render() {
    return (
      <PaletteContainer>
        <Panel>
          <ButtonGroup className="palette-job-buttons">
            {JOB_ORDER.map((job) => {
              return (
                <Button key={job} onClick={() => { this.handleChange(job) }}>
                  <img src={`/icons/jobs/${job}.png`} />
                </Button>
              )
            })}
          </ButtonGroup>

          <section className="palette-actions-container">
            <header>
              <h2>
                {this.props.jobs[this.state.selectedPaletteId] && this.props.jobs[this.state.selectedPaletteId].name}
              </h2>
            </header>
            {this.getPalettes()}
          </section>
        </Panel>
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
