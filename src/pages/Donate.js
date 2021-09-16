import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import * as config from '../config.json';

function ImageCard(props) {
    let image = <Col xs={6} xl={4}><img src={props.data.img} style={{width: "30vw", height: "auto"}} /></Col>;
    let text = <Col xs={6} xl={4}><div style={{margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "1vw", width: "30vw"}}><span style={{fontSize: "1.6vw"}}>{props.data.name}</span><p>{props.data.desc}</p><a href={props.data.link}>Donate Here</a></div></Col>;
    return (
        <Row style={{margin: "10rem 0"}}>
            <Col xs={0} xl={2}/>
            {props.left ? image : text}
            {props.right ? image : text}
            <Col xs={0} xl={2}/>
        </Row>
    )
}

class Donate extends Component {
  render() {
    return (
      <>
        {config.default.data.charities.map((charity,index) => <ImageCard right={index % 2 == 1} left={index % 2 == 0} data={charity}/>)}
      </>
    )
  }
}

export default Donate;
