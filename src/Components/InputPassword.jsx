import React from "react";

export default class InputPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      hidePass: true,
    };
  }
  render() {
    
    return (
      <div
        style={{
          width: this.props.width,
          background: "khaki",
          display: "inline-flex",
        }}
      >
        <input
          type={this.state.hidePass ? "password" : "text"}
          style={{ flex: "1 1 80%", minWidth: 0 }}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button
          onClick={() => this.setState({ hidePass: !this.state.hidePass })}
        >
          {this.state.hidePass ? "Show" : "Hide"}
        </button>
      </div>
    );
  }
}
