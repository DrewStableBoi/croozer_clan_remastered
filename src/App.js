import React from "react";
import "../src/stylings/app.css";
import axios from "axios";

const api_call = () => {
  try {
    axios.get("/hello").then(response => {
      alert(response.data);
    });
  } catch (error) {
    alert(`Here's the error: ${error}`);
  }
};

function App() {
  return (
    <div className="first_screen">
      WHAT'S UP
      <button onClick={() => {api_call()}}>Click Me!</button>
    </div>
  );
}

export default App;

//I need to figure out how to make my app use my proxy