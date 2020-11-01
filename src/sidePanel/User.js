import React from "react";
import userImg from "../img/user.jpg";
import style from "./mailBox.module.css";

const User = (props) => {
  return (
    <div className={style.user}>
      <div className="user-img">
        <img src={userImg} alt="userImg" />
      </div>
      <div className={style.user_info}>
        <div className={style.user_name}>
          <p>Salman Shah</p>
        </div>
        <div className={style.user_mail}>
          <p>shah.salman4@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default User;
