import { makeAutoObservable } from 'mobx';
import AppStore from './AppStore';

class SearchPanelStore {
  term = '';

  constructor() {
    makeAutoObservable(this);
  }

  onSearch = (event) => {
    this.term = event.target.value;
    AppStore.onSearch(this.term);
  };
}

export default new SearchPanelStore();
