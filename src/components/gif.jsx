import React, { Component } from 'react';

class Gif extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={this.props.src} className="gif" />
        )
    }
}

export default Gif;
