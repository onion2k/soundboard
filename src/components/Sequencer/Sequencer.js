import React, { Component } from 'react';
import './Sequencer.css';

import Time from './Time.js';
import Track from './Track.js';
import Beats from './Beats.js';

class Sequencer extends Component {
    constructor(){

        super();

        this.state = {
            tracks: [
                { title: 'ARP 120', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Beats 110', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Beats 130', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Bell 120', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Clave', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Drum 125', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'jBass 1', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'jBass 2', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'jSynth', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Juno Bell', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Kick 1', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Kick 2', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Ober 110', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Open Beat', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Open Hat', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] },
                { title: 'Rim', beats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] }
            ]
        }

    }

    render(props) {

        var tracks = this.state.tracks.map((b)=>{
            return <Track title={ b.title } />
        });
        var beats = this.state.tracks.map((b,i)=>{
            return <Beats beats={ b.beats } />
        });

        return (
            <div className="Sequencer">

                <div className="TrackList">
                    { tracks }
                </div>

                <div className="TrackBeats">
                    { beats }            
                    <Time></Time>
                </div>

            </div>
        );
    }
}

export default Sequencer;
