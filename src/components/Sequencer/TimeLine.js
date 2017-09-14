import React, { Component } from 'react';
import './TimeLine.css';

class TimeLine extends Component {

    constructor(props){
        super(props);
        this.state = { pos: props.pos };
    }

    componentWillReceiveProps(nextProps){
        this.setState({ pos: nextProps.pos });
    }

    render(props) {
        let style = { 'right': (90-(this.state.pos/7500)*90)+'%' }
        return (
            <div className="TimeLine" style={ style }>
                <div className="time">{ String(this.state.pos / 1000).padEnd(5,'0') }</div>
            </div>
        );
    }
}

export default TimeLine;
