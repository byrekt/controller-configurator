import React, { Component } from 'react';
import Icon from './Icon';
import CharacterSet from '../containers/CharacterSet';
import PropTypes from 'prop-types';

const ViewKit = ({ kitId, user }) => {
  return (
    <CharacterSet setId={kitId} user={user}/>
  )
}

ViewKit.propTypes = {
  kitId: PropTypes.number,
  user: PropTypes.string
}

export default CharacterSet;
