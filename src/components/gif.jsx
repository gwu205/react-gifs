import React, { Component } from 'react';

class Gif extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (event) => {
        this.props.updateGif(this.props.id);
    }

    render() {
        return (
            <img src={`https://media2.giphy.com/media/${this.props.id}/200.gif`} className="gif" onClick={this.handleClick} />
        )
    }
}

export default Gif;
