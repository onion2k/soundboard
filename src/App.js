import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sequencer from './components/Sequencer/Sequencer';
import Settings from './components/Settings/Settings';
import Tile from './components/Tile/Tile';

class App extends Component {

    constructor() {
        super();
        this.state = {
            sounds: [
                { title: 'ARP 120', sound: 'sounds/arp_120.ogg', background: 'images/car.jpg' },
                { title: 'beat_110', sound: 'sounds/beat_110.ogg', background: 'images/lights.jpg' },
                { title: 'beat_130', sound: 'sounds/beat_130.ogg', background: 'images/man.jpg' },
                { title: 'bell-120', sound: 'sounds/bell-120.ogg', background: 'images/vhs.jpg' },
                { title: 'clave', sound: 'sounds/clave.ogg', background: 'images/triangle.jpg' },
                { title: 'drum_125', sound: 'sounds/drum_125.ogg', background: 'images/rad.jpg' },
                { title: 'jbass1_125', sound: 'sounds/jbass1_125.ogg', background: 'images/hand.jpg' },
                { title: 'jbass2_125', sound: 'sounds/jbass2_125.ogg', background: 'images/helmet.png' },
                { title: 'jsynth_125', sound: 'sounds/jsynth_125.ogg', background: 'images/plant.jpg' },
                { title: 'Juno_Bell', sound: 'sounds/Juno_Bell.ogg', background: 'images/abstract.jpg' },
                { title: 'Kick01', sound: 'sounds/Kick01.ogg', background: 'images/speed.jpg' },
                { title: 'Kick13', sound: 'sounds/Kick13.ogg', background: 'images/square.jpg' },
                { title: 'ober_110', sound: 'sounds/ober_110.ogg', background: 'images/synthwave2.jpg' },
                { title: 'open_beat', sound: 'sounds/open_beat.ogg', background: 'images/palm.jpg' },
                { title: 'Openhat02', sound: 'sounds/Openhat02.ogg', background: 'images/pentagon.jpg' },
                { title: 'rim', sound: 'sounds/rim.ogg', background: 'images/japan.jpg' }
            ]
        }

        this.board = this.state.sounds.map((sound)=>{ return <Tile key={sound.background} sound={sound.sound} background={sound.background} /> })
    }

    render() {
        return (
            <div className="App">
                <Header>New Retro Synthboard</Header>
                <div className="Soundboard">{ this.board }</div>
                <Sequencer sounds={ this.state.sounds }></Sequencer>
                <Settings></Settings>
            </div>
        );
    }
}

export default App;
