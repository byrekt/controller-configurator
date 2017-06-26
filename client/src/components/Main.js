import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Browse from '../containers/Browse';
import UserKits from '../containers/UserKits';
import CharacterSet from '../containers/CharacterSet';
import { Grid, Row, Col } from 'react-bootstrap';
/**
 * Contains all of the routing logic for the application.
 */
class Main extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <main>
              <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route path={'/browse'} component={Browse} />
                <Route path={'/userKits/:uid'} component={UserKits} />
                <Route path={'/kits/:kitId'} component={CharacterSet} />
                <Route path={'/newKit'} component={CharacterSet} />
              </Switch>
            </main>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Main;
