import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
    constructor() {
        super();
        this.state = { open: false };
    }
    render(props) {
        return (
            <div className={`Settings  ${this.state.open ? 'open' : ''}`} onClick={(e)=>{ this.setState({ open: !this.state.open }); }}>
                <div className="title">Options</div>
                <div className="panel">
                    <div>Settings</div>
                </div>
            </div>
        );
    }
}

export default Settings;
