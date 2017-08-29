import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sequencer from './components/Sequencer/Sequencer';
import Settings from './components/Settings/Settings';
import Tile from './components/Tile/Tile';

import { Howl } from 'howler';

class App extends Component {

    constructor() {
        super();
        this.state = {
            sounds: [
                { title: 'ARP 120', sound: 'sounds/arp_120.ogg', background: 'images/car.jpg', howl: new Howl({src: ['sounds/arp_120.ogg'], preload: true}) },
                { title: 'beat_110', sound: 'sounds/beat_110.ogg', background: 'images/lights.jpg', howl: new Howl({src: ['sounds/beat_110.ogg'], preload: true}) },
                { title: 'beat_130', sound: 'sounds/beat_130.ogg', background: 'images/man.jpg', howl: new Howl({src: ['sounds/beat_130.ogg'], preload: true}) },
                { title: 'bell-120', sound: 'sounds/bell-120.ogg', background: 'images/vhs.jpg', howl: new Howl({src: ['sounds/bell-120.ogg'], preload: true}) },
                { title: 'clave', sound: 'sounds/clave.ogg', background: 'images/triangle.jpg', howl: new Howl({src: ['sounds/clave.ogg'], preload: true}) },
                { title: 'drum_125', sound: 'sounds/drum_125.ogg', background: 'images/rad.jpg', howl: new Howl({src: ['sounds/drum_125.ogg'], preload: true}) },
                { title: 'jbass1_125', sound: 'sounds/jbass1_125.ogg', background: 'images/hand.jpg', howl: new Howl({src: ['sounds/jbass1_125.ogg'], preload: true}) },
                { title: 'jbass2_125', sound: 'sounds/jbass2_125.ogg', background: 'images/helmet.png', howl: new Howl({src: ['sounds/jbass2_125.ogg'], preload: true}) },
                { title: 'jsynth_125', sound: 'sounds/jsynth_125.ogg', background: 'images/plant.jpg', howl: new Howl({src: ['sounds/jsynth_125.ogg'], preload: true}) },
                { title: 'Juno_Bell', sound: 'sounds/Juno_Bell.ogg', background: 'images/abstract.jpg', howl: new Howl({src: ['sounds/Juno_Bell.ogg'], preload: true}) },
                { title: 'Kick01', sound: 'sounds/Kick01.ogg', background: 'images/speed.jpg', howl: new Howl({src: ['sounds/Kick01.ogg'], preload: true}) },
                { title: 'Kick13', sound: 'sounds/Kick13.ogg', background: 'images/square.jpg', howl: new Howl({src: ['sounds/Kick13.ogg'], preload: true}) },
                { title: 'ober_110', sound: 'sounds/ober_110.ogg', background: 'images/synthwave2.jpg', howl: new Howl({src: ['sounds/ober_110.ogg'], preload: true}) },
                { title: 'open_beat', sound: 'sounds/open_beat.ogg', background: 'images/palm.jpg', howl: new Howl({src: ['sounds/open_beat.ogg'], preload: true}) },
                { title: 'Openhat02', sound: 'sounds/Openhat02.ogg', background: 'images/pentagon.jpg', howl: new Howl({src: ['sounds/Openhat02.ogg'], preload: true}) },
                { title: 'rim', sound: 'sounds/rim.ogg', background: 'images/japan.jpg', howl: new Howl({src: ['sounds/rim.ogg'], preload: true}) }
            ]
        }

        this.board = this.state.sounds.map((sound)=>{ return <Tile key={sound.background} sound={sound.sound} background={sound.background} howl={sound.howl} /> })
    }

    render() {
        return (
            <div className="App">
                <Header>New Retro Synthboard</Header>
                <div className="Soundboard">{ this.board }</div>
                <div>Song controls</div>
                <Sequencer sounds={ this.state.sounds }></Sequencer>
                <Settings></Settings>
            </div>
        );
    }
}

export default App;
