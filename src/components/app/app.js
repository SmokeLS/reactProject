import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {data : [
                {label: 'Going to learn React', important: true, like: false, id:1},
                {label: 'Going to learn React', important: false,like: false, id:2},
                {label: 'Something different', important: false,like: false, id:3}
            ],
            term: '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        
        this.maxId = 4;
    }
    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id );

            const before = data.slice(0, index);
            const after = data.slice(index+1);

            const newArr = [...before, ...after];

            return ({
                data: newArr
            })
        });
    }
    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++,
        }
        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return ({
                data: newArr
            }
            )
        });
    }
    onToggleImportant(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important : !old.important};

            
            const newArr = [...data.slice(0,index),newItem,...data.slice(index+1)];

            return {
                data: newArr
            }

        });
    }
    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like : !old.like};

            const newArr = [...data.slice(0,index),newItem,...data.slice(index+1)];

            return {
                data: newArr
            }

        });
    }
    searchPost(items, term) {
        if (term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1;
        });
    }
    onSearch(term) {
        this.setState({term});
    }
    filterPost(data, filter) {
        if (filter === "like"){
            return data.filter(item => item.like);
        }else{
            return data;
        }
    }
    onFilterSelect(filter) {
        this.setState({filter})
    }
    render(){
        const liked = this.state.data.filter(elem => elem.like);
        const allPosts = this.state.data.length;

        const allItems = this.filterPost(this.searchPost(this.state.data, this.state.term),this.state.filter);
        
        return(
            <AppBlock>
                <AppHeader
                liked={liked}
                allPosts={allPosts}
                />
                <div className = "search-panel d-flex">
                    <SearchPanel
                    onSearch={this.onSearch}/>
                    <PostStatusFilter
                    filter={this.state.filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                posts = {allItems}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}

