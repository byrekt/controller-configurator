import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';


const HomepageContent = styled('div') `
    
    min-height: 70vh;
    border-radius: 10px;
    border: 7px ridge white;
    background: linear-gradient(#5050cd, #01002d);
    min-height: 80vh;
    padding: 1rem 3rem;
`;
/**
 * This will at one point have the list of the top kits per job and any news for the site.
 */
class Home extends Component {
  render() {
    return (
      <HomepageContent>
        <Row>
          <Col xs={4} className="home-page-col">
            <header><h3>News</h3></header>
            <ul>
              <li>
                <section>
                  <header>June 30th, 2017, part 2</header>
                  <p>Made macro indicators easier to see and hopefully added general actions. We'll see.</p>
                </section>
              </li>
              <li>
                <section>
                  <header>June 30th, 2017</header>
                  <p>Alpha version released...with a lot of known issues. Look over there -> for the list of issues</p>
                </section>
              </li>
            </ul>
          </Col>
          <Col xs={4} className="home-page-col">
            <header><h3>Bugs and Upcoming Enhancements</h3></header>
            <ul>
              <li>
                Swapping actions sometimes doesn't work and just deletes both.
              </li>
              <li>
                General actions like Sprint and Limit Break are not yet available.
              </li>
              <li>
                No way to filter list of kits on the browse page.
              </li>
              <li>
                So many design changes need to be made.
              </li>
              <li>
                Ability to generate a macro that can be run to generate the cross bars in the game.
              </li>
              <li>
                Ability to clone kits.
              </li>
              <li>
                Need to at least make kits viewable in mobile.
              </li>
              <li>
                Make the page more responsive to screen sizes.
              </li>
              <li>
                Try and make the site work on the PS4 browser.
              </li>
            </ul>
          </Col>
          <Col xs={4} className="home-page-col">
            <header><h3>Featured Kits</h3></header>
            <ul>
              <li>Not yet implemented...will implement once ratings are implemented.</li>
            </ul>
          </Col>
        </Row>
      </HomepageContent>
    );
  }
}

export default Home;
