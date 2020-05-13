import React from "react";
import "../../stylings/container_styles/container_style.css";
import axios from "axios";

const ZipExport = (props) => {
  const sample_download = () => {
    try {
      axios.get("/kings-quest-vi").then((response) => {
        return response.blob().then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `sample.${this.state.file}`);
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        });
      });
    } catch (err) {
      if (err.message) {
        return `Something went wrong: ${err.message}`;
      }
      return err;
    }
  };

  return (
    <div>
      <button onClick={() => sample_download()}>KQ6</button>
      KQ6 Placeholder link
    </div>
  );
};

export default ZipExport;
