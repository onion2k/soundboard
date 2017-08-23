import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  render(props) {
    return (
        <div className="Track">{ this.props.title }</div>
    );
  }
}

export default Track;
