import React from "react";
import "../../stylings/container_styles/container_style.css";

const PokeBox = (props) => {
  const { name, order, height, weight, id, base_experience } = props.pokemon;
  if (props.pokemon.length === 0 && props.buttonClicked === true) {
    return (
      <div className="wrapper-box">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (props.pokemon.length === 0) {
    return (
      <div styles={{ display: "flex", alignSelf: "center" }}>
        Your Pokemon's Information will be Displayed Here
      </div>
    );
  }
  return (
    <div className="wrapper-box">
      <div className="top-half-box">
        {typeof name != "string" ? (
          <div>Incompatible Name</div>
        ) : (
          <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        )}
      </div>
      <div className="bottom-half-box">
        <h2>Order #{order}</h2>
        <h2>Height: {height} Decimetres </h2>
        <h2>Weight: {weight} Hectograms </h2>
        <h2>ID: {id} </h2>
        <h2>Starting EXP: {base_experience}</h2>
      </div>
    </div>
  );
};

export default PokeBox;
