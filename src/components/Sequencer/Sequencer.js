import React, { Component } from 'react';
import './Sequencer.css';

class Sequencer extends Component {
  render(props) {
    return (
        <div className="Sequencer">
            { this.props.children }
        </div>
    );
  }
}

export default Sequencer;
