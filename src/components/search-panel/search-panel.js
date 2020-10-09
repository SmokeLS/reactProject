import React, { Component } from 'react';

import './search-panel.css';


export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(event) {
        const term = event.target.value;
        this.setState({term})
        this.props.onSearch(term);
    }
    render() {
        return(
            <input
                className = "form-control search-input"
                type = "text"
                placeholder = "Поиск по записям"
                onChange={this.onSearch}
            />
        )
    }
}
