import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Browse extends Component {

  componentDidMount() {
    this.props.onFilterSets();
  }
  render() {
    return (
      <div>
        bwowse
      </div>
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
