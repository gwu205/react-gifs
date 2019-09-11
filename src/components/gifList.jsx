import React, { Component } from 'react';
import Gif from './gif'

class GifList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="gif-list">
            <Gif src="https://media2.giphy.com/media/BBkKEBJkmFbTG/200.gif" />
            <Gif src="https://media2.giphy.com/media/BBkKEBJkmFbTG/200.gif" />
            <Gif src="https://media2.giphy.com/media/BBkKEBJkmFbTG/200.gif" />
            <Gif src="https://media2.giphy.com/media/BBkKEBJkmFbTG/200.gif" />
            <Gif src="https://media2.giphy.com/media/BBkKEBJkmFbTG/200.gif" />
            </div>
        )
    }
}

export default GifList;
