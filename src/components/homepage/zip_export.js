import React from "react";
import "../../stylings/container_styles/container_style.css";

const ZipExport = (props) => {
  // const sample_download = () => {
  //   try {
  //     window.open("/kings-quest-vi");
  //   } catch (err) {
  //     if (err.message) {
  //       return `Something went wrong: ${err.message}`;
  //     }
  //     return err;
  //   }
  // };
  // you don't need the above with what you're doing below - the below is the 'easy' way

  return (
    <div>
      <h1>Compressed Floppy Disk Downloads!</h1>

      <a href="source_floppies/kq6/whole_game.zip">KQ6 Floppy Download</a>
    </div>
  );
};

export default ZipExport;
