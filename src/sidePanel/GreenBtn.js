import React from "react";

const CreateNew = (props) => {
  let background = String;
  let color = String;

  if (!props.background) background = "#00b96e";
  else background = props.background;

  if (!props.color) color = "#ffffff";
  else color = props.color;

  return (
    <button
      className="btn-green"
      style={{ backgroundColor: background, color: color }}
    >
      <img src={props.logo} alt={props.text} /> &ensp; {props.text}
    </button>
  );
};

export default CreateNew;
