import React from "react";
import "../../stylings/container_styles/container_style.css";

const PokeBox = (props) => {
  const { name, order, height, weight, id, base_experience } = props.pokemon;
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  if (props.pokemon.length === 0 && props.buttonClicked === true) {
    return (
      <div className="wrapper-box">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="wrapper-box">
      <div className="top-half-box">
        <h1>
          {() => {
            capitalize(name);
          }}
        </h1>
      </div>
      <div className="bottom-half-box">
        <h2>Order #{order}</h2>
        <h2>Height: {height} fart nuggets </h2>
        <h2>Weight: {weight} ass chunks </h2>
        <h2>PokeId: {id}</h2>
        <h2>Starting EXP: {base_experience}</h2>
      </div>
    </div>
  );
};

export default PokeBox;
