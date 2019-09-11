import React, { Component } from 'react';

class Gif extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={`https://media2.giphy.com/media/${this.props.id}/200.gif`} className="gif" />
        )
    }
}

export default Gif;
