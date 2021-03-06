import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import * as config from '../config.json'
import '../css/content-box.css';

function shuffle(array) {
      var currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }

class HorizontalAutoScrollList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: shuffle(config.default.data.names.names.split(',').map((name, index) => <ul style={{float: 'left'}} key={index}>{name}</ul> ))
        }
    }

    render() {
        return (
        <Row>
            <Col xs={12}>
                <h2 style={{margin:"0 0.5rem", textAlign: "center", fontWeight: "bold"}}>{"Children who Died at Residential Schools (2800)"}</h2>
                <div className="" style={{minHeight: "3rem", margin: "auto"}}>
                    <Marquee
                        speed="40"
                        gradientColor={[33, 37, 41]}
                        style={{marginTop: "0.5rem", fontSize: "2rem"}}
                    >
                        {this.state.names}
                    </Marquee>
                </div>
            </Col>
        </Row>
        )
    }
}

export default HorizontalAutoScrollList;