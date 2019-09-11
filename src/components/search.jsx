import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    handleUpdate = (event) => {
        this.props.searchFn(event.target.value);
    }

    render() {
        return (
            <input className="form-search form-control" placeholder="Search for something..." onChange={this.handleUpdate}></input>
        )
    }
}

export default Search;
