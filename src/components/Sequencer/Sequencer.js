import React, { Component } from 'react';
import './Sequencer.css';

import Time from './Time.js';
import Track from './Track.js';
import Beats from './Beats.js';

class Sequencer extends Component {
  render(props) {
    return (
        <div className="Sequencer">

            <div className="TrackList">

                <Track title="ARP 120" beats={null}></Track>
                <Track title="Beats 110" beats={null}></Track>
                <Track title="Beats 130" beats={null}></Track>
                <Track title="Bell 120" beats={null}></Track>

                <Track title="Clave" beats={null}></Track>
                <Track title="Drum 125" beats={null}></Track>
                <Track title="jBass 1" beats={null}></Track>
                <Track title="jBass 2" beats={null}></Track>

                <Track title="jSynth" beats={null}></Track>
                <Track title="Juno Bell" beats={null}></Track>
                <Track title="Kick 1" beats={null}></Track>
                <Track title="Kick 2" beats={null}></Track>

                <Track title="Ober 110" beats={null}></Track>
                <Track title="Open Beat" beats={null}></Track>
                <Track title="Open Hat" beats={null}></Track>
                <Track title="Rim" beats={null}></Track>

            </div>

            <div className="TrackBeats">

                <Beats title="ARP 120" beats={null}></Beats>
                <Beats title="Beats 110" beats={null}></Beats>
                <Beats title="Beats 130" beats={null}></Beats>
                <Beats title="Bell 120" beats={null}></Beats>

                <Beats title="Clave" beats={null}></Beats>
                <Beats title="Drum 125" beats={null}></Beats>
                <Beats title="jBass 1" beats={null}></Beats>
                <Beats title="jBass 2" beats={null}></Beats>

                <Beats title="jSynth" beats={null}></Beats>
                <Beats title="Juno Bell" beats={null}></Beats>
                <Beats title="Kick 1" beats={null}></Beats>
                <Beats title="Kick 2" beats={null}></Beats>

                <Beats title="Ober 110" beats={null}></Beats>
                <Beats title="Open Beat" beats={null}></Beats>
                <Beats title="Open Hat" beats={null}></Beats>
                <Beats title="Rim" beats={null}></Beats>

                <Time></Time>

            </div>

        </div>
    );
  }
}

export default Sequencer;
