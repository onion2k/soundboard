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
            { sound: 'sounds/brthbotm.ogg', background: null },
            { sound: 'sounds/cluckbel.ogg', background: null },
            { sound: 'sounds/creep.ogg', background: null },
            { sound: 'sounds/cunning1.ogg', background: null },
            { sound: 'sounds/curse1.ogg', background: null },
            { sound: 'sounds/curse2.ogg', background: null },
            { sound: 'sounds/dth_stng.ogg', background: null },
            { sound: 'sounds/eggs.ogg', background: null },
            { sound: 'sounds/Sometimes nice and nasty.ogg', background: null },
            { sound: 'sounds/wit.ogg', background: null },
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
