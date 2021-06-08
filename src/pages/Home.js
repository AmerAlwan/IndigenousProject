import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import HorizontalAutoScrollList from '../components/HorizontalAutoScrollList';
import HomeStats from '../components/HomeStats';

class Home extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
            <h2> Welcome to home page! </h2>
            <HorizontalAutoScrollList/>
            <HomeStats/>
        </Col>
      </Row>
    )
  }
}

export default Home;
