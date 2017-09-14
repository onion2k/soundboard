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
                { title: 'bongohi', sound: 'sounds/bongohi.ogg', background: 'images/car.jpg', howl: new Howl({src: ['sounds/bongohi.ogg'], preload: true}) },
                { title: 'bongolo', sound: 'sounds/bongolo.ogg', background: 'images/lights.jpg', howl: new Howl({src: ['sounds/bongolo.ogg'], preload: true}) },
                { title: 'clap', sound: 'sounds/clap.ogg', background: 'images/man.jpg', howl: new Howl({src: ['sounds/clap.ogg'], preload: true}) },
                { title: 'clap1', sound: 'sounds/clap1.ogg', background: 'images/vhs.jpg', howl: new Howl({src: ['sounds/clap1.ogg'], preload: true}) },
                { title: 'clap2', sound: 'sounds/clap2.ogg', background: 'images/triangle.jpg', howl: new Howl({src: ['sounds/clap2.ogg'], preload: true}) },
                { title: 'cow', sound: 'sounds/cow.ogg', background: 'images/rad.jpg', howl: new Howl({src: ['sounds/cow.ogg'], preload: true}) },
                { title: 'plang', sound: 'sounds/plang.ogg', background: 'images/hand.jpg', howl: new Howl({src: ['sounds/plang.ogg'], preload: true}) },
                { title: 'ride', sound: 'sounds/ride.ogg', background: 'images/helmet.png', howl: new Howl({src: ['sounds/ride.ogg'], preload: true}) },
                { title: 'snare1', sound: 'sounds/snare1.ogg', background: 'images/plant.jpg', howl: new Howl({src: ['sounds/snare1.ogg'], preload: true}) },
                { title: 'snare2', sound: 'sounds/snare2.ogg', background: 'images/abstract.jpg', howl: new Howl({src: ['sounds/snare2.ogg'], preload: true}) },
                { title: 'snare3', sound: 'sounds/snare3.ogg', background: 'images/speed.jpg', howl: new Howl({src: ['sounds/snare3.ogg'], preload: true}) },
                { title: 'snare4', sound: 'sounds/snare4.ogg', background: 'images/square.jpg', howl: new Howl({src: ['sounds/snare4.ogg'], preload: true}) },
                { title: 'snare5', sound: 'sounds/snare5.ogg', background: 'images/synthwave2.jpg', howl: new Howl({src: ['sounds/snare5.ogg'], preload: true}) },
                { title: 'tambourine', sound: 'sounds/tambourine.ogg', background: 'images/palm.jpg', howl: new Howl({src: ['sounds/tambourine.ogg'], preload: true}) },
                { title: 'whistle', sound: 'sounds/whistle.ogg', background: 'images/pentagon.jpg', howl: new Howl({src: ['sounds/whistle.ogg'], preload: true}) },
                { title: 'woodclick', sound: 'sounds/woodclick.ogg', background: 'images/japan.jpg', howl: new Howl({src: ['sounds/woodclick.ogg'], preload: true}) }
            ]
        }

        this.board = this.state.sounds.map((sound)=>{ return <Tile key={sound.background} sound={sound.sound} background={sound.background} howl={sound.howl} /> })
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
