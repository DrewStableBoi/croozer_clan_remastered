import React, {Component} from "react";
import "../src/stylings/app.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: []
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
      axios.get("/consoles").then(response => {
        let results = response.data.map((char) => {
          return char.name;
        })
        this.setState({
          characters: results
        });
        console.log(this.state.characters);
      });
    } catch (error) {
      alert(`Here's the error: ${error}`);
    }
  };

  render() {
    return (
      <div className="first_screen">
        WHAT'S UP
        <button
          onClick={() => {
            this.apiCall();
          }}
        >
          Click Me!
        </button>
        <button
          onClick={() => {
            this.gamesCall();
          }}
        >
          Click For Characters!!
        </button>
        {this.state.characters.map((index) => {
          return <li>{index}</li>
        })}
      </div>
    );
  }
}

export default App;
