import React from "react";
import "../../stylings/container_styles/container_style.css";
import "../../source_floppies/kq6/whole_game.zip";
const ZipExport = (props) => {
  return (
    <div>
      <a href="whole_game.zip" download>
        KQ6
      </a>
    </div>
  );
};

export default ZipExport;
