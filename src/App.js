import React, { Component } from "react";
import "../src/stylings/app.css";
import ZipExport from "./components/homepage/zip_export";
import PokeSetup from "./components/homepage/pokemon_setup";
// import { Switch, Route, Redirect, withRouter } from "react-router-dom"; Need to implement this eventually

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  main_container = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    border: "5px solid black",
    height: "100vh",
    width: "100vw",
  };

  module_container = {
    display: "flex",
    flexFLow: "row wrap",
    border: "5px solid blue",
    height: "50%",
    width: "25%",
  };

  render() {
    return (
      <div style={this.main_container}>
        <PokeSetup />
        <div style={this.module_container}>
          {" "}
          <ZipExport />
        </div>
      </div>
    );
  }
}

export default App;
