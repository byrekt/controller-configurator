import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'; 
import CharacterSet from '../containers/CharacterSet';

class Home extends Component {
  render() {
    return (
      <Grid>
        Home page content
        <CharacterSet setId={0}/>
      </Grid>
    );
  }
}

export default Home;
