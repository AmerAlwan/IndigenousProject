import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import HorizontalAutoScrollList from '../components/HorizontalAutoScrollList';
import HomeStats from '../components/HomeStats';
import HomeText from '../components/HomeText';
import SupportImages from '../components/SupportImages';
import Iframe from 'react-iframe';
import ImageGallery from 'react-image-gallery';
import * as config from '../config.json';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: config.default.data.images.home_gallery
        }
    }
  render() {
    return (
    <>
    <Row style={{marginTop: "-19px", maxHeight: "60rem"}}>
        <Col xs={12}>
            <ImageGallery
                items={ this.state.images }
                lazyLoad
                autoPlay
                disableSwipe
                showThumbnails={ false }
                showFullscreenButton={ false }
                showPlayButton = { false }
            />
        </Col>
    </Row>
    <Row>
        <Col xs={12}>
            <Row>
                <Col xs={12} xl={9} style={{margin: "4rem 0"}}>
                    <h2 style={{textAlign: "center", fontWeight: "bold"}}>{"History"}</h2>
                    <HomeText title="" data={config.default.data.information.history} image=""/>
                </Col>
                <Col xs={12} xl={3} style={{margin: "4rem 0"}}>
                    <h2 style={{textAlign: "center", fontWeight: "bold"}}>{"History Stats"}</h2>
                    <HomeStats/>
                </Col>
            </Row>
        </Col>
    </Row>
    <Row>
        <Col xs={12} style={{margin: "5rem 0"}}>
            <h2 style={{textAlign: "center", fontWeight: "bold"}}>{"Residential Schools in Canada (Interactive Map)"}</h2>
            <Iframe url="https://www.google.com/maps/d/embed?mid=1FQT02WuinFtAe6bgWrJm74G97uie_gA7"
                width="900px"
                height="700px"
                display="block"
                position="relative"
                className="center-frame"
            />
        </Col>
    </Row>
    <Row>
        <Col xs={12} style={{margin: "4rem 0"}}>
            <h2 style={{textAlign: "center", fontWeight: "bold"}}>{"Life"}</h2>
            <HomeText title="" data={config.default.data.information.life} image=""/>
        </Col>
    </Row>
    <Row>
        <Col xs={12} style={{margin: "5rem 0"}}>
            <HorizontalAutoScrollList/>
        </Col>
    </Row>
    <Row>
        <Col xs={12}>
            <SupportImages/>
        </Col>
    </Row>
    </>
    )
  }
}

export default Home;
