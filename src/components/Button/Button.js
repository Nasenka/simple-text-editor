import classnames from 'classnames';
import React from 'react';

import style from './Button.module.css';

class Button extends React.Component {
  render () {
    return (
      <button
        className={classnames(style.button, this.props.className, style[this.props.type])}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
