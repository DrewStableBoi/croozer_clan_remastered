import React, { Component } from "react";
import "../src/stylings/app.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      pokemon: [],
      buttonClicked: false,
      selectedPoke: ''
    };
  }

  componentDidMount = () => {
    this.getAll();
  }

  apiCall = () => {
    try {
      axios.get("/hello").then(response => {
        alert(response.data);
      });
    } catch (error) {
      alert(`Here's the error: ${error}`);
    }
  };

  getAll = async () => {
    try {
      this.setState({
        buttonClicked: true
      });
      await axios.get("/pokemon").then(response => {
        this.setState({
          pokemon: response.data
        });
        console.log(this.state.pokemon);
      });
    } catch (error) {
      alert(`Here's the error: ${error}`);
    }
  };

  setPoke = (event) => {
    this.setState({
      selectedPoke: event.target.value
    })
  }

  render() {
    return (
      <div className="flex-container">
        <div className="top-container">
          <div className="flexbox-item-top">
            <h2>Welcome to CHA BOI'S POKEDEX!</h2>
            <div>
              <button
                className="button"
                onClick={() => {
                  this.apiCall();
                }}
              >
                Click Me for instructions!
              </button>
              <label for="Pokemon">Choose a Pokemon:</label>
              <select id="Pokemon" onChange={this.setPoke}>
                {this.state.pokemon.length === 0 &&
                this.state.buttonClicked === true ? (
                  <option value="" selected>Select a Pokemon!</option>
                ) : (
                  this.state.pokemon.map((poke, index) => {
                    return (
                      <option key={index} value={poke} selected>
                        {poke}
                      </option>
                    );
                  })
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="bottom-container">
        </div>
      </div>
    );
  }
}

export default App;
