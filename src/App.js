import React, { Component } from 'react';
import './App.css';

import Tile from './components/Tile/Tile';

class App extends Component {

    constructor() {
        super();
        const sounds = [
            { sound: 'sounds/hailhydra.ogg', background: 'images/hydra.jpg' },
            { sound: 'sounds/canoe.ogg', background: 'images/flashheart.jpg' },
            { sound: null, background: null },
            { sound: null, background: null },
            { sound: null, background: null },
            { sound: null, background: null },
            { sound: null, background: null },
            { sound: null, background: null },
            { sound: null, background: null },
            { sound: null, background: null },
            { sound: null, background: null },
            { sound: null, background: null },
            { sound: null, background: null },
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
