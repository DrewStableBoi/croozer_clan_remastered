import React, { Component } from "react";
import "../src/stylings/app.css";
import ZipExport from "./components/homepage/zip_export";
import EtlSetup from "./components/homepage/etl_setup";
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

  header_container = {
  padding: "60px",
  textAlign: "left",
  background: "#1abc9c",
  color: "white",
  fontSize: "30px",
  height: "25%",
  }

  render() {
    return (
      <div>
        <div style={this.header_container}>
          <h1>Drew's Portal</h1>
          <p>A collection of cool things that I like to do, etc.</p>
        </div>
        <div style={this.main_container}>
          <ZipExport />
          <EtlSetup />
        </div>
      </div>
    );
  }
}

export default App;
