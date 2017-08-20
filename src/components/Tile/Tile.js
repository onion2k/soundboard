import React, { Component } from 'react';
import Sound from 'react-sound';
import './Tile.css';

import TiMediaPlay from 'react-icons/lib/ti/media-play';
import TiMediaStop from 'react-icons/lib/ti/media-stop';

function Play(props) {
  const playing = props.playing;
  if (playing===Sound.status.PLAYING) {
    return <TiMediaStop className='playing' />;
  }
  return <TiMediaPlay />;
}

class Tile extends Component {
  constructor(){
    super();
    this.state = { playing: Sound.status.STOPPED };
    this.togglePlaying = this.togglePlaying.bind(this);
    this.finished = this.finished.bind(this);
  }
  togglePlaying(e){
      if (this.state.playing === Sound.status.STOPPED) {
          this.setState({ playing: Sound.status.PLAYING });
      } else {
          this.setState({ playing: Sound.status.STOPPED });
      }
  }
  finished(e){
      this.setState({ playing: Sound.status.STOPPED })
  }
  render(props) {
    return (
      <div className="Tile" onClick={ this.togglePlaying } style={{ backgroundImage: 'url('+this.props.background+')' }}>
        <Play playing={this.state.playing} />
        <Sound url={this.props.sound} playStatus={this.state.playing} autoLoad={true} onFinishedPlaying={ this.finished } />
      </div>
    );
  }
}

export default Tile;
