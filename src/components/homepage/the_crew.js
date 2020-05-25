import React, { Component } from "react";

class TheCrew extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  module_container = {
    display: "flex",
    border: "5px solid blue",
    height: "25%",
    width: "50%",
  };

  handleClick = () => {
    this.setState(prevState => {
       return {count: prevState.count + 1}
    })
}

  render() {
    return (
      <div style={this.module_container}>
        <h1>How many times have Ellie and Matt wanted to hook up?</h1>
        <button onClick={() => {this.handleClick()}}>Click to increment </button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default TheCrew;
