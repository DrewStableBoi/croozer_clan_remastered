import React, { Component } from "react";
import "../src/stylings/app.css";
import ZipExport from "./components/homepage/zip_export";
import PokeSetup from "./components/homepage/pokemon_setup";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <PokeSetup />
        <div className="zip_export_container">
          <ZipExport />
        </div>
      </div>
    );
  }
}

export default App;
