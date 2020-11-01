import React from "react";
import { NavLink } from "react-router-dom";
import style from "./mainContent.module.css";
import clipLogo from "../img/clip.png";

const Message = (props) => {
  // console.log(props);
  return (
    <div className={style.message_block}>
      <NavLink
        to={`/inbox/message/${props.message.id}`}
        activeClassName={style.active_message}
      >
        <div className={style.info}>
          <div className={style.header_message}>
            <p className={style.subject_message}>{props.message.subject}</p>
            <p className={style.date_message}>{props.message.date}</p>
          </div>
          <div className={style.sender_message}>
            <p>{props.message.sender}</p>
            <img
              src={clipLogo}
              alt="clipLogo"
              style={{ display: props.message.attachment ? "block" : "none" }}
            />
          </div>
        </div>
      </NavLink>
      <hr className={style.hr_message} />
    </div>
  );
};

export default Message;
