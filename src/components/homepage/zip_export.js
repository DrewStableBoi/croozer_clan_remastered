import React from "react";
import "../../stylings/container_styles/container_style.css";
import axios from "axios";

const ZipExport = (props) => {
  //public drive links for the floppy downloads
  const kq2_link =
    "https://drive.google.com/file/d/1c0BBi8vY44eU8egkASZkTnSsaAeSWuEm/view?usp=sharing";
  const kq3_link =
    "https://drive.google.com/file/d/1zpOwL47HTyKRq6FuF1D2gZ6fgmh1NC2L/view?usp=sharing";
  const kq4_link =
    "https://drive.google.com/file/d/1nGIfgKAF8mlj09sSREezebIdlciAbmc0/view?usp=sharing";
  const kq6_link =
    "https://drive.google.com/file/d/1O8hmlNHQbgHzgt_8NF98xgpJzqyJEnkf/view?usp=sharing";
  const amon_ra_link =
    "https://drive.google.com/file/d/1U_vsnhNN7y-3kCegTni8gj3MV39-St2T/view?usp=sharing";

  const sample_download = (game) => {
    try {
      axios
        .get("/game_download", {
          params: {
            selected_game: game,
          },
        })
        .then((response) => {
          try {
            //alert the user and then open a window for the drive folder to download
            alert(response.data);
            if (game === "kq6") {
              window.open(kq6_link);
            }
            if (game === "kq4") {
              window.open(kq4_link);
            }
            if (game === "kq3") {
              window.open(kq3_link);
            }
            if (game === "kq2") {
              window.open(kq2_link);
            }
            window.open(amon_ra_link);
          } catch (err) {
            console.log(err);
            window.alert("There is an issue with the redirect, my liege.");
          }
        });
    } catch (err) {
      if (err.message) {
        return `Something went wrong: ${err.message}`;
      }
      return err;
    }
  };

  const module_container = {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-evenly",
    flexFLow: "column wrap",
    height: "25%",
  };

  const button_container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexFlow: "row wrap",
    borderLeft: "3px dotted black",
    height: "75%"
  };

  return (
    <div style={module_container}>
      <h1
        style={{
          display: "inline-block",
        }}
      >
        Compressed Floppy Disk Downloads!
      </h1>
      <div style={{ padding: "10px", borderLeft: "3px dotted black", width: "50%" }}>
        <p>
          These files are ripped from the in-box, 3.5" floppy disk-versions of
          these games. I found that if I had a random disk fail in the set of
          multiple, it was very difficult to find a replacement without buying a
          whole new set. Please enjoy! To replace a specific disk, just:
        </p>
        <li>Download the .zip file for the game you want</li>
        <li>Extract the contents to a destination folder</li>
        <li>
          Copy the folder contents onto a blank floppy disk for the disk you're
          missing
        </li>
        <li>Play the damn game! </li>
      </div>

      <div style={button_container}>
        <button
          className="button"
          onClick={() => {
            sample_download("kq6");
          }}
        >
          KQ6 Floppy Download
        </button>
        <button
          className="button"
          onClick={() => {
            sample_download("amon_ra");
          }}
        >
          Amon Ra Floppy Download
        </button>
        <button
          className="button"
          onClick={() => {
            sample_download("kq4");
          }}
        >
          KQ4 Floppy Download{" "}
        </button>{" "}
        <button
          className="button"
          onClick={() => {
            sample_download("kq3");
          }}
        >
          KQ3 Floppy Download{" "}
        </button>{" "}
        <button
          className="button"
          onClick={() => {
            sample_download("kq2");
          }}
        >
          KQ2 Floppy Download{" "}
        </button>{" "}
      </div>
    </div>
  );
};

export default ZipExport;
