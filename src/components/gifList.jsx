import React, { Component } from 'react';
import Gif from './gif'

class GifList extends Component {
    constructor(props) {
        super(props);
    }

    renderList = () => {
        return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} updateGif={this.props.updateGif} />);
    }

    render() {
        return (
            <div className="gif-list">
                {this.renderList()}
            </div>
        )
    }
}

export default GifList;
