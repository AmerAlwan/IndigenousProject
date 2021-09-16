import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import * as config from '../config.json';
import '../App.css';
import sp0 from '../img/support_img_0.jpg';
import sp1 from '../img/support_img_1.jpg';
import sp2 from '../img/support_img_2.jpg';
import sp3 from '../img/support_img_3.jpg';
import sp4 from '../img/support_img_4.jpg';

function ImageCard(props) {
    let image = <Col xs={6} xl={4}><img src={props.image} style={{width: "30vw", height: "auto"}} /></Col>;
    let text = <Col xs={6} xl={4}><div style={{margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "1.8vw", fontStyle: "italic", width: "30vw"}}>{props.text}</div></Col>;
    return (
        <Row style={{margin: "10rem 0"}}>
            <Col xs={0} xl={2}/>
            {props.left ? image : text}
            {props.right ? image : text}
            <Col xs={0} xl={2}/>
        </Row>
    )
}

class SupportImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [sp0, sp1, sp2, sp3, sp4]
        }
    }

  render() {
  console.log(this.state.images);
    return (
    <>
    <Row>
        <Col xs={12}>
            <h3 style={{margin:"4rem", marginBottom: "-4rem", textAlign: "center", fontWeight: "bold"}}>{"We at the Growing Together Club send our Deepest Condolences!"}</h3>
            {this.state.images.map((name, index) => <ImageCard image={name} text={'"' + config.default.data.support_images["support_img_" + index].text + '"'} right={index % 2 == 1} left={index % 2 == 0}/>)}
        </Col>
    </Row>
    </>
    )
  }
}

export default SupportImages;