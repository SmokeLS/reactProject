import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

import styled from 'styled-components';
import AppStore from '../../store/AppStore';
import { observer } from 'mobx-react';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
export default observer(
  class App extends React.Component {
    searchPost(items, term) {
      if (term.length === 0) {
        return items;
      }

      return items.filter((item) => {
        return item.label.indexOf(term) > -1;
      });
    }

    filterPost(data, filter) {
      if (filter === 'like') {
        return data.filter((item) => item.like);
      } else {
        return data;
      }
    }

    render() {
      const liked = AppStore.data.filter((elem) => elem.like);
      const allPosts = AppStore.data.length;

      const allItems = this.filterPost(this.searchPost(AppStore.data, AppStore.term), AppStore.filter);

      return (
        <AppBlock>
          <AppHeader liked={liked} allPosts={allPosts} />
          <div className="search-panel d-flex">
            <SearchPanel onSearch={AppStore.onSearch} />
            <PostStatusFilter filter={AppStore.filter} onFilterSelect={AppStore.onFilterSelect} />
          </div>
          <PostList
            posts={allItems}
            onDelete={AppStore.deleteItem}
            onToggleImportant={AppStore.onToggleImportant}
            onToggleLiked={AppStore.onToggleLiked}
          />
          <PostAddForm onAdd={AppStore.addItem} />
        </AppBlock>
      );
    }
  },
);
