import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'; 
import Palette from '../containers/Palette';
import CharacterSet from '../containers/CharacterSet';

class Home extends Component {
  render() {
    return (
      <Grid>
        Home page content
        <Palette />
        <CharacterSet setId={1}/>
      </Grid>
    );
  }
}

export default Home;
