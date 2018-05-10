import React from "react";
import styled from "styled-components";

const TableRow = styled.div`
  display: table-row;
`;

const Label = styled.label`
  display: table-cell;
  white-space: nowrap;
  text-align: right;
  vertical-align: middle;
  padding-right: 10px;
  padding-top: 5px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid grey;
  background: transparent;
  display: table-cell;
  max-width: 300px;
  padding: 10px 10px;
  margin-top: 5px;
`;

export default class extends React.Component {
  onInputChange = e => {
    this.props.onInputChange(this.props.name, e.target.value);
  };

  onEnterPress = e => {
    if (e.keyCode === 13) {
      this.props.onEnterPress();
    }
  };

  render() {
    return (
      <TableRow>
        <Label htmlFor={this.props.id}>{this.props.label}</Label>
        <Input
          type="number"
          id={this.props.id}
          name={this.props.name}
          onChange={this.onInputChange}
          onKeyDown={this.onEnterPress}
          value={this.props.value}
        />
      </TableRow>
    );
  }
}
