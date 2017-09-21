import React from 'react';
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

    render() {
        return (
            <div>
                <Link to="/" >Home</Link>
                <Link to="posts" >Posts</Link>
            </div>
        );
    }
}