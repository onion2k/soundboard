import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Tile from './components/Tile/Tile';

class App extends Component {

    constructor() {
        super();
        const sounds = [
            { sound: 'sounds/hailhydra.ogg', background: 'images/car.jpg' },
            { sound: 'sounds/canoe.ogg', background: 'images/lights.jpg' },
            { sound: 'sounds/balls.ogg', background: 'images/man.jpg' },
            { sound: 'sounds/brthbotm.ogg', background: 'images/vhs.jpg' },
            { sound: 'sounds/cluckbel.ogg', background: 'images/triangle.jpg' },
            { sound: 'sounds/creep.ogg', background: 'images/rad.jpg' },
            { sound: 'sounds/cunning1.ogg', background: 'images/hand.jpg' },
            { sound: 'sounds/curse1.ogg', background: 'images/helmet.png' },
            { sound: 'sounds/curse2.ogg', background: 'images/plant.jpg' },
            { sound: 'sounds/dth_stng.ogg', background: 'images/abstract.jpg' },
            { sound: 'sounds/eggs.ogg', background: 'images/speed.jpg' },
            { sound: 'sounds/Sometimes nice and nasty.ogg', background: 'images/square.jpg' },
            { sound: 'sounds/wit.ogg', background: 'images/synthwave2.jpg' },
            { sound: 'sounds/wit.ogg', background: 'images/palm.jpg' },
            { sound: 'sounds/wit.ogg', background: 'images/pentagon.jpg' },
            { sound: 'sounds/wit.ogg', background: 'images/japan.jpg' }
        ]
        this.board = sounds.map((sound)=>{ return <Tile sound={sound.sound} background={sound.background} /> })
    }

    render() {
        return (
            <div className="App">
                <Header>Synthboard</Header>
                <div className="Soundboard">
                    { this.board }
                </div>
            </div>
        );
    }
}

export default App;
