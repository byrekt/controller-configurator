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
          <Col xs={8} className="home-page-col">
            <header><h3>News</h3></header>
            <ul>
              <li>
                <section>
                  <header>July 2nd, 2017</header>
                  <p>Reddit user Loksley asked: "Have you considered adding DoH/DoL as well?"<br />
                    My Answer: <br />
                    "Okay this will be a little technical. Originally I planned on having everything. The problem is I need a source of information. I originally started before the job guide came out. I intended on using data ripped from the actual game files like other sites use. Mapping meta data about the actions became a huge struggle though. <br /><br />
                    Then they released the Job Guide. That thing is amazing. The information is very well laid out. I was able to write a script that pulled that information from the HTML and download the icons in an hour. I'm a front-end engineer, so I was able to pick out the structure of the site really easily (thanks to the people that created that job site making it so uniformly structured). It took another hour to update my app to use this newly formatted information. I did all this while waiting on my Rauhban Ex queue to pop.<br /><br />
                    Unfortunately, they only have information for the DoW and DoW jobs. Which is why originally I didn't even have General Actions on there. I had to manually generate those with another script.<br /><br />
                    That being said, though...yes I do want to add them. I just need to take the time to find an easily scrape-able site and make sure I'm not breaking any rules by using their information. I figured Square Enix wouldn't mind me scraping their site because they usually make this information available in their fan-kit...which sadly they don't regularly update."<br /><br />
                  </p>
                </section>
              </li>
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
            <header><h3>Featured Kits</h3></header>
            Right now these are ones that I personally pick. However, once I implement "likes", this will be a breakdown of the highest rated kits per job.<br />
            These two sets are evolutions of my guides from <a href="https://sites.google.com/site/ffxivcontrollerguide/">my SCH/SMN controller guide</a>.
            <ul>
              <li>
                <a href="/kits/-Knuq6PjGWOJc__3APJr">Supernova Squirrel's Summoner Kit</a>
              </li>
              <li>
                <a href="/kits/-KnwCvrp1zxOG-YSrvdU">Supernova Squirrel's Scholar Kit</a>
              </li>
            </ul>

            <br />
            <h4>New kits by me:</h4>
            <ul>
              <li>
                <a href="/kits/-Knq3fD2Oc4z79uj369E">Supernova Squirrel's Astrologian</a>
              </li>
              <li>
                <a href="/kits/-KnqySTYoCFVmlV64iZ8">Supernova Squirrel's Red Mage</a>
              </li>
              <li>
                <a href="/kits/-KntqYVfjVI0u90PPVXp">Supernova Squirrel's Ninja Kit</a>
              </li>
              <li>
                <a href="/kits/-Knu4SJa4jrqTk-4MSz7">MCH Kitarino</a>
              </li>
            </ul>
            <br />
            <h4>Rad kits by others:</h4>
            <br />
            Literally the only Machinist kit right now:<br />
            <a href="/kits/-Knu4SJa4jrqTk-4MSz7">MCH Kitarino</a>
            <br />
            <br />
            Pretty easy Samurai kit by my bro: 
            <br />
            <a href="/kits/-Ko0Tt6yesEOT-eHNmcU">I Am Sam I Am</a>            
            <br />
            <br />
            I'll definitely be using this bard kit by Chena Mang of Tonberry: <br />
            <a href="/kits/-Kny7tPj3jUA6bEftyLP">Song-along</a>
            <br />
            <br />
            Great black mage guide by Clara Uchiha. Would be even better if there wasn't a bug with macros preventing multiple macros with the same icon. 
            <br />
            <a href="/kits/-KnuS_2uQSDP_u2yHAuh">Clara's Actual Black Mage</a>
            <br />
            <br />
            The three next ones by "Who Do You Think I Am?" are awesome tank kits:
            <br />
            <a href="/kits/-Ko-vsZk_Y46wExbSa6Y">DRK Single Hotbar (except stance changes)</a>
            <br />
            <a href="/kits/-KnuqUv_b3ykqpR5tyES">PLD Single Hotbar (except stance changes)</a>
            <br />
            <a href="/kits/-Knup4FwdQS8XVLA-DgT">WAR Single Hotbar (except for stance changes)</a>
            <br />
            <br />
            I love this white mage kit by Mumushu. I may replace my own white mage kit in game with this one.
            <br />
            <a href="/kits/-KnvJY6gkOFrAn843r1R">White Mage</a>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="home-page-col">
            <header><h3>Known Bugs</h3></header>
            <ul>
              <li>
                Swapping actions sometimes doesn't work and just deletes both.
              </li>
              <li>
                Multiple macros can't be created with the same icon on a kit.
              </li>
              <li>
                State of kit page and macro modal doesn't always get cleared out when it should.
              </li>
              <li>
                Saving a new kit doesn't correctly redirect to that kit's page and instead stays on the /newKit page and clears it out. It still saves the kit, but it's frustrating having to go to /userKits to get back to the one you were modifying.
              </li>
            </ul>
          </Col>
          <Col xs={6} className="home-page-col">
            <header><h3>Upcoming Enhancements</h3></header>
            <ul>
              <li>
                Swapping actions sometimes doesn't work and just deletes both.
              </li>
              <li>
                Filtering on browse page
              </li>
              <li>
                Design updates
              </li>
              <li>
                Ability to generate a macro that can be run to generate the cross bars in the game.
              </li>
              <li>
                Ability to clone kits.
              </li>
              <li>
                Make the page more responsive to screen sizes.
              </li>
              <li>
                Make the site work on the PS4 browser.
              </li>
              <li>
                DoH and DoL kits.
              </li>
              <li>
                Ability to delete a kit.
              </li>
              <li>
                Home page will have list of featured kits. There will be two featured kits for each job. One that has the most "likes" of all time, and one that has the most likes in the last month.
              </li>
              <li>
                Ability to "like" kits. This will factor in to sorting and also will be used to figure out which kits are displayed on the home page. 
              </li>
            </ul>
          </Col>
        </Row>
      </HomepageContent>
    );
  }
}

export default Home;
