import { makeAutoObservable } from 'mobx';
import AppStore from './AppStore';

class PostAddFormStore {
  text = '';

  constructor() {
    makeAutoObservable(this);
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    AppStore.addItem(this.text);
    this.text = '';
  };
  onChangeInput = (event) => {
    this.text = event.target.value;
  };
}
export default new PostAddFormStore();
