import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CrossBar from './CrossBar';
import PropTypes from 'prop-types';

class CharacterSet extends Component {

  componentDidMount() {
    this.props.onSetChange(this.props.setId);
  }

  renderCrossBars() {
    if (this.props.characterSet.crossBars) {
      return this.props.characterSet.crossBars.map((bar) => <CrossBar key={bar.setNumber} description={bar.description} name={bar.setNumber} crosses={bar.crossBars} />);
    }
  }
  render() {
    if (this.props.characterSet) {
      let description = null;
      if (this.props.characterSet.description) {
        description =
          <Row>
            <Col xs={12}>
              {this.props.characterSet.description}
            </Col>
          </Row>;
      }
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              {this.props.characterSet.name}
            </Col>
          </Row>
          {description}
          <Row>
            <Col xs={12}>
              {this.renderCrossBars()}
            </Col>
          </Row>
        </Grid>
      );
    } else {
      return (<div></div>)
    }
  }
}

CharacterSet.propTypes = {
  setId: PropTypes.number,
  characterSet: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    setId: PropTypes.number,
    crossBars: PropTypes.arrayOf(Object),
  }),
  onSetChange: PropTypes.func.isRequired
}

export default CharacterSet;
