import React from "react";
import style from "./mailBox.module.css";

const Lists = (props) => {
  return (
    <div className="">
      <hr className="side_panel_hr" />
      <p className="side_panel_header">LISTS</p>
      <p className={style.italic}>Linkedn</p>
      <hr className="side_panel_hr" />
    </div>
  );
};

export default Lists;
