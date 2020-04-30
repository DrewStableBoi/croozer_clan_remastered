import React from "react";
import "../../stylings/container_styles/container_style.css"

const PokeBox = (props) => {
    return(
    <div className="wrapper-box">
        <div className="top-half-box">
            <div className="bottom-half-box">
                {props.pokemon.name}
            </div>
        </div>
    </div>
    )
  }

  export default PokeBox;