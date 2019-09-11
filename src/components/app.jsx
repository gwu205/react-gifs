import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            selectedGifId: "BBkKEBJkmFbTG"
        }

        this.search('hamburger');
    }

    search = (query) => {
        giphy('Ywdb3MhMr92xFulKl7PAb8BmB0pPKZa5').search({
            q: query,
            rating: 'g'
        }, (error, result) => {
            this.setState({
                gifs: result.data
            });
        });
    }

    render() {

        return (
            <div>
                <div className="left-scene">
                    <Search searchFn={this.search} />
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId} />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs} />
                </div>
            </div>
        )
    }
}

export default App;
