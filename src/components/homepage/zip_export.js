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

  const container_style = {
    display: "flex",
    flexFlow: "row wrap",
    width: "35%",
    height: "50%",
    justifyContent: "space-between",
    fontSize: "20px",
  };

  // ALSO - declare your styles here as objects that you can make things way cleaner

  return (
    <div>
      <h1>Compressed Floppy Disk Downloads!</h1>

      <div style={container_style}>
        <a href="source_floppies/kq6/whole_game.zip" download>
          KQ6 Floppy Download
        </a>
        <a href="source_floppies/amon_ra/amon_ra.zip" download>
          Amon Ra Floppy Download
        </a>
        <a href="source_floppies/kq2/kq2.zip">KQ2 Floppy Download</a>
        <a href="source_floppies/kq3/kq3.zip">KQ3 Floppy Download</a>
        <a href="source_floppies/kq4/kq4.zip">KQ4 Floppy Download</a>
      </div>
    </div>
  );
};

export default ZipExport;
