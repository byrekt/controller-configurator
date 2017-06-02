import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import PropTypes from 'prop-types';

const CrossContainer = styled('section')`
  display: flex;
  margin: 0.25rem;

  .middle-icons {
    display: flex;
    flex-direction: column;
  }
  .left-icon, .right-icon {
    align-self: center;
  }

  .left-icon {
    margin-right: 2px;
  }
  .right-icon {
    margin-left: 2px;
  }
`;
class Cross extends Component {

  render() {
    return (
      <CrossContainer className="cross">
        <div className="left-icon">
          <Icon icon={this.props.leftIcon}/>
        </div>
        <div className="middle-icons">
          <Icon icon={this.props.topIcon}/>
          <Icon icon={this.props.bottomIcon}/>

        </div>
        <div className="right-icon">
          <Icon icon={this.props.rightIcon}/>
        </div>
      </CrossContainer>
    );
  }
}

Cross.propTypes = {
  topIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  bottomIcon: PropTypes.object,
  leftIcon: PropTypes.object
}

export default Cross;
