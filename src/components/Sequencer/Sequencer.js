import React, { Component } from 'react';
import './Sequencer.css';

import Time from './Time.js';
import Track from './Track.js';
import Beats from './Beats.js';

class Sequencer extends Component {
    constructor(props){

        super(props);

        var tracks = props.sounds.map((sound)=>{
            return {
                title: sound.title,
                sound: sound.sound,
                beats: [
                    false,false,false,false,false,false,false,false,
                    false,false,false,false,false,false,false,false,
                    false,false,false,false,false,false,false,false,
                    false,false,false,false,false,false,false,false]
            }
        });

        this.state = { tracks: tracks };
        this.toggleBeat = this.toggleBeat.bind(this);

        var currentTime = 0;
        var lastTime = (new Date()).getTime();
        var delta = 0;
        var deltaBeat = 0;
        var deltaLoop = 0;
        var beatCounter = 0;

        var self = this;

        var play = function(){

            requestAnimationFrame(play);

            currentTime = (new Date()).getTime();

            delta = (currentTime - lastTime);
            deltaBeat += delta;
            deltaLoop += delta;
            
            if (deltaBeat > 7500/32) {
                self.toggleBeat(0,beatCounter);
                beatCounter++;
                deltaBeat = deltaBeat - 7500/32;
            }

            if (deltaLoop > 7500) {
                deltaLoop = beatCounter = 0;
            }

            lastTime = currentTime;

        }

        play();

    }

    toggleBeat(track, i){
        var tracks = this.state.tracks;
        tracks[track].beats[i] = !tracks[track].beats[i];
        this.setState({ tracks: tracks });
    }

    render(props) {

        var tracks = this.state.tracks.map((b)=>{
            return <Track key={ b.title } title={ b.title } />
        });

        var beats = this.state.tracks.map((b,t)=>{
            return <Beats key={ b.title } beats={ b.beats } onClick={ (i)=>{ this.toggleBeat(t, i); } } />
        });

        return (
            <div className="Sequencer">
                <div className="TrackList">{ tracks }</div>
                <div className="TrackBeats">
                    { beats }            
                    <Time></Time>
                </div>
            </div>
        );
    }
}

export default Sequencer;
