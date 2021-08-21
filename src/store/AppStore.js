import { makeAutoObservable, toJS } from 'mobx';

class AppStore {
  data = [
    { label: 'Going to learn React', important: true, like: false, id: 1 },
    { label: 'Going to learn React', important: false, like: false, id: 2 },
    { label: 'Something different', important: false, like: false, id: 3 },
  ];
  term = '';
  filter = 'all';
  maxId = 4;

  constructor() {
    makeAutoObservable(this);
  }

  deleteItem = (id) => {
    const index = toJS(this.data).findIndex((elem) => elem.id === id);

    const before = toJS(this.data).slice(0, index);
    const after = toJS(this.data).slice(index + 1);

    this.data = [...before, ...after];
  };
  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };

    this.data = [...toJS(this.data), newItem];
  };
  onToggleImportant = (id) => {
    const index = toJS(this.data).findIndex((elem) => elem.id === id);

    const old = toJS(this.data)[index];
    const newItem = { ...old, important: !old.important };

    this.data = [...toJS(this.data).slice(0, index), newItem, ...toJS(this.data).slice(index + 1)];
  };
  onToggleLiked = (id) => {
    const index = toJS(this.data).findIndex((elem) => elem.id === id);
    const old = toJS(this.data)[index];
    const newItem = { ...old, like: !old.like };

    this.data = [...toJS(this.data).slice(0, index), newItem, ...toJS(this.data).slice(index + 1)];
  };
  onSearch = (term) => {
    this.term = term;
  };
  onFilterSelect = (filter) => {
    this.filter = filter;
  };
}

export default new AppStore();
