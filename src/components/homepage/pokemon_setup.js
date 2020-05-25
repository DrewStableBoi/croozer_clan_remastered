import React, { Component } from "react";
import "../../stylings/app.css";
import PokeBox from "../../components/homepage/pokemon_info";
import axios from "axios";

class PokeSetup extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      buttonClicked: false,
      selectedPoke: "",
      theOne: [],
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
      await axios.get("/pokemon").then((response) => {
        this.setState({
          pokemon: response.data,
        });
      });
    } catch (error) {
      alert(`Here's the error: ${error}`);
    }
  };

  iChooseYou = (poke) => {
    try {
      this.setState({
        buttonClicked: true,
      });
      axios
        .get(`/poke`, {
          params: {
            pokemon: poke.toLowerCase(),
          },
        })
        .then((response) => {
          this.setState({
            theOne: response.data,
          });
        });
    } catch (error) {
      alert(`Here's the error: ${error}`);
    }
  };

  eraseInfo = () => {
    this.setState({
      buttonClicked: false,
      selectedPoke: "",
      theOne: [],
    });
  };

  setPoke = (event) => {
    this.setState({
      selectedPoke: event.target.value,
    });
  };

  module_container = {
    display: "flex",
    border: "5px solid blue",
    height: "25%",
    width: "50%",
  };

  render() {
    return (
      <div style={this.module_container}>
        <div className="buttons_and_instructions">
          <div>
            <button
              className="button"
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
          <div className="just_buttons">
            <button
              className="button"
              onClick={() => {
                this.iChooseYou(this.state.selectedPoke);
              }}
            >
              Fetch Info
            </button>
            <button
              className="button"
              onClick={() => {
                this.eraseInfo();
              }}
            >
              Erase Info
            </button>
          </div>
        </div>
        <PokeBox
          pokemon={this.state.theOne}
          buttonClicked={this.state.buttonClicked}
        />
      </div>
    );
  }
}

export default PokeSetup;
