import React from "react";
import "../../stylings/container_styles/container_style.css";

const PokeBox = (props) => {
  if (!props.pokemon && props.buttonClicked === true) {
    return (
      <div className="no-poke-yet">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="wrapper-box">
      <div className="top-half-box"></div>
      <div className="bottom-half-box">{props.pokemon.name}</div>
    </div>
  );
};

export default PokeBox;
