import React, { Component } from 'react';
import CharacterSet from '../components/CharacterSet';
import AstrologianSet from '../mocks/astrologianSet';

class Main extends Component {
  render() {
    return (
      <section id="astrologian-guide">
        <CharacterSet name={AstrologianSet.name} description={AstrologianSet.description} crossBars={AstrologianSet.crossBars} />
      </section>
    );
  }
}

export default Main;
