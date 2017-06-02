import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'; 
import Palette from '../containers/Palette';

class Home extends Component {
  render() {
    return (
      <Grid>
        Home page content

        <Palette />
      </Grid>
    );
  }
}

export default Home;
