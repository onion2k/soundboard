import React, { Component } from 'react';
import './App.css';

import Tile from './components/Tile/Tile';

class App extends Component {

    constructor() {
        super();
        const sounds = [
            { sound: 'sounds/hailhydra.ogg', background: 'images/hydra.jpg' },
            { sound: 'sounds/canoe.ogg', background: 'images/flashheart.jpg' },
            { sound: 'sounds/balls.ogg', background: null },
            { sound: 'sounds/brthbotm.mp3', background: null },
            { sound: 'sounds/cluckbel.mp3', background: null },
            { sound: 'sounds/creep.mp3', background: null },
            { sound: 'sounds/cunning1.mp3', background: null },
            { sound: 'sounds/curse1.mp3', background: null },
            { sound: 'sounds/curse2.mp3', background: null },
            { sound: 'sounds/dth_stng.mp3', background: null },
            { sound: 'sounds/eggs.ogg', background: null },
            { sound: 'sounds/Sometimes nice and nasty.mp3', background: null },
            { sound: 'sounds/wit.mp3', background: null },
            { sound: null, background: null },
            { sound: null, background: null },
            { sound: null, background: null }
        ]
        this.board = sounds.map((sound)=>{ return <Tile sound={sound.sound} background={sound.background} /> })
    }

    render() {
        return (
            <div className="App">
                { this.board }
            </div>
        );
    }
}

export default App;
