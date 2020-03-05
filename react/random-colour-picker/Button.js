import React from 'react';
export class Button extends React.Component {
  render() {
    return React.createElement("button", {
      className: this.props.light ? 'light-button' : 'dark-button',
      onClick: this.props.onClick
    }, "Refresh");
  }

}
