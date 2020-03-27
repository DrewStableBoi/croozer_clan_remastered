import React, { Component } from "react";
import "../src/stylings/app.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      pokemon: []
    };
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

  gamesCall = () => {
    try {
      axios.get("/characters").then(response => {
        let results = response.data.map(char => {
          return char.name;
        });
        this.setState({
          characters: results
        });
        console.log(this.state.characters);
      });
    } catch (error) {
      alert(`Here's the error: ${error}`);
    }
  };

  pokeCall = async () => {
    try {
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

  render() {
    return (
      <div className="first_screen">
        WHAT'S UP
        <div className="first_button_box">
          <button
            className="button"
            onClick={() => {
              this.apiCall();
            }}
          >
            Click Me for a Special Message!
          </button>
          <button
            className="button"
            onClick={() => {
              this.gamesCall();
            }}
          >
            Click For Characters!!
          </button>
          <button
            className="button"
            onClick={() => {
              this.pokeCall();
            }}
          >
            Click For Pokemon!!
          </button>
        </div>
        {this.state.pokemon.map((poke, index) => {
          return <li key = { index }>{poke}</li>
        })}
      </div>
    );
  }
}

export default App;
