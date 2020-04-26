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
      selectedPoke: "",
      theOne: []
    };
  }

  componentDidMount = () => {
    this.getAll();
  };

  apiCall = () => {
    try {
      axios.get("/hello").then((response) => {
        alert(response.data);
      });
    } catch (error) {
      alert(`Here's the error: ${error}`);
    }
  };

  getAll = async () => {
    try {
      this.setState({
        buttonClicked: true,
      });
      await axios.get("/pokemon").then((response) => {
        this.setState({
          pokemon: response.data,
        });
        console.log(this.state.pokemon);
      });
    } catch (error) {
      alert(`Here's the error: ${error}`);
    }
  };

  iChooseYou = (poke) => {
    try {
      axios.get(`/poke`, {
        params: {
          pokemon: poke.toLowerCase()
        }
      }).then((response) => {
        this.setState({
          theOne: response.data
        })
      });
    } catch (error) {
      alert(`Here's the error: ${error}`);
    }
  };

  setPoke = (event) => {
    this.setState({
      selectedPoke: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.apiCall();
            }}
          >
            Click Me for Instructions!
          </button>
        </div>
        <div>
          <select
            id="Pokemon"
            onChange={this.setPoke}
            style={{
              height: "30px",
              padding: "10px",
              borderRadius: "2px",
            }}
          >
            <option value="" selected>
              Select a Pokemon!
            </option>
            {this.state.pokemon.length === 0 &&
            this.state.buttonClicked === true ? (
              <option value="" selected>
                Select a Pokemon!
              </option>
            ) : (
              this.state.pokemon.map((poke, index) => {
                return (
                  <option key={index} value={poke}>
                    {poke}
                  </option>
                );
              })
            )}
          </select>
        </div>
        <div>
          <button
            className="button"
            onClick={() => {
              this.iChooseYou(this.state.selectedPoke);
            }}
          >
            Fetch Info
          </button>
        </div>
      </div>
    );
  }
}

export default App;
