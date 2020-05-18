import React from "react";
import "../../stylings/container_styles/container_style.css";
import axios from "axios";

const ZipExport = (props) => {
  const sample_download = (game) => {
    try {
      axios
        .get("/game_download", {
          params: {
            selected_game: game,
          },
        })
        .then(({ data }) => {
          var url = window.URL.createObjectURL(new Blob([data]));
          var a = document.createElement("a");
          a.href = url;
          a.download = game + ".zip";
          a.click();
          a.remove();
          setTimeout(() => window.URL.revokeObjectURL(url), 100);
        });
    } catch (err) {
      if (err.message) {
        return `Something went wrong: ${err.message}`;
      }
      return err;
    }
  };

  const container_style = {
    display: "flex",
    flexFlow: "row wrap",
    width: "35%",
    height: "50%",
    justifyContent: "space-between",
    fontSize: "20px",
  };

  return (
    <div>
      <h1>Compressed Floppy Disk Downloads!</h1>

      <div style={container_style}>
        <button
          onClick={() => {
            sample_download("kq6");
          }}
        >
          KQ6 Floppy Download
        </button>
        <button
          onClick={() => {
            sample_download("amon_ra");
          }}
        >
          Amon Ra Floppy Download
        </button>
        <button
          onClick={() => {
            sample_download("kq4");
          }}
        >
          KQ4 Floppy Download{" "}
        </button>{" "}
        <a href="source_floppies/kq3/kq3.zip">KQ3 Floppy Download</a>
        <a href="source_floppies/kq4/kq4.zip">KQ4 Floppy Download</a>
      </div>
    </div>
  );
};

export default ZipExport;
