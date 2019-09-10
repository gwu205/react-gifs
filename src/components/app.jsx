import React, { Component } from 'react';
import Search from './search';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
    render() {
        return (
            <div>
                <div className="left-scene">
                    <Search />
                    <div className="selected-gif">
                        <Gif src="https://media2.giphy.com/media/BBkKEBJkmFbTG/200.gif" />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList />
                </div>
            </div>
        )
    }
}

export default App;
