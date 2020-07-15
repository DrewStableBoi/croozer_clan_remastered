import React from "react";
import "../../stylings/container_styles/container_style.css";

const EtlSetup = (props) => {
  return (
    <div>
      <h1 style={{ display: "flex", alignSelf: "center", margin: "15px" }}>
        Compressed Floppy Disk Downloads!
      </h1>
      <div>
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

      <div>
        <button className="button">KQ6 Floppy Download</button>
        <button className="button">Amon Ra Floppy Download</button>
        <button className="button">KQ4 Floppy Download </button>{" "}
        <button className="button">KQ3 Floppy Download </button>{" "}
        <button className="button">KQ2 Floppy Download </button>{" "}
      </div>
    </div>
  );
};

export default EtlSetup;
