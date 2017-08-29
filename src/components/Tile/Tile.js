import React, { Component } from 'react';

import './Tile.css';

import TiMediaPlay from 'react-icons/lib/ti/media-play';
import TiMediaStop from 'react-icons/lib/ti/media-stop';
import TiTimes from 'react-icons/lib/ti/times';

const STOPPED = 0;
const PLAYING = 1;

function Play(props) {
  const playing = props.playing;
  if (!props.url) return <TiTimes />;
  if (playing===PLAYING) {
    return <TiMediaStop className='playing' />;
  }
  return <TiMediaPlay />;
}

class Tile extends Component {
    constructor(props){

        super(props);

        props.howl.on('end', this.finished.bind(this));
        this.state = { playing: STOPPED, howl: props.howl };

        this.togglePlaying = this.togglePlaying.bind(this);

    }
    togglePlaying(e){
        // if (this.state.playing === STOPPED) {
            this.state.howl.play();
            this.setState({ playing: PLAYING });
        // } else {
        //     this.state.howl.stop();
        //     this.setState({ playing: STOPPED });
        // }
    }
    finished(e){
        this.setState({ playing: STOPPED })
    }
    render(props) {
        return (
            <div className={`Tile  ${this.props.sound ? '' : 'none'}`} onClick={ this.togglePlaying } style={{ backgroundImage: 'url('+this.props.background+')' }}>
                <Play url={this.props.sound} playing={this.state.playing} />
            </div>
        );
    }
}

export default Tile;
