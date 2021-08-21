import React from 'react';
import PostAddFormStore from '../../store/PostAddFormStore';

import './post-add-form.css';
import { observer } from 'mobx-react';

export default observer(
  class PostAddForm extends React.Component {
    render() {
      return (
        <form className="buttom-panel d-flex" onSubmit={PostAddFormStore.onSubmitForm}>
          <input
            type="text"
            placeholder="О чем вы думаете сейчас?"
            onChange={PostAddFormStore.onChangeInput}
            className="form-control new-post-label"
            value={PostAddFormStore.text}
          />
          <button type="submit" className="btn btn-outline-secondary">
            Добавить
          </button>
        </form>
      );
    }
  },
);
