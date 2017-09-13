import React, { Component } from 'react';
import './Beats.css';

class Beats extends Component {
    constructor(props){
        super(props);
        this.state = { beats: props.beats, title: props.title };
    }
    render(props) {
        const title = this.state.title;
        var beats = this.state.beats.map((b,i)=>{
            return <div key={ 'b'+i } className={ b ? 'beat' : '' } onClick={ (e)=>this.props.onClick(i) } />
        });
        return (
            <div className="SeqTrack">
                <div className="Title">{ title }</div>
                <div className="Beats">{ beats }</div>
            </div>
        );
    }
}

export default Beats;
