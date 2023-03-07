import React from "react";

export default class TexrArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueLength: "0",
      maxLength: this.props.maxLength,
    };
  }

  render() {
    return (
      <div
        style={{
          width: this.props.width,
        }}
      >
        <textarea
          style={{
            flex: "1 1 80%",
            minWidth: this.props.minWidth,
            maxWidth: this.props.maxWidth,
            minHeight: this.props.minHeight,
            maxHeight: this.props.maxHeight,
          }}
          placeholder={this.props.placeholder}
          onChange={(e) =>
            this.setState({ valueLength: e.target.value.length })
          }
          maxLength={this.state.maxLength}
        />
        <br />
        <span>CurrentLen = {this.state.valueLength}</span>
        <br />
        <span>MaxLen = {this.state.maxLength}</span>
      </div>
    );
  }
}
