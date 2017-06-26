import React, { Component } from 'react';
import CharacterSet from '../components/CharacterSet';
import set from '../mocks/summonerSet';

class Summoner extends Component {
  render() {
    return (
      <section id="astrologian-guide">
        <CharacterSet name={set.name} description={set.description} crossBars={set.crossBars} />
      </section>
    );
  }
}

export default Summoner;
