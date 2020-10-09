import React from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends React.Component{
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравились'}
        ]
    }
    render() {
        const btns = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const btnClass = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button 
                    onClick = {() => {this.props.onFilterSelect(name)}}
                    type="button" 
                    key={name} 
                    className={`btn ${btnClass}`}>{label}
                </button>
            )
        });
        return (
            <div className = "btn-group">
                {btns}
            </div>
        )
    }
}


