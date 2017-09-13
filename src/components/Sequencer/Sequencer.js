import React, { Component } from 'react';
import './Sequencer.css';

import TimeLine from './TimeLine.js';
import Beats from './Beats.js';

class Sequencer extends Component {
    constructor(props){

        super(props);

        var tracks = props.sounds.map((sound)=>{
            return {
                title: sound.title,
                sound: sound.sound,
                howl: sound.howl,
                beats: [
                    false,false,false,false,false,false,false,false,
                    false,false,false,false,false,false,false,false,
                    false,false,false,false,false,false,false,false,
                    false,false,false,false,false,false,false,false]
            }
        });

        this.state = { tracks: tracks, pos: 0 };
        this.toggleBeat = this.toggleBeat.bind(this);

    }

    toggleBeat(track, i){
        var tracks = this.state.tracks;
        tracks[track].beats[i] = !tracks[track].beats[i];
        this.setState({ tracks: tracks });
    }

    componentDidMount(){

        var currentTime = 0;
        var lastTime = (new Date()).getTime();
        var delta = 0;
        var deltaBeat = 10000;
        var deltaLoop = 0;
        var beatCounter = 0;

        var self = this;
    
        var play = ()=>{
    
            requestAnimationFrame(play);
    
            currentTime = (new Date()).getTime();
    
            delta = (currentTime - lastTime);
            deltaBeat += delta;
            deltaLoop += delta;
            
            if (deltaLoop > 7500) {
                deltaLoop = beatCounter = 0;
            }
    
            if (deltaBeat > 7500/32) {
                self.state.tracks.forEach((track)=>{
                    if (track.beats[beatCounter]===true) {
                        track.howl.play();
                    }
                });                
                deltaBeat = deltaBeat - 7500/32;
                beatCounter++;
            }
    
            lastTime = currentTime;

            this.setState({ pos: deltaLoop })
    
        }

        play();

    }

    render(props) {


        var beats = this.state.tracks.map((b,t)=>{
            return <Beats key={ b.title } title={ b.title } beats={ b.beats } onClick={ (i)=>{ this.toggleBeat(t, i); } } />
        });

        return (
            <div className="Sequencer">
                <div className="Track">Track</div>
                <div className="TrackBeats">
                    { beats }            
                    <TimeLine pos={ this.state.pos }></TimeLine>
                </div>
            </div>
        );
    }
}

export default Sequencer;
