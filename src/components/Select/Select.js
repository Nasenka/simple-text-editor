import React from 'react';

import style from './Select.module.css';

class Select extends React.Component {
  renderEditList() {
    return this.props.editList.map((editItem) => {
      return (
        <option
          key={editItem.id}
          value={editItem.id}
          disabled={editItem.disabled}
        >
          {editItem.title}
        </option>
      );
    });
  }

  render () {
    return (
      <select
        className={style.selectStorage}
        defaultValue={this.props.editList[0].id}
        disabled={this.props.disabled}
        onChange={this.props.onChange}
      >
        {this.renderEditList()}
      </select>
    );
  }
}

export default Select;
