import React from 'react'

import './post-add-form.css';

export default class PostAddForm extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    onSubmitForm(event) {
        event.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }
    onChangeInput(event) {
        this.setState({
            text: event.target.value
        });
    }
    render(){
        return (
            <form className = "buttom-panel d-flex" onSubmit={this.onSubmitForm}>
                <input 
                    type = "text"
                    placeholder = "О чем вы думаете сейчас?"
                    onChange = {this.onChangeInput}
                    className = "form-control new-post-label"
                    value = {this.state.text}
                />
                <button 
                    type = "submit"
                    className = "btn btn-outline-secondary"
                    >Добавить</button>
            </form>
        )
    }
}

