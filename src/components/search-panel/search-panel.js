import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './search-panel.css';
import SearchPanelStore from '../../store/SearchPanelStore';

export default observer(
  class SearchPanel extends Component {
    render() {
      return (
        <input
          className="form-control search-input"
          type="text"
          placeholder="Поиск по записям"
          onChange={SearchPanelStore.onSearch}
        />
      );
    }
  },
);
