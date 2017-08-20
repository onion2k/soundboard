import React, { Component } from 'react';
import './App.css';

import Tile from './components/Tile/Tile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tile sound='sounds/canoe.ogg' background='images/flashheart.jpg'></Tile>
        <Tile sound='sounds/hailhydra.ogg' background='images/hydra.jpg'></Tile>
      </div>
    );
  }
}

export default App;
