import React, { Component } from 'react';
import './Beats.css';

class Beats extends Component {
    constructor(props){
        super(props);
        this.state = { beats: props.beats };
        this.toggleBeat = this.toggleBeat.bind(this);
    }
    toggleBeat(i){
        var beats = this.state.beats;
        beats[i] = !beats[i];
        this.setState({ beats: beats });
    }
    render(props) {
        var beats = this.state.beats.map((b,i)=>{
            return <div className={ b ? 'beat' : '' } onClick={ ()=>this.toggleBeat(i) } />
        });
        return (
            <div className="Beats">
                { beats }
            </div>
        );
    }
}

export default Beats;
