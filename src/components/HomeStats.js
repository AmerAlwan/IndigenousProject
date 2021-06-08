import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import * as config from '../config.json'
import '../css/content-box.css';

function Stat(props) {
    return (<Row> <Col xs={12}><span style={{fontWeight:"heavy", position: "inline", margin: "1rem"}}>{props.title + ": "}</span><span style={{position: "inline"}}>{props.text}</span></Col></Row>);
}

class HomeStats extends Component {
    constructor(props) {
        super(props);
        this.state = config.default.data.stats;
    }

    render() {
        return (
            <>
                <div className="content-box" style={{maxWidth: "20rem", padding: "0.5rem"}}>
                    <div className="content-box-title">Stats</div>
                    <div style={{marginLeft: "0.5rem"}}>
                        <Stat title="Attendees" text={this.state.attendees}/>
                        <Stat title="Total Deaths" text={this.state.total_deaths}/>
                        <Stat title="Documented Deaths" text={this.state.documented_deaths}/>
                        <Stat title="Total Schools that Operated" text={this.state.total_schools_that_operated}/>
                        <Stat title="When Schools Operated" text={this.state.date_range}/>
                        <Stat title="First School" text={this.state.first_school}/>
                        <Stat title="Last School" text={this.state.last_school}/>
                    </div>
                </div>
            </>
        )
    }
}

export default HomeStats;