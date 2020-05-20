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
          try {
            var url = window.URL.createObjectURL(new Blob([data]));
            var a = document.createElement("a");
            a.href = url;
            a.download = game + ".zip";
            a.click();
            a.remove();
            setTimeout(() => window.URL.revokeObjectURL(url), 100);
          } catch (err) {
            window.alert("There is an issue with the .zip file, my liege.");
          }
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
    width: "100%",
    height: "10%",
    justifyContent: "space-between",
    margin: "10px",
    fontSize: "20px",
  };

  const button_style = {
    margin: "10px",
  };
  //For whatever reason all the downloads are corrupt? Lol gotta figure that out

  return (
    <div>
      <h1 style={{ display: "flex", alignSelf: "center", margin: "15px" }}>
        Compressed Floppy Disk Downloads!
      </h1>

      <div style={container_style}>
        <button
          onClick={() => {
            sample_download("Kq6");
          }}
          style={button_style}
        >
          KQ6 Floppy Download
        </button>
        <button
          onClick={() => {
            sample_download("amonRa");
          }}
          style={button_style}
        >
          Amon Ra Floppy Download
        </button>
        <button
          onClick={() => {
            sample_download("Kq4");
          }}
          style={button_style}
        >
          KQ4 Floppy Download{" "}
        </button>{" "}
        <button
          onClick={() => {
            sample_download("Kq3");
          }}
          style={button_style}
        >
          KQ3 Floppy Download{" "}
        </button>{" "}
        <button
          onClick={() => {
            sample_download("Kq2");
          }}
          style={button_style}
        >
          KQ2 Floppy Download{" "}
        </button>{" "}
      </div>
    </div>
  );
};

export default ZipExport;
