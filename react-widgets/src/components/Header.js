import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {

    render() {
        return (
            <div className="App-header">
                <h2>{this.props.title}</h2>
                <Nav />
            </div>
        );
    }
}

export default Header;