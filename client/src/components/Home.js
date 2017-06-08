import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'; 
import CharacterSet from '../containers/CharacterSet';

class Home extends Component {
  render() {
    return (
      <div>
        Home page content
        <CharacterSet params={{kitId:0}}/>
      </div>
    );
  }
}

export default Home;
