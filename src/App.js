import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Settings from './components/Settings/Settings';
import Tile from './components/Tile/Tile';

class App extends Component {

    constructor() {
        super();
        const sounds = [
            { sound: 'sounds/arp_120.ogg', background: 'images/car.jpg' },
            { sound: 'sounds/beat_110.ogg', background: 'images/lights.jpg' },
            { sound: 'sounds/beat_130.ogg', background: 'images/man.jpg' },
            { sound: 'sounds/bell-120.ogg', background: 'images/vhs.jpg' },
            { sound: 'sounds/clave.ogg', background: 'images/triangle.jpg' },
            { sound: 'sounds/drum_125.ogg', background: 'images/rad.jpg' },
            { sound: 'sounds/jbass1_125.ogg', background: 'images/hand.jpg' },
            { sound: 'sounds/jbass2_125.ogg', background: 'images/helmet.png' },
            { sound: 'sounds/jsynth_125.ogg', background: 'images/plant.jpg' },
            { sound: 'sounds/Juno_Bell.ogg', background: 'images/abstract.jpg' },
            { sound: 'sounds/Kick01.ogg', background: 'images/speed.jpg' },
            { sound: 'sounds/Kick13.ogg', background: 'images/square.jpg' },
            { sound: 'sounds/ober_110.ogg', background: 'images/synthwave2.jpg' },
            { sound: 'sounds/open_beat.ogg', background: 'images/palm.jpg' },
            { sound: 'sounds/Openhat02.ogg', background: 'images/pentagon.jpg' },
            { sound: 'sounds/rim.ogg', background: 'images/japan.jpg' }
        ]
        this.board = sounds.map((sound)=>{ return <Tile key={sound.background} sound={sound.sound} background={sound.background} /> })
    }

    render() {
        return (
            <div className="App">
                <Header>New Retro Synthboard</Header>
                <div className="Soundboard">
                    { this.board }
                </div>
                <Settings></Settings>
            </div>
        );
    }
}

export default App;
