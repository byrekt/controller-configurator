import React, { Component } from 'react';
import Home from './Home';
import Astrologian from './guides/Astrologian';
import Summoner from './guides/Summoner';
import { Switch, Route } from 'react-router-dom';
class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact={true} path='/'  component={Home}/>
          <Route path='/astrologian' component={Astrologian} />
          <Route path='/summoner'  component={Summoner}/>

        </Switch>
      </main>
    );
  }
}

export default Main;
