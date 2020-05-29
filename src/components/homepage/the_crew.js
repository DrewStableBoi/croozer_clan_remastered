import React, { Component } from "react";
import "../../stylings/app.css";

class TheCrew extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  module_container = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    border: "5px solid blue",
    height: "25%",
    width: "500px",
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div style={this.module_container}>
        <h1 style={{ fontSize: "20px", width: "100%" }}>
          How many times have Ellie and Matt wanted to hook up?
        </h1>

        <button
          className="button"
          onClick={() => {
            this.handleClick();
          }}
        >
          Click to increment{" "}
        </button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default TheCrew;
