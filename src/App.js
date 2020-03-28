import React, { Component } from "react";
import "../src/stylings/app.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      pokemon: [],
      buttonClicked: false
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

  pokeCall = async () => {
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

  render() {
    return (
      <div className="flex-container">
        <div className="top-container">
          <div className="flexbox-item-top">
            <h2>Please click one of the buttons below to see what happens!</h2>
            <div>
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
                  this.pokeCall();
                }}
              >
                Click For Pokemon!!
              </button>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          {this.state.pokemon.length === 0 &&
          this.state.buttonClicked === true ? (
            <h3>Loading...</h3>
          ) : (
            this.state.pokemon.map((poke, index) => {
              return (
                <div className="flexbox-item-bottom" key={index}>
                  {poke}
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default App;
