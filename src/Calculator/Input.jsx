import React from "react";

export default class extends React.Component {
  onInputChange = e => {
    this.props.onInputChange(this.props.name, e.target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type="number"
          id={this.props.id}
          name={this.props.name}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}
