import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import * as config from '../config.json'
import '../css/content-box.css';

class HomeText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            data: props.data.split("\n").map(data => <p> {data} </p>),
            image: props.image
        };
    }

    render() {
        return (
            <>
                <div className="content-box-none" style={{marginLeft: "2rem"}}>
                    <div className="content-box-title">{this.state.title}</div>
                    <div style={{marginLeft: "0.5rem"}}>
                        <p>
                            {this.state.data}
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default HomeText;