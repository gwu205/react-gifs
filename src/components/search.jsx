import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input className="form-search form-control" placeholder="Search for something..."></input>
        )
    }
}

export default Search;
