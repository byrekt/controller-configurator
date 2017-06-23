import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import PropTypes from 'prop-types';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import { JOB_ORDER } from '../constants/DefaultValues';

const PaletteContainer = styled('section') `
  .panel {
    max-height: 85vh;
    position: fixed;
    width: 25vw;
    overflow: hidden;
  }

  .palette-actions-container {

    .palettes {
      overflow-y: scroll;
      max-height: 65vh;
      .group-container {
        .palette-content {
          display: flex;
          flex-wrap: wrap;


          >div {
            margin: 5px;
            height: 38px;
            width: 38px;
            >div {
              >img {
                height: 38px;
                width: 38px;
              }
            }
          }
        }
      }
    }
  }
`;

class Palette extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPaletteId: this.props.paletteId
    }

    props.onJobChange(this.props.paletteId);
  }

  // Change this to a lifecycle method that WON't infinitely rerender.
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    if (nextProps.paletteId !== this.state.selectedPaletteId) {
      this.setState({
        selectedPaletteId: nextProps.paletteId
      })
      nextProps.onJobChange(nextProps.paletteId);
    }
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
  // TODO Make the palette an affixed container
  render() {
    return (
      <PaletteContainer>
        <Panel>
          <section className="palette-actions-container">
            <header>
              <h2>
                {this.props.jobs[this.state.selectedPaletteId] && this.props.jobs[this.state.selectedPaletteId].name}
              </h2>
            </header>
            <section className="palettes">
              {this.getPalettes()}
            </section>
          </section>
        </Panel>
      </PaletteContainer>
    );
  }
}


Palette.propTypes = {
  jobs: PropTypes.object,
  jobActions: PropTypes.object,
  paletteId: PropTypes.string,
  onJobChange: PropTypes.func.isRequired
};
Palette.defaultProps = {
  jobs: {},
  jobActions: {}
}

export default Palette;
