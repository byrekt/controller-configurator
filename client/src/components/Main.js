import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Browse from '../containers/Browse';
import UserKits from '../containers/UserKits';
import CharacterSet from '../containers/CharacterSet';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const ContentContainer = styled('div') `

  margin-top: 1rem;
  
  .fancy-button {
    border: none;
    border-radius: 21px;
    line-height: .5rem;
    background-color: transparent;
    color: white;
    margin-right: 1rem;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.8);
    width: 14rem;

    &:active, &:hover {
      background-color: rgba(155, 155, 155, 0.3);
      color: white;
    }
  }
`

/**
 * 
  
 */

/**
 * Contains all of the routing logic for the application and also any CSS rules that are 
 * global for the app outside of the header.
 */
class Main extends Component {

  render() {
    return (
      <ContentContainer>
        <Row>
          <Col xs={12}>
            <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route path={'/browse'} component={Browse} />
              <Route path={'/userKits/:uid'} component={UserKits} />
              <Route path={'/kits/:kitId'} component={CharacterSet} />
              <Route path={'/newKit'} component={CharacterSet} />
            </Switch>
          </Col>
        </Row>
      </ContentContainer>
    );
  }
}

export default Main;
