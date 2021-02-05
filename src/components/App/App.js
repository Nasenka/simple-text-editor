import React from 'react';
import Button from '../Button';
import Select from '../Select';

import style from './App.module.css';

const STORAGE_KEY = 'textEdit';

class App extends React.Component {
  state = {
    isEditable: false,
    editList: [
      {
        id: 1,
        title: 'Выберите дату сохранения',
        disabled: true,
      }
    ],
  }

  textInput = React.createRef();

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (storage) {
      const values = Object.values(storage);
      const options = Object.keys(storage).map(key => ({
        id: key,
        title: key,
        disabled: false,
      }));

      this.textInput.current.innerHTML = values[values.length - 1];

      this.setState({
        editList: [
          ...this.state.editList,
          ...options,
        ]
      });
    }
  }

  handleClickEdit = () => {
    this.setState({
      isEditable: true,
    });
  };

  handleClickSave = () => {
    const currentDate = new Date().toUTCString();
    const editItem = {
      id: currentDate,
      title: currentDate,
      disabled: false,
    }

    this.setState((state) => {
      const { editList } = state;

      editList.push(editItem);
  
      return {
        isEditable: false,
        editList,
      }
    }, () => {
      const storage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

      storage[currentDate] = this.textInput.current.innerHTML;

      localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
    });
  };

  handleClickCancel = () => {
    this.setState({
      isEditable: false,
    });

    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (storage) {
      const values = Object.values(storage);

      this.textInput.current.innerHTML = values[values.length - 1];
    }
  };

  handleChange = (event) => {
    const optionValue = event.target.value;
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    this.textInput.current.innerHTML = storage[optionValue];
  };

  render () {
    const { editList } = this.state;

    return (
      <div className={style.container}>
        <h1>Редактор</h1>
        <Button
          disabled={this.state.isEditable}
          onClick={this.handleClickEdit}
          type="gold"
        >
          Редактировать
        </Button>
        <div
          className={style.textEdit}
          contentEditable={this.state.isEditable}
          ref={this.textInput}
          suppressContentEditableWarning={true}
        >
          <p>Разработать простой текстовый редактор с возможностью сохранения контента в LocalStorage.</p>
        </div>
        <Select
          disabled={!this.state.isEditable}
          editList={editList}
          onChange={this.handleChange}
        />
        <Button
          className={style.saveButton}
          disabled={!this.state.isEditable}
          onClick={this.handleClickSave}
          type="green"
        >
          Сохранить
        </Button>
        <Button
          disabled={!this.state.isEditable}
          onClick={this.handleClickCancel}
          type="red"
        >
          Отмена
        </Button>
      </div>
    );
  }
}

export default App;
