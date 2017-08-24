import React, { Component } from 'react';
import './Beats.css';

class Beats extends Component {
    constructor(props){
        super(props);
        this.state = { beats: props.beats };
    }
    render(props) {
        var beats = this.state.beats.map((b,i)=>{
            return <div key={ 'b'+i } className={ b ? 'beat' : '' } onClick={ (e)=>this.props.onClick(i) } />
        });
        return (
            <div className="Beats">
                { beats }
            </div>
        );
    }
}

export default Beats;
